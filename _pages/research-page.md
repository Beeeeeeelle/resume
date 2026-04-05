---
title: "Research"
layout: single
permalink: /research/
author_profile: true
classes: wide
---

<style>
.rp-venn-wrap { margin: 0 0 20px; }
.rp-intro { font-size: 14px; line-height: 1.75; color: #666; margin: 0 0 20px; }
/* ── Tabs: pill with dot, matches homepage card style ── */
.rp-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.rp-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 99px;
  border: 1.5px solid #e8e8e8;
  background: #fff;
  font-size: 11px;
  font-weight: 700;
  color: #aaa;
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.rp-tab::before {
  content: '';
  width: 7px; height: 7px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s;
}
.rp-tab:hover { color: #555; border-color: #ccc; }
.rp-tab:hover::before { opacity: 0.7; }
.rp-tab--active-a { background: rgba(123,156,200,0.12); border-color: rgba(123,156,200,0.45); color: #4a6e9a; }
.rp-tab--active-b { background: rgba(200,134,142,0.12); border-color: rgba(200,134,142,0.45); color: #9a5560; }
.rp-tab--active-c { background: rgba(130,184,150,0.12); border-color: rgba(130,184,150,0.45); color: #4a8060; }
.rp-tab--active-d { background: rgba(209,167, 96,0.12); border-color: rgba(209,167, 96,0.45); color: #8a6a28; }
.rp-tab--active-a::before,
.rp-tab--active-b::before,
.rp-tab--active-c::before,
.rp-tab--active-d::before { opacity: 1; }

/* ── Outer panel ── */
.sp-wrap {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-top: 3px solid var(--sp-accent, #7b9cc8);
  border-radius: 14px;
  padding: 20px;
  transition: border-top-color 0.25s;
}

/* Strand header inside container */
.sp-head { margin-bottom: 14px; }
.sp-head__eyebrow {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #aaa;
  margin: 0 0 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.sp-head__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--sp-accent, #7b9cc8);
  display: inline-block;
  flex-shrink: 0;
  transition: background 0.25s;
}
.sp-head__desc {
  font-size: 13.5px;
  line-height: 1.72;
  color: #444;
  margin: 0;
}

/* ── Paper cards grid — matches homepage method cards ── */
.sp-papers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}
@media (max-width: 640px) { .sp-papers { grid-template-columns: 1fr; } }

.sp-paper {
  background: #f7f8fb;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  padding: 13px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.sp-paper__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}
.sp-paper__title {
  font-size: 12.5px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.45;
  text-decoration: none;
  flex: 1;
}
a.sp-paper__title:hover { color: var(--sp-accent, #4a6e9a); }
.sp-paper__badge {
  font-size: 10.5px;
  font-weight: 700;
  color: var(--sp-accent, #4a6e9a);
  background: var(--sp-badge-bg, rgba(123,156,200,0.14));
  border-radius: 99px;
  padding: 2px 9px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.25s, color 0.25s;
}
.sp-paper__venue {
  font-size: 11px;
  color: #999;
  font-style: italic;
  line-height: 1.4;
}
.sp-paper__status {
  font-size: 9px; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.06em; padding: 1px 5px; border-radius: 3px;
  white-space: nowrap; display: inline-block; margin-top: 2px;
}
.sp-status--published { background: rgba(130,184,150,0.18); color: #3a6e50; }
.sp-status--review    { background: rgba(123,156,200,0.18); color: #3a5c80; }
.sp-status--revision  { background: rgba(209,167, 96,0.18); color: #7a5a18; }
.sp-status--in-press  { background: rgba(164,145,171,0.18); color: #6a5278; }
.sp-status--accepted  { background: rgba(124,176,176,0.18); color: #3a6868; }
.sp-status--progress  { background: rgba(123,156,200,0.12); color: #4a5e80; }

/* ── Projects ── */
.sp-section-label {
  font-size: 9.5px; font-weight: 800; text-transform: uppercase;
  letter-spacing: 0.14em; color: #bbb; margin: 0 0 8px;
}
.sp-projects { display: flex; flex-direction: column; gap: 8px; }
.sp-project {
  display: flex;
  align-items: stretch;
  text-decoration: none;
  background: #f7f8fb;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.15s, transform 0.15s;
}
.sp-project:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
  transform: translateY(-1px);
}
.sp-project__thumb {
  width: 80px;
  flex-shrink: 0;
  background: #e8edf4;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sp-project__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.sp-project__thumb--empty {
  background: linear-gradient(135deg, var(--sp-accent, #7b9cc8) 0%, rgba(123,156,200,0.3) 100%);
}
.sp-project__body {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  flex: 1;
}
.sp-project__title {
  font-size: 12px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.4;
}
.sp-project:hover .sp-project__title { color: var(--sp-accent, #4a6e9a); }
.sp-project__arrow {
  font-size: 11px;
  color: var(--sp-accent, #bbb);
  font-weight: 800;
}

/* D — paper card hover lift */
.sp-paper {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.sp-paper:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
}

/* A — fade container for content transitions */
#sp-content {
  transition: opacity 0.18s ease;
}
#sp-content.sp-fading { opacity: 0; }

.rv-hit--panel-active { fill: rgba(0,0,0,0.05) !important; }
</style>

<div class="page-with-rail-nav">
<nav class="page-section-nav" data-page-nav aria-label="Research page sections">
  <div class="page-section-nav__list">
    <a class="page-section-nav__link" href="#strand-a">Agency &amp; SDL</a>
    <a class="page-section-nav__link" href="#strand-b">Authenticity &amp; Assessment</a>
    <a class="page-section-nav__link" href="#strand-c">Equity &amp; Heterogeneity</a>
    <a class="page-section-nav__link" href="#strand-d">Literacy &amp; Design</a>
  </div>
</nav>

<div class="page-with-rail-nav__main">

<p class="rp-intro">My research is organized around four connected strands. Click any region of the map to explore the strand in depth.</p>

<div class="rp-venn-wrap">
  {% include research-venn.html %}
</div>

<div class="rp-tabs">
  <button id="strand-a" class="rp-tab" data-zone="a" onclick="showPanel('a')">Agency &amp; SDL</button>
  <button id="strand-b" class="rp-tab" data-zone="b" onclick="showPanel('b')">Authenticity &amp; Assessment</button>
  <button id="strand-c" class="rp-tab" data-zone="c" onclick="showPanel('c')">Equity &amp; Heterogeneity</button>
  <button id="strand-d" class="rp-tab" data-zone="d" onclick="showPanel('d')">Literacy &amp; Design</button>
</div>

<div class="sp-wrap" id="strand-panel">
  <div class="sp-head">
    <p class="sp-head__eyebrow" id="sp-eyebrow"></p>
    <p class="sp-head__desc" id="sp-desc"></p>
  </div>
  <div id="sp-content"></div>
</div>

</div>
</div>

<script>
(function () {

// Accent = readable text version; bg = soft wash matching venn blob
var COLORS = {
  a:  { accent: '#4a6e9a', bg: 'rgba(123,156,200,0.13)' },
  b:  { accent: '#9a5560', bg: 'rgba(200,134,142,0.13)' },
  c:  { accent: '#4a8060', bg: 'rgba(130,184,150,0.13)' },
  d:  { accent: '#8a6a28', bg: 'rgba(209,167, 96,0.13)' },
  ab: { accent: '#7a6088', bg: 'rgba(164,145,171,0.13)' },
  ac: { accent: '#3a7878', bg: 'rgba(124,176,176,0.13)' },
  bd: { accent: '#8a5840', bg: 'rgba(204,151,119,0.13)' },
  cd: { accent: '#607040', bg: 'rgba(169,187,120,0.13)' }
};

var STRANDS = {
  a: {
    meta: 'Agency & SDL', title: 'AI-Mediated Self-Directed Learning',
    desc: 'I study how learners plan, prompt, verify, and make meaning with AI in self-directed learning environments. This strand brings together conceptual, measurement, and empirical work on how agency is distributed across personal attributes, learning processes, and contexts when AI becomes part of the workflow.',
    papers: [
      { title: 'Development and Validation of the PA-SDA Scale', venue: 'System', year: '2025', href: 'https://doi.org/10.1016/j.system.2025.103793', status: 'published' },
      { title: 'Reconceptualizing Self-Directed Learning in the Era of Generative AI', venue: 'IEEE TLT', year: '2024', href: 'https://doi.org/10.1109/TLT.2024.3386098', status: 'published' },
      { title: 'SDL with GenAI: Insights from YouTube Creators', venue: 'TechTrends', year: '2024', href: 'https://doi.org/10.1007/s11528-024-00960-3', status: 'published' },
      { title: 'Collaborative Problem Solving with Generative AI', venue: 'Computers & Education: AI', year: '2025', href: 'https://doi.org/10.1016/j.caeai.2025.100393', status: 'published' },
      { title: 'Multilingual ChatGPT Applications in Language Learning', venue: 'IJCALLT', year: '2023', href: 'https://doi.org/10.4018/IJCALLT.326135', status: 'published' },
      { title: 'Dynamic Learner State Modeling via MCP', venue: 'Education Sciences', year: '2025', href: 'https://doi.org/10.3390/educsci15081004', status: 'published' },
      { title: 'A Meta-Analysis of AI-Assisted Self-Regulated Learning', venue: 'Online Learning', year: '', href: null, status: 'review' }
    ],
    projects: [
      { title: 'Dissertation: Profiling SDL with Generative AI', href: '/projects/global-learners-genai/', thumb: '/assets/images/dissertation/three-profiles.png' },
      { title: 'Collaborative Problem Solving — Intel Labs', href: '/projects/cps-ai-environments/', thumb: '/assets/images/publications/cps-intel_1.jpg' }
    ]
  },
  b: {
    meta: 'Authenticity & Assessment', title: 'Authenticity, Assessment & Judgment',
    desc: 'I investigate how AI changes what counts as authentic work, authorship, and good evaluative judgment in educational settings. This strand connects instructor-facing questions about assessment and writing with learner-side questions about ownership, reflection, and responsible AI-supported performance.',
    papers: [
      { title: "Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy and Performance", venue: 'British Journal of Educational Technology', year: '2025', href: 'https://doi.org/10.1111/bjet.13588', status: 'published' },
      { title: "Nontraditional Learners' Ownership and Agency with AI Writing Tools", venue: 'Journal of Computing in Higher Education', year: '2025', href: 'https://doi.org/10.1007/s12528-025-09476-y', status: 'published' },
      { title: 'The Emotional Equation: Affective Factors Shaping AI-Assisted ESL Writing', venue: 'Education and Information Technologies', year: '', href: null, status: 'review' },
      { title: 'Design Precedents to Design Innovation: AI Monitoring System for Writing Assessment', venue: 'Journal of Computing in Higher Education', year: '', href: null, status: 'accepted' },
      { title: 'Infusing Authenticity into a Service-Learning Program', venue: 'Education + Training', year: '', href: null, status: 'revision' }
    ],
    projects: [{ title: 'Authenticity & Assessment in the Age of GenAI', href: '/projects/authenticity-assessment/', thumb: null }]
  },
  c: {
    meta: 'Equity & Heterogeneity', title: 'Learner Heterogeneity & Equity',
    desc: 'I examine how AI-mediated learning varies across multilingual, global, and nontraditional learners rather than assuming one uniform experience. These studies trace where language background, prior preparation, and institutional context shape who benefits from AI support, how, and at what cost.',
    papers: [
      { title: "Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy and Performance", venue: 'British Journal of Educational Technology', year: '2025', href: 'https://doi.org/10.1111/bjet.13588', status: 'published' },
      { title: "Nontraditional Learners' Ownership and Agency with AI Writing Tools", venue: 'Journal of Computing in Higher Education', year: '2025', href: 'https://doi.org/10.1007/s12528-025-09476-y', status: 'published' },
      { title: 'Empowering Students from Low-Income Families to Improve Writing with ChatGPT', venue: 'Languages', year: '2023', href: 'https://doi.org/10.3390/languages8040238', status: 'published' },
      { title: 'Culturally and Linguistically Responsive Professional Development for AI Integration', venue: 'Online Learning', year: '2023', href: 'https://doi.org/10.24059/olj.v27i4.4003', status: 'published' },
      { title: 'Factors Associated with AI-Assisted Learning Satisfaction and Acceptance', venue: 'IJIET', year: '', href: null, status: 'in-press' }
    ],
    projects: [{ title: 'Dissertation: Global Learners & GenAI', href: '/projects/global-learners-genai/' }]
  },
  d: {
    meta: 'Literacy & Design', title: 'AI Literacy & Learning Design',
    desc: 'I translate research on agency, authenticity, and equity into AI literacy concepts, design principles, and practical learning environments. This strand moves from explanation to action: how should courses, tutoring systems, and institutional supports be designed so AI strengthens reflection and participation rather than passive dependence?',
    papers: [
      { title: 'AI-Generated Content in Education: Literacy for the Age of Generative AI', venue: 'Palgrave Encyclopedia', year: '2026', href: 'https://doi.org/10.1007/978-3-031-51447-0_260-1', status: 'published' },
      { title: 'Two Years of Innovation: Systematic Review of GenAI in Language Learning', venue: 'Computers and Education: AI', year: '2025', href: 'https://doi.org/10.1016/j.caeai.2025.100445', status: 'published' },
      { title: 'Language Educators × Generative AI: A Systematic Review', venue: 'Int. Journal of AI in Education', year: '2026', href: 'https://doi.org/10.1016/j.ijaied.2026.100010', status: 'published' },
      { title: 'The First Year of ChatGPT in Education: A Comprehensive Review', venue: 'Computers and Education: AI', year: '2024', href: 'https://doi.org/10.1016/j.caeai.2024.100266', status: 'published' },
      { title: 'TicApp: A Language Learning Design Case', venue: 'Springer', year: '2024', href: 'https://doi.org/10.1007/978-3-031-76293-2_12', status: 'published' }
    ],
    projects: [
      { title: 'PeteChat — Guardrailed AI Tutoring Assistant', href: '/projects/petechat/', thumb: '/assets/images/projects-petechat-interface-v2.png' },
      { title: 'TicApp — Mobile Learning App for Diverse Learners', href: '/projects/ticapp/', thumb: '/assets/images/publications/ticapp.gif' }
    ]
  },
  ab: {
    meta: 'SDL × Authenticity', title: 'Agency in Authentic Practice',
    desc: 'Work at the intersection of self-directed agency and authentic learning — examining how learners navigate judgment, boundary-setting, and meaningful ownership when AI enters their personal learning workflows.',
    papers: [
      { title: 'Learning in the Loop: Moments, Mindsets, and Meaning with Generative AI', venue: 'Computers & Education', year: '', href: null, status: 'review' },
      { title: 'Choosing the Future of Learning: Assessing Preferences for Educational GPTs', venue: 'Int. Journal of AI in Education', year: '', href: null, status: 'review' }
    ], projects: []
  },
  ac: {
    meta: 'SDL × Equity', title: 'Agency Across Learner Populations',
    desc: 'Work connecting self-directed AI-learning profiles to population-level variation — examining how PA-SDA attributes cluster and evolve across global and multilingual learner groups.',
    papers: [{ title: 'Pathways to Proficiency: Mapping Personal Attributes in AI-Integrated SDL', venue: 'Language Learning & Technology', year: '', href: null, status: 'review' }],
    projects: [{ title: 'Dissertation: Global Learners & GenAI', href: '/projects/global-learners-genai/', thumb: '/assets/images/dissertation/three-profiles.png' }]
  },
  bd: {
    meta: 'Authenticity × Design', title: 'Designing for Authentic Learning',
    desc: 'Work translating findings about authentic learning and judgment into concrete system design — how to build AI-powered tools that preserve student ownership and critical thinking.',
    papers: [], projects: [{ title: 'PeteChat — Guardrailed AI Tutoring Assistant', href: '/projects/petechat/', thumb: '/assets/images/projects-petechat-interface-v2.png' }]
  },
  cd: {
    meta: 'Equity × Design', title: 'Equitable Learning Design',
    desc: 'Work connecting learner heterogeneity research to design decisions — how to build AI-supported environments that work equitably across diverse learner populations.',
    papers: [{ title: 'Factors Associated with AI-Assisted Learning Satisfaction and Acceptance', venue: 'IJIET', year: '', href: null, status: 'in-press' }],
    projects: []
  }
};

var STATUS_LABELS = {
  published: 'Published', review: 'Under Review', revision: 'In Revision',
  'in-press': 'In Press', accepted: 'Accepted', progress: 'In Progress'
};

function showPanel(zone) {
  var data = STRANDS[zone];
  if (!data) return;
  var col = COLORS[zone] || COLORS.a;

  document.querySelectorAll('.rv-hit').forEach(function (el) {
    el.classList.toggle('rv-hit--panel-active', el.getAttribute('data-zone') === zone);
  });

  var mainZone = zone.length === 1 ? zone : null;
  document.querySelectorAll('.rp-tab').forEach(function (tab) {
    tab.className = 'rp-tab';
    if (mainZone && tab.getAttribute('data-zone') === mainZone) {
      tab.classList.add('rp-tab--active-' + mainZone);
    }
  });

  // Set accent + badge bg colors
  var panel = document.getElementById('strand-panel');
  panel.style.setProperty('--sp-accent', col.accent);
  panel.style.setProperty('--sp-badge-bg', col.bg);

  // Update header: eyebrow dot + label, description
  document.getElementById('sp-eyebrow').innerHTML =
    data.meta + ' <span class="sp-head__dot"></span>';
  document.getElementById('sp-desc').textContent = data.desc;

  // Paper cards grid
  var html = '';
  if (data.papers && data.papers.length) {
    html += '<p class="sp-section-label">Papers</p><div class="sp-papers">';
    data.papers.forEach(function (p) {
      var badge = p.year || STATUS_LABELS[p.status] || '';
      html += '<div class="sp-paper">';
      html += '<div class="sp-paper__top">';
      html += p.href
        ? '<a class="sp-paper__title" href="' + p.href + '" target="_blank" rel="noopener">' + p.title + '</a>'
        : '<span class="sp-paper__title">' + p.title + '</span>';
      if (badge) html += '<span class="sp-paper__badge">' + badge + '</span>';
      html += '</div>';
      if (p.venue) html += '<span class="sp-paper__venue">' + p.venue + '</span>';
      if (!p.year) html += '<span class="sp-paper__status sp-status--' + p.status + '">' + (STATUS_LABELS[p.status] || p.status) + '</span>';
      html += '</div>';
    });
    html += '</div>';
  }

  if (data.projects && data.projects.length) {
    html += '<p class="sp-section-label" style="margin-top:14px">Related Projects</p><div class="sp-projects">';
    data.projects.forEach(function (p) {
      html += '<a class="sp-project" href="' + p.href + '">';
      if (p.thumb) {
        html += '<div class="sp-project__thumb"><img src="' + p.thumb + '" alt="' + p.title + '" loading="lazy"></div>';
      } else {
        html += '<div class="sp-project__thumb sp-project__thumb--empty"></div>';
      }
      html += '<div class="sp-project__body">';
      html += '<span class="sp-project__title">' + p.title + '</span>';
      html += '<span class="sp-project__arrow">↗ View project</span>';
      html += '</div></a>';
    });
    html += '</div>';
  }

  // A — fade transition
  var contentEl = document.getElementById('sp-content');
  contentEl.classList.add('sp-fading');
  setTimeout(function () {
    contentEl.innerHTML = html;
    contentEl.classList.remove('sp-fading');
  }, 160);
}

window.showPanel = showPanel;

document.addEventListener('click', function (e) {
  if (!document.getElementById('strand-panel')) return;
  var hit = e.target.closest('.rv-hit');
  if (!hit) return;
  e.stopPropagation();
  showPanel(hit.getAttribute('data-zone'));
  // B — scroll panel into view
  setTimeout(function () {
    document.getElementById('strand-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 80);
}, true);

// Wire rail nav links to also call showPanel
var NAV_ZONE_MAP = { '#strand-a': 'a', '#strand-b': 'b', '#strand-c': 'c', '#strand-d': 'd' };
document.addEventListener('DOMContentLoaded', function () {
  // Read hash to activate the right strand (e.g. from homepage venn click)
  var hash = window.location.hash; // e.g. '#strand-a'
  var initialZone = (hash && NAV_ZONE_MAP[hash]) ? NAV_ZONE_MAP[hash] : 'a';
  showPanel(initialZone);

  document.querySelectorAll('.page-section-nav__link').forEach(function (link) {
    var zone = NAV_ZONE_MAP[link.getAttribute('href')];
    if (zone) link.addEventListener('click', function () { showPanel(zone); });
  });
});

})();
</script>
