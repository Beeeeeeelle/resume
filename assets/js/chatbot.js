if (!window.__belleChatbotInitialized) {
  window.__belleChatbotInitialized = true;

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('[data-site-chatbot]');
    const configNode = document.getElementById('site-chatbot-config');

    if (!root || !configNode) return;

    let config = {};
    try {
      config = JSON.parse(configNode.textContent || '{}');
    } catch (error) {
      console.error('Unable to parse chatbot config.', error);
      return;
    }

    initChatbot(root, config);
  });
}

async function initChatbot(root, config) {
  const html = document.documentElement;
  const panel = root.querySelector('[data-chatbot-panel]');
  const backdrop = root.querySelector('[data-chatbot-backdrop]');
  const toggle = root.querySelector('[data-chatbot-toggle]');
  const resetButton = root.querySelector('[data-chatbot-reset]');
  const closeButton = root.querySelector('[data-chatbot-close]');
  const modeBadge = root.querySelector('[data-chatbot-mode]');
  const contacts = root.querySelector('[data-chatbot-contacts]');
  const form = root.querySelector('[data-chatbot-form]');
  const input = root.querySelector('[data-chatbot-input]');
  const submit = root.querySelector('[data-chatbot-submit]');
  const messages = root.querySelector('[data-chatbot-messages]');
  const suggestions = root.querySelector('[data-chatbot-suggestions]');
  const suggestionButtons = [...root.querySelectorAll('[data-chatbot-suggestion]')];

  if (!panel || !toggle || !form || !input || !submit || !messages) return;

  const initialIntro = String(config.intro || 'Ask about Belle\'s research agenda, publications, teaching experience, or design projects.');
  panel.inert = true;

  const state = {
    isOpen: false,
    isSending: false,
    hasUserMessage: false,
    conversation: [],
    knowledgeBase: null,
    previouslyFocused: null,
    contactHighlightTimer: null,
  };

  const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  syncModeBadge(config.apiUrl ? 'live' : 'guide');

  toggle.addEventListener('click', () => {
    setOpenState(!state.isOpen);
  });

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      setOpenState(false);
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      setOpenState(false);
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      resetConversation();
    });
  }

  document.addEventListener('mousedown', (event) => {
    if (!state.isOpen) return;
    if (root.contains(event.target)) return;
    setOpenState(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.isOpen) {
      event.preventDefault();
      setOpenState(false);
      return;
    }

    if (event.key === 'Tab' && state.isOpen) {
      const focusableItems = [...panel.querySelectorAll(focusableSelector)];
      if (!focusableItems.length) return;

      const first = focusableItems[0];
      const last = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text || state.isSending) return;
    await handleUserMessage(text);
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  });

  input.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  suggestionButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-chatbot-suggestion') || button.textContent || '';
      if (!text.trim() || state.isSending) return;
      await handleUserMessage(text.trim());
    });
  });

  async function handleUserMessage(text) {
    if (!state.hasUserMessage) {
      state.hasUserMessage = true;
      if (suggestions) {
        suggestions.classList.add('is-condensed');
        suggestions.hidden = true;
      }
    }

    if (isContactQuery(text)) {
      emphasizeContacts(3600);
    }

    appendMessage(messages, 'user', text);
    state.conversation.push({ role: 'user', content: text });
    input.value = '';
    input.style.height = 'auto';
    setSendingState(true);
    setOpenState(true);

    const typingNode = appendTyping(messages);

    try {
      let responsePayload = null;

      if (config.apiUrl) {
        responsePayload = await requestAssistantResponse(config, state.conversation);
        syncModeBadge('live');
      } else {
        responsePayload = await buildFallbackResponse(config, state, text, { setupMode: true });
        syncModeBadge('guide');
      }

      if (!responsePayload || !responsePayload.message) {
        responsePayload = await buildFallbackResponse(config, state, text, { setupMode: !config.apiUrl });
      }

      typingNode.remove();
      appendMessage(messages, 'assistant', responsePayload.message, responsePayload.citations || []);
      state.conversation.push({ role: 'assistant', content: responsePayload.message });
    } catch (error) {
      if (!error || !error.isExpectedChatbotFailure) {
        console.error('Chatbot request failed.', error);
      }
      typingNode.remove();
      const fallback = await buildFallbackResponse(config, state, text, { degradedMode: true });
      appendMessage(messages, 'assistant', fallback.message, fallback.citations || []);
      state.conversation.push({ role: 'assistant', content: fallback.message });
      syncModeBadge(config.apiUrl ? 'degraded' : 'guide');
    } finally {
      setSendingState(false);
    }
  }

  function setOpenState(nextState) {
    state.isOpen = nextState;
    toggle.setAttribute('aria-expanded', String(nextState));
    if (nextState) {
      root.classList.add('is-open');
      panel.hidden = false;
      panel.inert = false;
      if (backdrop) {
        backdrop.hidden = false;
      }
      html.classList.toggle('chatbot-lock', window.innerWidth < 769);
      state.previouslyFocused = document.activeElement && document.activeElement !== document.body
        ? document.activeElement
        : toggle;
      window.setTimeout(() => input.focus(), 80);
    } else {
      html.classList.remove('chatbot-lock');
      const returnFocusTarget = state.previouslyFocused
        && state.previouslyFocused !== document.body
        && !panel.contains(state.previouslyFocused)
        ? state.previouslyFocused
        : toggle;

      if (returnFocusTarget && typeof returnFocusTarget.focus === 'function') {
        returnFocusTarget.focus();
      } else {
        toggle.focus();
      }

      root.classList.remove('is-open');
      panel.inert = true;
      panel.hidden = true;
      if (backdrop) {
        backdrop.hidden = true;
      }
    }
  }

  function setSendingState(isSending) {
    state.isSending = isSending;
    submit.disabled = isSending;
    input.disabled = isSending;
    if (resetButton) {
      resetButton.disabled = isSending;
    }
    root.classList.toggle('is-sending', isSending);
    messages.setAttribute('aria-busy', String(isSending));
  }

  function syncModeBadge(mode) {
    if (!modeBadge) return;

    modeBadge.classList.remove('is-live', 'is-degraded');

    if (mode === 'live') {
      modeBadge.textContent = 'Live AI';
      modeBadge.classList.add('is-live');
      return;
    }

    if (mode === 'degraded') {
      modeBadge.textContent = 'Fallback mode';
      modeBadge.classList.add('is-degraded');
      return;
    }

    modeBadge.textContent = 'Site guide mode';
  }

  function emphasizeContacts(durationMs) {
    if (!contacts) return;

    contacts.classList.add('is-emphasized');
    if (state.contactHighlightTimer) {
      window.clearTimeout(state.contactHighlightTimer);
    }

    state.contactHighlightTimer = window.setTimeout(() => {
      contacts.classList.remove('is-emphasized');
    }, durationMs || 2400);
  }

  function resetConversation() {
    state.conversation = [];
    state.hasUserMessage = false;
    messages.innerHTML = '';
    appendMessage(messages, 'assistant', initialIntro);
    if (suggestions) {
      suggestions.hidden = false;
      suggestions.classList.remove('is-condensed');
    }
    if (contacts) {
      contacts.classList.remove('is-emphasized');
    }
    input.value = '';
    input.style.height = 'auto';
    syncModeBadge(config.apiUrl ? 'live' : 'guide');
    setSendingState(false);
    setOpenState(true);
  }
}

async function requestAssistantResponse(config, conversation) {
  const response = await fetch(config.apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: conversation.slice(-10),
      page: {
        url: window.location.href,
        title: document.title,
      },
    }),
  });

  if (!response.ok) {
    const error = new Error(`Chatbot API returned ${response.status}`);
    error.status = response.status;
    error.isExpectedChatbotFailure = response.status >= 400 && response.status < 600;
    throw error;
  }

  const payload = await response.json();
  return {
    message: payload.message || payload.reply || '',
    citations: Array.isArray(payload.citations) ? payload.citations : [],
  };
}

async function buildFallbackResponse(config, state, query, options) {
  const knowledgeBase = await loadKnowledgeBase(config, state);
  const matches = knowledgeBase ? getKnowledgeMatches(knowledgeBase.documents || [], query).slice(0, 3) : [];
  const locale = detectFallbackLocale(query);

  if (!matches.length) {
    return {
      message: localizeFallbackCopy(locale,
        options && options.setupMode
          ? 'Site guide mode. Start with Research, Publications, Teaching, or Design & Development.'
          : 'I could not find a close match in the site guide. Try asking about Belle\'s research, publications, teaching, service, projects, or contact information.',
        options && options.setupMode
          ? '当前是站内导览模式。你可以先从 Research、Publications、Teaching 或 Design & Development 开始。'
          : '我暂时没有在站内导览里找到足够接近的内容。可以试着问 Belle 的研究、论文、教学、服务、项目或联系方式。'
      ),
      citations: defaultGuideLinks(),
    };
  }

  const lead = localizeFallbackCopy(
    locale,
    options && options.setupMode
      ? 'Site guide mode. These are the closest matches on the published site:'
      : options && options.degradedMode
        ? 'Live answer unavailable. Using the site guide instead:'
        : 'These pages look most relevant based on the local site guide:',
    options && options.setupMode
      ? '当前是站内导览模式。下面这些页面和你的问题最接近：'
      : options && options.degradedMode
        ? '实时回答暂时不可用，先改用站内导览：'
        : '根据当前站内知识，这些页面最相关：'
  );

  return {
    message: `${lead}`,
    citations: matches.map((doc) => ({
      title: doc.title,
      url: doc.url,
      summary: doc.summary,
    })),
  };
}

async function loadKnowledgeBase(config, state) {
  if (state.knowledgeBase) return state.knowledgeBase;
  if (!config.knowledgeBaseUrl) return null;

  try {
    const response = await fetch(config.knowledgeBaseUrl, {
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) return null;
    state.knowledgeBase = await response.json();
    return state.knowledgeBase;
  } catch (error) {
    console.error('Unable to load local chatbot knowledge base.', error);
    return null;
  }
}

function appendMessage(container, role, text, citations) {
  const article = document.createElement('article');
  article.className = `site-chatbot__message site-chatbot__message--${role}`;

  const bubble = document.createElement('div');
  bubble.className = 'site-chatbot__bubble';
  renderMessageBody(bubble, text);

  if (Array.isArray(citations) && citations.length) {
    const sources = document.createElement('div');
    sources.className = 'site-chatbot__sources';

    citations.forEach((citation) => {
      if (!citation || !citation.url || !citation.title) return;
      const link = document.createElement('a');
      link.className = 'site-chatbot__source';
      link.href = citation.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      const kind = document.createElement('span');
      kind.className = 'site-chatbot__source-kind';
      kind.textContent = getCitationKind(citation);
      link.appendChild(kind);

      const title = document.createElement('strong');
      title.textContent = citation.title;
      link.appendChild(title);

      if (citation.summary) {
        const summary = document.createElement('span');
        summary.textContent = citation.summary;
        link.appendChild(summary);
      }

      sources.appendChild(link);
    });

    if (sources.children.length) {
      bubble.appendChild(sources);
    }
  }

  article.appendChild(bubble);
  container.appendChild(article);
  container.scrollTop = container.scrollHeight;
  return article;
}

function renderMessageBody(container, text) {
  const blocks = String(text)
    .split(/\n{2,}/)
    .map((segment) => segment.trim())
    .filter(Boolean);

  if (!blocks.length) {
    appendParagraph(container, text);
    return;
  }

  blocks.forEach((block) => {
    const lines = block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    if (!lines.length) return;

    const bulletLines = lines.filter((line) => /^[-*•]\s+/.test(line));

    if (bulletLines.length === lines.length) {
      appendBulletList(container, bulletLines);
      return;
    }

    if (bulletLines.length === lines.length - 1 && /[:：]$/.test(lines[0])) {
      appendParagraph(container, lines[0]);
      appendBulletList(container, bulletLines);
      return;
    }

    appendParagraph(container, lines.join(' '));
  });
}

function appendParagraph(container, text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  container.appendChild(paragraph);
}

function appendBulletList(container, lines) {
  const list = document.createElement('ul');
  list.className = 'site-chatbot__list';

  lines.forEach((line) => {
    const item = document.createElement('li');
    item.textContent = line.replace(/^[-*•]\s+/, '');
    list.appendChild(item);
  });

  container.appendChild(list);
}

function appendTyping(container) {
  const article = document.createElement('article');
  article.className = 'site-chatbot__message site-chatbot__message--assistant';

  const bubble = document.createElement('div');
  bubble.className = 'site-chatbot__bubble site-chatbot__bubble--typing';
  bubble.innerHTML = '<span></span><span></span><span></span>';

  article.appendChild(bubble);
  container.appendChild(article);
  container.scrollTop = container.scrollHeight;
  return article;
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
    if (titleTokens.includes(token)) score += 6;
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

function defaultGuideLinks() {
  return [
    {
      title: 'Research',
      url: 'https://www.beeelle.com/research/',
      summary: 'Research strands, project pages, and agenda overview.',
    },
    {
      title: 'Publications',
      url: 'https://www.beeelle.com/publications/',
      summary: 'Journal articles, book chapters, and works in progress.',
    },
    {
      title: 'Teaching & Mentoring',
      url: 'https://www.beeelle.com/teaching/',
      summary: 'Graduate teaching, course design, and mentoring roles.',
    },
  ];
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

function detectFallbackLocale(text) {
  return /[\u3400-\u9fff]/.test(String(text)) ? 'zh' : 'en';
}

function localizeFallbackCopy(locale, englishText, chineseText) {
  return locale === 'zh' ? chineseText : englishText;
}

function isContactQuery(text) {
  return /contact|email|collaborat|invite|invited talk|lecture|speaking|reach|linkedin|scholar|cv|合作|联系|邀请|讲座|演讲|邮箱|邮件|简历/i.test(String(text));
}

function getCitationKind(citation) {
  const value = `${citation.title || ''} ${citation.url || ''}`.toLowerCase();
  if (value.includes('home overview')) return 'Overview';
  if (value.includes('contact') || value.includes('linkedin') || value.includes('scholar')) return 'Profiles';
  if (value.includes('publication')) return 'Publications';
  if (value.includes('teaching')) return 'Teaching';
  if (value.includes('service')) return 'Service';
  if (value.includes('/projects/')) return 'Project';
  if (value.includes('research')) return 'Research';
  if (value.includes('design') || value.includes('development')) return 'Design';
  return 'Site';
}
