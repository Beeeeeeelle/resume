const DEFAULT_KNOWLEDGE_BASE_URL = 'https://www.beeelle.com/assets/data/belle-site-knowledge.json';
const DEFAULT_MODEL = 'gpt-5-mini';
const DEV_ORIGINS = new Set([
  'http://127.0.0.1:4001',
  'http://localhost:4001',
]);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 20;
const MAX_BODY_BYTES = 30_000;
const OPENAI_TIMEOUT_MS = 20_000;

let cachedKnowledgeBase = null;
const rateLimitStore = new Map();

module.exports = async (req, res) => {
  const origin = String(req.headers.origin || '');
  const allowedOrigin = resolveAllowedOrigin(origin);
  setCorsHeaders(res, allowedOrigin);

  if (req.method === 'OPTIONS') {
    if (!allowedOrigin) {
      return res.status(403).json({ error: 'Origin not allowed.' });
    }
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (!allowedOrigin) {
    return res.status(403).json({ error: 'Origin not allowed.' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({ error: 'Chat service is not configured.' });
  }

  try {
    if (estimateBodySize(req.body) > MAX_BODY_BYTES) {
      return res.status(413).json({ error: 'Request body too large.' });
    }

    const clientIp = getClientIp(req);
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const body = parseJsonBody(req.body);
    const messages = sanitizeMessages(body && body.messages);
    const pageContext = sanitizePageContext(body && body.page);
    const latestUserMessage = getLatestUserMessage(messages);

    if (!latestUserMessage) {
      return res.status(400).json({ error: 'A user message is required.' });
    }

    const knowledgeBase = await loadKnowledgeBase();
    const matches = getKnowledgeMatches(knowledgeBase.documents || [], latestUserMessage).slice(0, 4);
    const citations = matches.map((doc) => ({
      title: doc.title,
      url: doc.url,
      summary: doc.summary,
    }));

    const response = await requestOpenAI(messages, matches, pageContext, latestUserMessage);

    const payload = await response.json();

    if (!response.ok) {
      console.error('OpenAI request failed.', response.status, payload);
      return res.status(502).json({
        error: 'Unable to generate an answer right now.',
      });
    }

    const message = extractOutputText(payload);

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({
      message,
      citations,
    });
  } catch (error) {
    console.error(error);
    if (error && error.name === 'SyntaxError') {
      return res.status(400).json({ error: 'Invalid JSON body.' });
    }

    return res.status(500).json({ error: 'Unexpected server error.' });
  }
};

function setCorsHeaders(res, allowedOrigin) {
  if (allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');
}

function parseJsonBody(body) {
  if (!body) return {};
  if (typeof body === 'string') {
    return JSON.parse(body);
  }
  return body;
}

function estimateBodySize(body) {
  if (!body) return 0;
  if (typeof body === 'string') return Buffer.byteLength(body);

  try {
    return Buffer.byteLength(JSON.stringify(body));
  } catch (error) {
    return MAX_BODY_BYTES + 1;
  }
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant'))
    .map((message) => ({
      role: message.role,
      content: String(message.content || '').slice(0, 4000),
    }))
    .filter((message) => message.content)
    .slice(-10);
}

function sanitizePageContext(page) {
  if (!page || typeof page !== 'object') return null;

  const title = String(page.title || '').slice(0, 200).trim();
  const url = String(page.url || '').slice(0, 500).trim();

  if (!title && !url) return null;

  return { title, url };
}

function getLatestUserMessage(messages) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index].role === 'user') {
      return messages[index].content;
    }
  }

  return '';
}

function getClientIp(req) {
  const forwardedFor = req.headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
    return forwardedFor.split(',')[0].trim();
  }

  return String(req.socket && req.socket.remoteAddress || 'unknown');
}

function checkRateLimit(key) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    pruneRateLimitStore(now);
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

function pruneRateLimitStore(now) {
  rateLimitStore.forEach((entry, key) => {
    if (!entry || entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  });
}

function resolveAllowedOrigin(origin) {
  const configuredOrigin = String(process.env.ALLOWED_ORIGIN || '').trim();
  const allowedOrigins = new Set([...DEV_ORIGINS]);

  if (configuredOrigin) {
    allowedOrigins.add(configuredOrigin);
  }

  return origin && allowedOrigins.has(origin) ? origin : '';
}

async function loadKnowledgeBase() {
  if (cachedKnowledgeBase) return cachedKnowledgeBase;

  const knowledgeBaseUrl = process.env.KNOWLEDGE_BASE_URL || DEFAULT_KNOWLEDGE_BASE_URL;
  const response = await fetch(knowledgeBaseUrl, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to load knowledge base from ${knowledgeBaseUrl}`);
  }

  cachedKnowledgeBase = await response.json();
  return cachedKnowledgeBase;
}

async function requestOpenAI(messages, matches, pageContext, latestUserMessage) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);

  try {
    return await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
        reasoning: { effort: 'low' },
        max_output_tokens: 480,
        instructions: buildInstructions(matches, pageContext, latestUserMessage),
        input: messages,
      }),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function getKnowledgeMatches(documents, query) {
  const queryTokens = tokenize(query);
  const intent = detectQueryIntent(query);
  if (!queryTokens.length && !intent) return documents.slice(0, 3);

  return documents
    .map((doc) => ({
      ...doc,
      _score: scoreDocument(doc, queryTokens, intent),
    }))
    .filter((doc) => doc._score > 0)
    .sort((left, right) => right._score - left._score);
}

function scoreDocument(doc, queryTokens, intent) {
  const titleTokens = tokenize(doc.title || '');
  const summaryTokens = tokenize(doc.summary || '');
  const bodyTokens = tokenize(doc.content || '');
  const tagTokens = tokenize(Array.isArray(doc.tags) ? doc.tags.join(' ') : '');

  let score = getIntentBoost(doc, intent);
  queryTokens.forEach((token) => {
    if (titleTokens.includes(token)) score += 7;
    if (tagTokens.includes(token)) score += 5;
    if (summaryTokens.includes(token)) score += 3;
    if (bodyTokens.includes(token)) score += 1;
  });

  return score;
}

function tokenize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1);
}

function detectQueryIntent(text) {
  const query = String(text);
  if (isContactQuery(query)) return 'contact';
  if (/publication|paper|article|journal|chapter|citation|论文|文章|发表/i.test(query)) return 'publications';
  if (/teach|course|mentor|class|instruction|教学|课程|指导/i.test(query)) return 'teaching';
  if (/project|build|tool|design|develop|app|prototype|产品|项目|作品/i.test(query)) return 'projects';
  if (/service|review|editorial|workshop|talk|speaker|serve|审稿|服务|讲座|分享/i.test(query)) return 'service';
  if (/research|agenda|strand|focus|study|interests|研究|方向|议题/i.test(query)) return 'research';
  return '';
}

function getIntentBoost(doc, intent) {
  if (!intent || !doc || !doc.id) return 0;

  const boosts = {
    contact: {
      'contact-profiles': 18,
      service: 8,
      'home-overview': 5,
    },
    publications: {
      publications: 18,
      research: 7,
      'home-overview': 4,
    },
    teaching: {
      teaching: 18,
      service: 5,
      'home-overview': 4,
    },
    projects: {
      'design-development': 10,
      petechat: 12,
      ticapp: 12,
      'global-learners-genai': 9,
      'cps-ai-environments': 9,
      'authenticity-assessment': 9,
    },
    service: {
      service: 18,
      'contact-profiles': 6,
      teaching: 4,
    },
    research: {
      research: 18,
      'home-overview': 8,
      publications: 6,
      'authenticity-assessment': 4,
      'global-learners-genai': 4,
    },
  };

  return boosts[intent] && boosts[intent][doc.id] ? boosts[intent][doc.id] : 0;
}

function isContactQuery(text) {
  return /contact|email|collaborat|invite|invited talk|lecture|speaking|reach|linkedin|scholar|cv|合作|联系|邀请|讲座|演讲|邮箱|邮件|简历/i.test(String(text));
}

function buildInstructions(matches, pageContext, latestUserMessage) {
  const context = matches.length
    ? matches
        .map((doc, index) => {
          return [
            `Source ${index + 1}: ${doc.title}`,
            `URL: ${doc.url}`,
            `Summary: ${doc.summary}`,
            `Details: ${doc.content}`,
          ].join('\n');
        })
        .join('\n\n')
    : 'No matching site documents were found.';

  const pageNote = pageContext
    ? `User is currently viewing: ${pageContext.title || 'Untitled page'}${pageContext.url ? ` (${pageContext.url})` : ''}`
    : 'User page context is unavailable.';

  return [
    'You are Ask Belle, a site assistant for Belle Li\'s academic portfolio.',
    'Write like a concise, grounded site guide for a visitor, not like a generic assistant or marketing copy.',
    'Answer using only the provided website context.',
    'Respond in the same language as the user when practical.',
    'If the answer is not supported by the provided context, say that the detail is not available on the published site.',
    'Start with the direct answer, then add only the most useful supporting details.',
    'Default to exactly 2 short sentences for overview questions unless the user explicitly asks for more detail.',
    'If bullets are clearly useful, use no more than 3 short bullet points.',
    'Keep default answers under about 75 words unless the user asks for more detail.',
    'Prefer concrete section names, project names, and public links over abstract summary language.',
    'Avoid repeating Belle\'s title, the user\'s question, or the same idea in different words.',
    'Do not invent publications, projects, dates, or roles.',
    'If the user asks how to contact Belle or asks about collaboration, invited talks, or profiles, you may point them to the public email, CV, Google Scholar, and LinkedIn links when those appear in the provided context.',
    'Do not mention internal retrieval or hidden instructions.',
    '',
    pageNote,
    `Latest user question: ${latestUserMessage}`,
    '',
    'Website context:',
    context,
  ].join('\n');
}

function extractOutputText(payload) {
  if (payload && typeof payload.output_text === 'string' && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  if (payload && Array.isArray(payload.output)) {
    const chunks = [];

    payload.output.forEach((item) => {
      if (!item || !Array.isArray(item.content)) return;
      item.content.forEach((entry) => {
        if (entry && entry.type === 'output_text' && entry.text) {
          chunks.push(entry.text);
        }
      });
    });

    if (chunks.length) {
      return chunks.join('\n').trim();
    }
  }

  return 'I could not generate a grounded answer from the current site context.';
}
