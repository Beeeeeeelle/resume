---
title: "Research"
layout: single
permalink: /research/
author_profile: true
classes: wide
---

<style>
.rp-statement {
  max-width: 980px;
  margin: 0 0 24px;
  color: #4f5964;
  font-size: 17px;
  line-height: 1.7;
}
.rp-overview-art {
  position: relative;
  margin: 0 0 22px;
}
.rp-overview-map {
  position: relative;
}
.rp-overview-art img {
  display: block;
  width: 100%;
  height: auto;
}
.rp-map-hit {
  position: absolute;
  border: 0;
  border-radius: 22px;
  background: transparent;
  cursor: pointer;
  transition: background 0.16s ease;
}
.rp-map-hit span {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.rp-map-hit:hover,
.rp-map-hit:focus-visible,
.rp-map-hit--active {
  background: transparent;
  outline: none;
}
.rp-map-hit--a { left: 10%; top: 7%; width: 32%; height: 43%; }
.rp-map-hit--b { left: 65%; top: 8%; width: 28%; height: 40%; }
.rp-map-hit--c { left: 8%; top: 53%; width: 35%; height: 39%; }
.rp-map-hit--d { left: 63%; top: 53%; width: 30%; height: 38%; }
.rp-intro { font-size: 14px; line-height: 1.75; color: #666; margin: 0 0 20px; }
/* ── Tabs: pill with dot, matches homepage card style ── */
.rp-tabs {
  display: flex;
  gap: 8px;
  margin: 0 0 14px;
  flex-wrap: wrap;
}
.rp-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 99px;
  border: 1.5px solid #dbe5f0;
  background: #fff;
  font-size: 11px;
  font-weight: 700;
  color: #7b8794;
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
  border: 1.5px dashed var(--sp-border, rgba(123, 156, 200, 0.42));
  border-radius: 16px;
  padding: 20px;
  transition: border-color 0.25s;
}

/* Strand header inside container */
.sp-head { margin-bottom: 14px; }
.sp-head__eyebrow {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--sp-accent, #7b9cc8);
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
  font-size: 14px;
  line-height: 1.72;
  color: #4f5964;
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
  background: #fbfdff;
  border: 1px solid #e2ebf4;
  border-radius: 8px;
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
  background: #fbfdff;
  border: 1px solid #e2ebf4;
  border-radius: 8px;
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

.citation-reach {
  margin: 46px 0 0;
  padding: 28px 0 0;
  border-top: 1px solid #e8edf3;
}
.citation-reach__head {
  max-width: 760px;
  margin-bottom: 14px;
}
.citation-reach__eyebrow {
  margin: 0 0 6px;
  color: #9aa3ad;
  font-size: 10px !important;
  line-height: 1.2 !important;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.citation-reach__eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #7b9cc8;
}
.citation-reach__title {
  margin: 0 0 8px;
  color: #1f2933;
  font-size: clamp(21px, 2.4vw, 28px);
  line-height: 1.18;
  letter-spacing: 0;
}
.citation-reach__copy {
  max-width: 620px;
  margin: 0;
  color: #68717c;
  font-size: 14px !important;
  line-height: 1.65 !important;
}
.citation-reach__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 14px;
}
.citation-stat {
  display: inline-flex;
  align-items: baseline;
  gap: 7px;
  padding: 6px 11px;
  border-radius: 999px;
  background: #fff;
  border: 1.5px solid #dbe5f0;
  color: #4a6e9a;
}
.citation-stat:nth-child(2) {
  color: #8a6a28;
}
.citation-stat__num {
  color: currentColor;
  font-size: 14px;
  line-height: 1;
  font-weight: 800;
}
.citation-stat__label {
  color: #6f7b87;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.citation-reach__grid {
  display: block;
}
.citation-map {
  min-height: 280px;
  background: linear-gradient(180deg, #fff 0%, #fbfdff 100%);
  border-top: 1px solid #edf2f7;
  border-bottom: 1px solid #edf2f7;
  overflow: hidden;
  position: relative;
}
.citation-map svg {
  width: 100%;
  height: auto;
  display: block;
}
.citation-map__empty {
  padding: 34px;
  color: #788391;
  font-size: 14px;
  line-height: 1.7;
}
.citation-graticule {
  stroke: #edf2f7;
  stroke-width: 1;
}
.citation-land-dot {
  fill: #dfe8f2;
  opacity: 0.62;
}
.citation-land-dot--warm {
  fill: #eadfcd;
  opacity: 0.48;
}
.citation-dot {
  fill: #7b9cc8;
  stroke: rgba(255, 255, 255, 0.98);
  stroke-width: 2;
  filter: drop-shadow(0 2px 5px rgba(42, 62, 82, 0.2));
}
.citation-dot--gold { fill: #d1a760; }
.citation-dot--green { fill: #82b896; }
.citation-country-label {
  fill: #5c6672;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.01em;
}
.citation-side {
  margin-top: 10px;
}
.citation-side .citation-list {
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0;
}
.citation-side .citation-list ol {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  list-style: none;
  padding: 0;
}
.citation-side .citation-list li {
  margin: 0;
  padding: 5px 10px;
  border: 1px solid #dbe5f0;
  border-radius: 999px;
  background: #fff;
  font-size: 11px;
}
.citation-list {
  padding: 14px 15px;
  border-radius: 8px;
  background: #fbfdff;
  border: 1px solid #e2ebf4;
}
.citation-list h3 {
  margin: 0 0 9px;
  color: #1a1a1a;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.citation-list ol,
.citation-list ul {
  margin: 0;
  padding-left: 18px;
}
.citation-list li {
  margin: 0 0 7px;
  color: #4f5964;
  font-size: 12px;
  line-height: 1.5;
}
.citation-list a {
  color: #3f6387;
  text-decoration: none;
  font-weight: 700;
}
.citation-list a:hover {
  text-decoration: underline;
}
.citation-reach__footer {
  margin: 14px 0 0;
  color: #9aa3ad;
  font-size: 11px !important;
  line-height: 1.45 !important;
}
@media (max-width: 760px) {
  .citation-reach__head,
  .citation-reach__grid {
    display: block;
  }
  .citation-reach__copy {
    margin-top: 10px;
  }
  .citation-side {
    margin-top: 14px;
  }
  .citation-map {
    min-height: 260px;
  }
}
</style>

<div class="page-with-rail-nav">
<nav class="page-section-nav" data-page-nav aria-label="Research page sections">
  <div class="page-section-nav__list">
    <a class="page-section-nav__link" href="#strand-a"><span class="lang-en">Agency &amp; SDL</span><span class="lang-zh" hidden>能动性与自主学习</span></a>
    <a class="page-section-nav__link" href="#strand-b"><span class="lang-en">Authenticity &amp; Assessment</span><span class="lang-zh" hidden>真实性与评估</span></a>
    <a class="page-section-nav__link" href="#strand-c"><span class="lang-en">Equity &amp; Heterogeneity</span><span class="lang-zh" hidden>公平性与学习者异质性</span></a>
    <a class="page-section-nav__link" href="#strand-d"><span class="lang-en">Literacy &amp; Design</span><span class="lang-zh" hidden>AI素养与学习设计</span></a>
    <a class="page-section-nav__link" href="#citation-reach"><span class="lang-en">Citation Reach</span><span class="lang-zh" hidden>引用地图</span></a>
  </div>
</nav>

<div class="page-with-rail-nav__main">

<p class="rp-statement"><span class="lang-en">My research examines how generative AI can support learning without displacing human agency. I study learner differences, authentic assessment, equity, and AI literacy, translating empirical evidence into learning designs that help people remain in charge of their learning.</span><span class="lang-zh" hidden>我的研究关注生成式人工智能如何支持学习，而不削弱人的主体能动性。我研究学习者差异、真实评价、教育公平与AI素养，并将实证发现转化为帮助学习者持续掌握主动权的学习设计。</span></p>

<figure class="rp-overview-art" data-reveal>
  <div class="rp-overview-map" aria-label="Clickable research strand map">
    <img src="/assets/images/research/human-centered-ai-learning-strands.png" alt="Illustrated map of four human-centered AI learning research strands" data-no-lightbox="true">
    <button class="rp-map-hit rp-map-hit--a" type="button" data-zone="a" onclick="showPanel('a', true)"><span>AI-mediated self-directed learning</span></button>
    <button class="rp-map-hit rp-map-hit--b" type="button" data-zone="b" onclick="showPanel('b', true)"><span>Authenticity and assessment</span></button>
    <button class="rp-map-hit rp-map-hit--c" type="button" data-zone="c" onclick="showPanel('c', true)"><span>Learner heterogeneity and equity</span></button>
    <button class="rp-map-hit rp-map-hit--d" type="button" data-zone="d" onclick="showPanel('d', true)"><span>AI literacy and design translation</span></button>
  </div>
</figure>

<p class="rp-intro"><span class="lang-en">Click any region of the map to explore the strand in depth.</span><span class="lang-zh" hidden>点击图中的任意区域，深入了解对应方向。</span></p>

<div class="rp-tabs">
  <button id="strand-a" class="rp-tab" data-zone="a" onclick="showPanel('a')"><span class="lang-en">Agency &amp; SDL</span><span class="lang-zh" hidden>能动性与自主学习</span></button>
  <button id="strand-b" class="rp-tab" data-zone="b" onclick="showPanel('b')"><span class="lang-en">Authenticity &amp; Assessment</span><span class="lang-zh" hidden>真实性与评估</span></button>
  <button id="strand-c" class="rp-tab" data-zone="c" onclick="showPanel('c')"><span class="lang-en">Equity &amp; Heterogeneity</span><span class="lang-zh" hidden>公平性与学习者异质性</span></button>
  <button id="strand-d" class="rp-tab" data-zone="d" onclick="showPanel('d')"><span class="lang-en">Literacy &amp; Design</span><span class="lang-zh" hidden>AI素养与学习设计</span></button>
</div>

<div class="sp-wrap" id="strand-panel">
  <div class="sp-head">
    <p class="sp-head__eyebrow" id="sp-eyebrow"></p>
    <p class="sp-head__desc" id="sp-desc"></p>
  </div>
  <div id="sp-content"></div>
</div>

<section class="citation-reach" id="citation-reach" data-citation-map data-reveal>
  <div class="citation-reach__head">
    <div class="citation-reach__eyebrow">Research Reach</div>
    <h2 class="citation-reach__title">Where My Work Travels</h2>
    <div class="citation-reach__copy">A geography view of citations that can be matched through DOI-indexed publications in OpenAlex.</div>
  </div>
  <div class="citation-reach__stats" aria-label="Citation reach summary">
    <div class="citation-stat">
      <span class="citation-stat__num" data-citation-source-count>...</span>
      <span class="citation-stat__label">DOI-indexed source works</span>
    </div>
    <div class="citation-stat">
      <span class="citation-stat__num" data-citation-count>...</span>
      <span class="citation-stat__label">Mapped OpenAlex citing works</span>
    </div>
  </div>
  <div class="citation-reach__grid">
    <div class="citation-map" data-citation-map-canvas>
      <div class="citation-map__empty">Citation geography data will appear here after the OpenAlex update script runs.</div>
    </div>
    <div class="citation-side">
      <div class="citation-list">
        <h3>Top Citing Regions</h3>
        <ol data-citation-countries>
          <li>Waiting for citation data.</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="citation-reach__footer" data-citation-generated>Source: OpenAlex. This map is based on DOI-linked records and does not represent total Google Scholar citations. Country counts use citing authors' institutional country metadata and exclude works without usable country information.</div>
</section>

</div>
</div>

<script type="application/json" id="citation-map-data">{{ site.data.citation_map | jsonify }}</script>

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
    meta_zh: '能动性与自主学习',
    desc: 'I study how learners plan, prompt, verify, and make meaning with AI in self-directed learning environments. This strand brings together conceptual, measurement, and empirical work on how agency is distributed across personal attributes, learning processes, and contexts when AI becomes part of the workflow.',
    desc_zh: '我研究学习者在自主学习情境中如何规划、提示、验证，并借助AI建构意义。这一方向整合概念性、测量性与实证性研究，聚焦AI融入学习流程时能动性如何在个人特质、学习过程与情境之间分布。',
    papers: [
      { title: 'Development and Validation of the PA-SDA Scale', venue: 'System', year: '2025', href: 'https://doi.org/10.1016/j.system.2025.103793', status: 'published' },
      { title: 'Reconceptualizing Self-Directed Learning in the Era of Generative AI', venue: 'IEEE TLT', year: '2024', href: 'https://doi.org/10.1109/TLT.2024.3386098', status: 'published' },
      { title: 'SDL with GenAI: Insights from YouTube Creators', venue: 'TechTrends', year: '2024', href: 'https://doi.org/10.1007/s11528-024-00960-3', status: 'published' },
      { title: 'Multilingual ChatGPT Applications in Language Learning', venue: 'IJCALLT', year: '2023', href: 'https://doi.org/10.4018/IJCALLT.326135', status: 'published' },
      { title: 'Pathways to Proficiency: Mapping Personal Attributes in AI-Integrated SDL', venue: 'Language Learning & Technology', year: '', href: null, status: 'review' },
      { title: 'A Meta-Analysis of AI-Assisted Self-Regulated Learning', venue: 'Online Learning', year: '', href: null, status: 'review' }
    ],
    projects: [
      { title: 'Dissertation: AI in Learning, Humans in Charge', href: '/projects/global-learners-genai/', thumb: '/assets/images/dissertation/progressive-narrowing-2026.png' }
    ]
  },
  b: {
    meta: 'Authenticity & Assessment', title: 'Authenticity, Assessment & Judgment',
    meta_zh: '真实性与评估',
    desc: 'I investigate how AI changes what counts as authentic work, authorship, and good evaluative judgment in educational settings. This strand connects instructor-facing questions about assessment and writing with learner-side questions about ownership, reflection, and responsible AI-supported performance.',
    desc_zh: '我探究AI如何改变教育情境中对"真实作品"、"作者身份"与"良好评估判断"的认定，连接教师侧的评估与写作问题，以及学生侧的所有权与负责任使用AI的问题。',
    papers: [
      { title: "Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy and Performance", venue: 'British Journal of Educational Technology', year: '2025', href: 'https://doi.org/10.1111/bjet.13588', status: 'published' },
      { title: "Nontraditional Learners' Ownership and Agency with AI Writing Tools", venue: 'Journal of Computing in Higher Education', year: '2025', href: 'https://doi.org/10.1007/s12528-025-09476-y', status: 'published' },
      { title: 'Tutor, Not Solver: Designing a Guardrailed AI Assistant for Learning', venue: 'IEEE TLT', year: '', href: null, status: 'review' },
      { title: 'What Makes Student-AI Collaborative Writing Authentic?', venue: 'International Journal for Educational Integrity', year: '', href: null, status: 'review' },
      { title: 'Prompt Literacy as AI-Mediated Feedback Literacy', venue: 'IJETHE', year: '', href: null, status: 'review' },
      { title: 'The Emotional Equation: Affective Factors Shaping AI-Assisted ESL Writing', venue: 'Education and Information Technologies', year: '', href: null, status: 'review' },
      { title: 'Design Precedents to Design Innovation: AI Monitoring System for Writing Assessment', venue: 'Journal of Computing in Higher Education', year: '', href: null, status: 'accepted' },
      { title: 'Infusing Authenticity into a Service-Learning Program', venue: 'Education + Training', year: '2026', href: 'https://doi.org/10.1108/ET-08-2025-0597', status: 'published' }
    ],
    projects: [{ title: 'Authenticity & Assessment in the Age of GenAI', href: '/projects/authenticity-assessment/', thumb: null }]
  },
  c: {
    meta: 'Equity & Heterogeneity', title: 'Learner Heterogeneity & Equity',
    meta_zh: '公平性与学习者异质性',
    desc: 'I examine how AI-mediated learning varies across multilingual, global, and nontraditional learners rather than assuming one uniform experience. These studies trace where language background, prior preparation, and institutional context shape who benefits from AI support, how, and at what cost.',
    desc_zh: '我考察AI辅助学习在多语言、全球化与非传统学习者群体中的差异性，而非预设一种统一的经验。这些研究追踪语言背景、前期准备与机构情境如何影响谁受益、如何受益。',
    papers: [
      { title: "Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy and Performance", venue: 'British Journal of Educational Technology', year: '2025', href: 'https://doi.org/10.1111/bjet.13588', status: 'published' },
      { title: "Nontraditional Learners' Ownership and Agency with AI Writing Tools", venue: 'Journal of Computing in Higher Education', year: '2025', href: 'https://doi.org/10.1007/s12528-025-09476-y', status: 'published' },
      { title: 'Empowering Students from Low-Income Families to Improve Writing with ChatGPT', venue: 'Languages', year: '2023', href: 'https://doi.org/10.3390/languages8040238', status: 'published' },
      { title: 'Culturally and Linguistically Responsive Professional Development for AI Integration', venue: 'Online Learning', year: '2023', href: 'https://doi.org/10.24059/olj.v27i4.4003', status: 'published' },
      { title: 'Understanding AI-Assisted Learning Acceptance among Vocational Students: An AIDUA Model Approach', venue: 'IJIET', year: '2026', href: 'https://doi.org/10.18178/ijiet.2026.16.4.2557', status: 'published' },
      { title: 'Technology Review of Magic School AI', venue: 'Education Sciences', year: '2025', href: 'https://doi.org/10.3390/educsci15080963', status: 'published' }
    ],
    projects: [{ title: 'Dissertation: AI in Learning, Humans in Charge', href: '/projects/global-learners-genai/' }]
  },
  d: {
    meta: 'Literacy & Design', title: 'AI Literacy & Learning Design',
    meta_zh: 'AI素养与学习设计',
    desc: 'I translate research on agency, authenticity, and equity into AI literacy concepts, design principles, and practical learning environments. This strand moves from explanation to action: how should courses, tutoring systems, and institutional supports be designed so AI strengthens reflection and participation rather than passive dependence?',
    desc_zh: '我将关于能动性、真实性与公平性的研究成果转化为AI素养概念、设计原则与可操作的学习环境。这一方向从解释走向行动：课程、辅导系统与机构支持应如何设计，才能让AI强化反思与参与，而非助长被动依赖？',
    papers: [
      { title: 'AI-Generated Content in Education: Literacy for the Age of Generative AI', venue: 'Palgrave Encyclopedia', year: '2026', href: 'https://doi.org/10.1007/978-3-031-51447-0_260-1', status: 'published' },
      { title: 'Two Years of Innovation: Systematic Review of GenAI in Language Learning', venue: 'Computers and Education: AI', year: '2025', href: 'https://doi.org/10.1016/j.caeai.2025.100445', status: 'published' },
      { title: 'Language Educators × Generative AI: A Systematic Review', venue: 'Int. Journal of AI in Education', year: '2026', href: 'https://doi.org/10.1016/j.ijaied.2026.100010', status: 'published' },
      { title: 'The First Year of ChatGPT in Education: A Comprehensive Review', venue: 'Computers and Education: AI', year: '2024', href: 'https://doi.org/10.1016/j.caeai.2024.100266', status: 'published' },
      { title: 'Collaborative Problem Solving with Generative AI', venue: 'Computers & Education: AI', year: '2025', href: 'https://doi.org/10.1016/j.caeai.2025.100393', status: 'published' },
      { title: 'TicApp: A Language Learning Design Case', venue: 'Springer', year: '2024', href: 'https://doi.org/10.1007/978-3-031-76293-2_12', status: 'published' },
      { title: 'Dynamic Learner State Modeling via MCP', venue: 'Education Sciences', year: '2025', href: 'https://doi.org/10.3390/educsci15081004', status: 'published' }
    ],
    projects: [
      { title: 'PeteChat — Guardrailed AI Tutoring Assistant', href: '/projects/petechat/', thumb: '/assets/images/projects-petechat-interface-v2.png' },
      { title: 'TicApp — Mobile Learning App for Diverse Learners', href: '/projects/ticapp/', thumb: '/assets/images/publications/ticapp.gif' }
    ]
  },
  ab: {
    meta: 'SDL × Authenticity', title: 'Agency in Authentic Practice',
    meta_zh: '自主学习 × 真实性',
    desc: 'Work at the intersection of self-directed agency and authentic learning — examining how learners navigate judgment, boundary-setting, and meaningful ownership when AI enters their personal learning workflows.',
    desc_zh: '自主能动性与真实学习的交汇处——探究当AI进入个人学习流程时，学习者如何应对判断、边界设定与有意义的主体性构建。',
    papers: [
      { title: 'Learning in the Loop: Moments, Mindsets, and Meaning with Generative AI', venue: 'Journal of Computer-Assisted Learning', year: '', href: null, status: 'review' },
      { title: 'Choosing the Future of Learning: Assessing Preferences for Educational GPTs', venue: 'International Journal of Human-Computer Interaction', year: '', href: null, status: 'review' },
      { title: 'Prompt Literacy as AI-Mediated Feedback Literacy', venue: 'IJETHE', year: '', href: null, status: 'review' }
    ], projects: []
  },
  ac: {
    meta: 'SDL × Equity', title: 'Agency Across Learner Populations',
    meta_zh: '自主学习 × 公平性',
    desc: 'Work connecting self-directed AI-learning profiles to population-level variation — examining how PA-SDA attributes cluster and evolve across global and multilingual learner groups.',
    desc_zh: '将自主AI学习画像与群体层面的差异相连接——研究PA-SDA特质如何在全球及多语言学习者中聚类与演变。',
    papers: [{ title: 'Pathways to Proficiency: Mapping Personal Attributes in AI-Integrated SDL', venue: 'Language Learning & Technology', year: '', href: null, status: 'review' }],
    projects: [{ title: 'Dissertation: AI in Learning, Humans in Charge', href: '/projects/global-learners-genai/', thumb: '/assets/images/dissertation/wave1-profile-structure-2026.png' }]
  },
  bd: {
    meta: 'Authenticity × Design', title: 'Designing for Authentic Learning',
    meta_zh: '真实性 × 学习设计',
    desc: 'Work translating findings about authentic learning and judgment into concrete system design — how to build AI-powered tools that preserve student ownership and critical thinking.',
    desc_zh: '将真实学习与判断的研究发现转化为具体系统设计——构建能保护学生主体性与批判性思维的AI工具。',
    papers: [
      { title: 'Tutor, Not Solver: Designing a Guardrailed AI Assistant for Learning', venue: 'IEEE TLT', year: '', href: null, status: 'review' },
      { title: 'What Makes Student-AI Collaborative Writing Authentic?', venue: 'International Journal for Educational Integrity', year: '', href: null, status: 'review' },
      { title: 'Design Precedents to Design Innovation: AI Monitoring System for Writing Assessment', venue: 'Journal of Computing in Higher Education', year: '', href: null, status: 'accepted' }
    ], projects: [{ title: 'PeteChat — Guardrailed AI Tutoring Assistant', href: '/projects/petechat/', thumb: '/assets/images/projects-petechat-interface-v2.png' }]
  },
  cd: {
    meta: 'Equity × Design', title: 'Equitable Learning Design',
    meta_zh: '公平性 × 学习设计',
    desc: 'Work connecting learner heterogeneity research to design decisions — how to build AI-supported environments that work equitably across diverse learner populations.',
    desc_zh: '将学习者异质性研究与设计决策相连接，构建在多元学习者群体中实现公平效果的AI辅助学习环境。',
    papers: [
      { title: 'Understanding AI-Assisted Learning Acceptance among Vocational Students: An AIDUA Model Approach', venue: 'IJIET', year: '2026', href: 'https://doi.org/10.18178/ijiet.2026.16.4.2557', status: 'published' },
      { title: 'Technology Review of Magic School AI', venue: 'Education Sciences', year: '2025', href: 'https://doi.org/10.3390/educsci15080963', status: 'published' }
    ],
    projects: []
  }
};

var STATUS_LABELS = {
  published: 'Published', review: 'Under Review', revision: 'In Revision',
  'in-press': 'In Press', accepted: 'Accepted', progress: 'In Progress'
};
var STATUS_LABELS_ZH = {
  published: '已发表', review: '审稿中', revision: '修改中',
  'in-press': '即将出版', accepted: '已接受', progress: '进行中'
};

var currentZone = 'a';

function showPanel(zone, shouldScroll) {
  var data = STRANDS[zone];
  if (!data) return;
  currentZone = zone;
  var col = COLORS[zone] || COLORS.a;
  var isZh = window.blLang && window.blLang.get() === 'zh';
  var sl = isZh ? STATUS_LABELS_ZH : STATUS_LABELS;

  document.querySelectorAll('.rp-map-hit').forEach(function (el) {
    el.classList.toggle('rp-map-hit--active', el.getAttribute('data-zone') === zone);
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
  panel.style.setProperty('--sp-border', col.accent);

  // Update header: eyebrow dot + label, description
  var meta = (isZh && data.meta_zh) ? data.meta_zh : data.meta;
  var desc = (isZh && data.desc_zh) ? data.desc_zh : data.desc;
  document.getElementById('sp-eyebrow').innerHTML =
    meta + ' <span class="sp-head__dot"></span>';
  document.getElementById('sp-desc').textContent = desc;

  // Paper cards grid
  var html = '';
  var papersLabel = isZh ? '论文' : 'Papers';
  var projectsLabel = isZh ? '相关项目' : 'Related Projects';
  var viewLabel = isZh ? '↗ 查看项目' : '↗ View project';
  var readLabel = isZh ? '→ 阅读论文' : '→ Read paper';
  var learnLabel = isZh ? '→ 了解更多' : '→ Learn more';

  if (data.papers && data.papers.length) {
    html += '<p class="sp-section-label">' + papersLabel + '</p><div class="sp-papers">';
    data.papers.forEach(function (p) {
      var badge = p.year || sl[p.status] || '';
      html += '<div class="sp-paper">';
      html += '<div class="sp-paper__top">';
      html += p.href
        ? '<a class="sp-paper__title" href="' + p.href + '" target="_blank" rel="noopener">' + p.title + '</a>'
        : '<span class="sp-paper__title">' + p.title + '</span>';
      if (badge) html += '<span class="sp-paper__badge">' + badge + '</span>';
      html += '</div>';
      if (p.venue) html += '<span class="sp-paper__venue">' + p.venue + '</span>';
      if (!p.year) html += '<span class="sp-paper__status sp-status--' + p.status + '">' + (sl[p.status] || p.status) + '</span>';
      html += '</div>';
    });
    html += '</div>';
  }

  if (data.projects && data.projects.length) {
    html += '<p class="sp-section-label" style="margin-top:14px">' + projectsLabel + '</p><div class="sp-projects">';
    data.projects.forEach(function (p) {
      html += '<a class="sp-project" href="' + p.href + '">';
      if (p.thumb) {
        html += '<div class="sp-project__thumb"><img src="' + p.thumb + '" alt="' + p.title + '" loading="lazy"></div>';
      } else {
        html += '<div class="sp-project__thumb sp-project__thumb--empty"></div>';
      }
      html += '<div class="sp-project__body">';
      html += '<span class="sp-project__title">' + p.title + '</span>';
      html += '<span class="sp-project__arrow">' + viewLabel + '</span>';
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

  if (shouldScroll) {
    setTimeout(function () {
      document.getElementById('strand-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 90);
  }
}

document.addEventListener('bl-lang-change', function () {
  showPanel(currentZone);
});

window.showPanel = showPanel;

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

<script>
(function () {
  var root = document.querySelector('[data-citation-map]');
  if (!root) return;

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function project(lon, lat) {
    return {
      x: ((Number(lon) + 180) / 360) * 920,
      y: ((75 - Number(lat)) / 130) * 290 + 20
    };
  }

  function insideBlob(lon, lat, blob) {
    var dx = (lon - blob.lon) / blob.rx;
    var dy = (lat - blob.lat) / blob.ry;
    return dx * dx + dy * dy <= 1;
  }

  function renderLandDots() {
    var blobs = [
      { lon: -108, lat: 48, rx: 55, ry: 25, tone: 'cool' },
      { lon: -86, lat: 18, rx: 24, ry: 8, tone: 'cool' },
      { lon: -60, lat: -18, rx: 24, ry: 36, tone: 'cool' },
      { lon: 14, lat: 52, rx: 28, ry: 15, tone: 'cool' },
      { lon: 86, lat: 43, rx: 78, ry: 27, tone: 'cool' },
      { lon: 20, lat: 5, rx: 31, ry: 38, tone: 'warm' },
      { lon: 79, lat: 20, rx: 19, ry: 14, tone: 'warm' },
      { lon: 110, lat: 4, rx: 28, ry: 16, tone: 'warm' },
      { lon: 135, lat: -25, rx: 26, ry: 14, tone: 'warm' },
      { lon: -42, lat: 73, rx: 22, ry: 8, tone: 'cool' }
    ];
    var dots = [];
    for (var lon = -170; lon <= 180; lon += 7) {
      for (var lat = -48; lat <= 72; lat += 6) {
        var blob = blobs.find(function (candidate) { return insideBlob(lon, lat, candidate); });
        if (!blob) continue;
        var point = project(lon, lat);
        var cls = blob.tone === 'warm' ? 'citation-land-dot citation-land-dot--warm' : 'citation-land-dot';
        dots.push('<circle class="' + cls + '" cx="' + point.x.toFixed(1) + '" cy="' + point.y.toFixed(1) + '" r="1.8"/>');
      }
    }
    return dots.join('');
  }

  function dotClass(index) {
    if (index % 3 === 1) return 'citation-dot citation-dot--gold';
    if (index % 3 === 2) return 'citation-dot citation-dot--green';
    return 'citation-dot';
  }

  function renderMap(data) {
    var canvas = root.querySelector('[data-citation-map-canvas]');
    var countries = Array.isArray(data.countries) ? data.countries : [];
    if (!countries.length) {
      canvas.innerHTML = '<div class="citation-map__empty">Citation geography data will appear here after the OpenAlex update script runs.</div>';
      return;
    }

    var maxCount = countries.reduce(function (max, country) {
      return Math.max(max, Number(country.count) || 0);
    }, 1);

    var dots = countries.map(function (country, index) {
      var point = project(country.longitude, country.latitude);
      var radius = 4 + Math.sqrt((Number(country.count) || 1) / maxCount) * 12;
      return '<circle class="' + dotClass(index) + '" cx="' + point.x.toFixed(1) + '" cy="' + point.y.toFixed(1) + '" r="' + radius.toFixed(1) + '">' +
        '<title>' + escapeHtml(country.name + ': ' + country.count) + '</title></circle>';
    }).join('');
    var labels = countries.slice(0, 6).map(function (country) {
      var point = project(country.longitude, country.latitude);
      var dx = point.x > 760 ? -72 : 12;
      var anchor = point.x > 760 ? 'end' : 'start';
      return '<text class="citation-country-label" x="' + (point.x + dx).toFixed(1) + '" y="' + (point.y - 10).toFixed(1) + '" text-anchor="' + anchor + '">' +
        escapeHtml(country.code + ' · ' + country.count) + '</text>';
    }).join('');

    canvas.innerHTML =
      '<svg viewBox="0 0 920 330" role="img" aria-label="Citation geography map">' +
      '<rect width="920" height="330" fill="transparent"/>' +
      '<g opacity="0.55" class="citation-graticule"><path d="M0 165 H920"/><path d="M230 0 V330"/><path d="M460 0 V330"/><path d="M690 0 V330"/><path d="M0 78 H920"/><path d="M0 252 H920"/></g>' +
      '<g>' + renderLandDots() + '</g>' +
      '<g>' + dots + labels + '</g></svg>';
  }

  function renderList(selector, items, formatter, emptyText) {
    var el = root.querySelector(selector);
    if (!el) return;
    if (!items || !items.length) {
      el.innerHTML = '<li>' + escapeHtml(emptyText) + '</li>';
      return;
    }
    el.innerHTML = items.map(function (item) {
      return '<li>' + formatter(item) + '</li>';
    }).join('');
  }

  function formatDate(value) {
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function render(data) {
    root.querySelector('[data-citation-source-count]').textContent = data.source_count || 0;
    root.querySelector('[data-citation-count]').textContent = data.citation_count || 0;
    renderMap(data);

    renderList('[data-citation-countries]', (data.countries || []).slice(0, 8), function (country) {
      return '<strong>' + escapeHtml(country.name) + '</strong> · ' + escapeHtml(country.count) + ' citing works';
    }, 'Waiting for citation data.');

    var generated = root.querySelector('[data-citation-generated]');
    if (generated && data.generated_at) {
      generated.textContent = 'Source: OpenAlex. Last updated ' + formatDate(data.generated_at) +
        '. This map is based on DOI-linked records and does not represent total Google Scholar citations. Country counts use citing author institutional country metadata and exclude works without usable country information.';
    }
  }

  function inlineData() {
    var el = document.getElementById('citation-map-data');
    if (!el || !el.textContent.trim()) return null;
    try {
      return JSON.parse(el.textContent);
    } catch (error) {
      return null;
    }
  }

  var embedded = inlineData();
  if (embedded && embedded.countries && embedded.countries.length) {
    render(embedded);
    return;
  }

  fetch('/assets/data/citation-map.json', { cache: 'no-store' })
    .then(function (response) {
      if (!response.ok) throw new Error('Citation data not available');
      return response.json();
    })
    .then(render)
    .catch(function () {
      render({ source_count: 0, citation_count: 0, countries: [], papers: [], selected_citing_works: [] });
    });
})();
</script>
