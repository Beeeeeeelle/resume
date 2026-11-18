---
title: "Research"
layout: single
permalink: /research/
author_profile: true
classes: wide
---

<style>
.rp-statement {
  max-width: 760px;
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
/* ── Strand tabs: quiet text tabs, active strand gets its color dot ── */
.rp-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 28px;
  margin: 8px 0 0;
  padding: 0 0 14px;
  border-bottom: 1px solid #e6ebf1;
}
.rp-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  color: #8a94a0;
  cursor: pointer;
  transition: color 0.15s;
}
.rp-tab::before {
  content: '';
  width: 7px; height: 7px;
  border-radius: 50%;
  border: 1.5px solid currentColor;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: background 0.15s, border-color 0.15s;
}
.rp-tab:hover { color: #172033; }
.rp-tab--active-a, .rp-tab--active-b, .rp-tab--active-c, .rp-tab--active-d { color: #172033; }
.rp-tab--active-a::before { background: #7b9cc8; border-color: #7b9cc8; }
.rp-tab--active-b::before { background: #c8868e; border-color: #c8868e; }
.rp-tab--active-c::before { background: #82b896; border-color: #82b896; }
.rp-tab--active-d::before { background: #d1a760; border-color: #d1a760; }

/* ── Strand panel: open editorial layout, no box ── */
.sp-wrap { padding: 34px 0 0; }
.sp-head { margin-bottom: 30px; }
.sp-head__eyebrow {
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--sp-accent, #4a6e9a);
  display: flex;
  align-items: center;
  gap: 8px;
}
.sp-head__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--sp-dot, #7b9cc8);
  display: inline-block;
  flex-shrink: 0;
}
.sp-head__title {
  margin: 0 0 14px !important;
  font-family: Lora, Georgia, serif;
  font-size: clamp(24px, 2.6vw, 32px) !important;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.005em;
  color: #172033;
}
.sp-head__desc {
  max-width: 68ch;
  margin: 0;
  font-size: 16px;
  line-height: 1.72;
  color: #4f5964;
}

.sp-section-label {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9aa3ad;
}

/* ── Papers: ruled list, year column ── */
.sp-papers {
  list-style: none;
  margin: 0 0 36px !important;
  padding: 0 !important;
}
.sp-paper {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 18px;
  margin: 0 !important;
  padding: 16px 0;
  border-bottom: 1px solid #edf1f5;
}
.sp-paper:last-child { border-bottom: 0; }
.sp-paper__meta {
  padding-top: 2px;
  font-size: 13px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: #9aa3ad;
  line-height: 1.5;
}
.sp-paper__meta--pending { color: var(--sp-accent, #4a6e9a); }
.sp-paper__title {
  display: inline;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #172033 !important;
  text-decoration: none !important;
}
a.sp-paper__title:hover { color: var(--sp-accent, #4a6e9a) !important; }
.sp-paper__arrow {
  margin-left: 4px;
  font-size: 13px;
  color: #9aa3ad;
  transition: color 0.15s;
}
a.sp-paper__title:hover .sp-paper__arrow { color: var(--sp-accent, #4a6e9a); }
.sp-paper__venue {
  display: block;
  margin-top: 3px;
  font-family: Lora, Georgia, serif;
  font-style: italic;
  font-size: 14px;
  line-height: 1.5;
  color: #6f7b87;
}
@media (max-width: 640px) {
  .sp-paper { grid-template-columns: 1fr; gap: 2px; }
}

/* ── Related projects ── */
.sp-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
  margin-top: 12px;
}
.sp-project {
  display: flex;
  align-items: stretch;
  text-decoration: none !important;
  border: 1px solid #e6ebf1;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.sp-project:hover {
  border-color: #d3dce7;
  box-shadow: 0 6px 18px rgba(23, 32, 51, 0.06);
}
.sp-project__thumb {
  width: 112px;
  flex-shrink: 0;
  background: #f1f4f8;
  overflow: hidden;
}
.sp-project__thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.sp-project__thumb--empty { background: var(--sp-badge-bg, #eef3f9); }
.sp-project__body {
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  flex: 1;
}
.sp-project__title {
  font-family: Lora, Georgia, serif;
  font-size: 16px;
  font-weight: 600;
  color: #172033;
  line-height: 1.35;
}
.sp-project__arrow {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--sp-accent, #4a6e9a);
}

#sp-content { transition: opacity 0.18s ease; }
#sp-content.sp-fading { opacity: 0; }

/* ── Citation reach ── */
.citation-reach {
  margin: 72px 0 0;
  padding: 44px 0 0;
  border-top: 1px solid #e6ebf1;
}
.citation-reach__head { max-width: 720px; margin-bottom: 26px; }
.citation-reach__eyebrow {
  margin: 0 0 10px;
  color: #4a6e9a;
  font-size: 11px !important;
  line-height: 1.2 !important;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.page__content .citation-reach .citation-reach__title {
  margin: 0 0 12px;
  padding: 0;
  font-family: Lora, Georgia, serif;
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.005em;
  text-transform: none;
  color: #172033;
  border: 0;
}
.citation-reach__copy {
  margin: 0;
  color: #4f5964;
  font-size: 16px !important;
  line-height: 1.7 !important;
}
.citation-reach__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px 56px;
  margin: 0 0 8px;
}
.citation-stat { display: flex; flex-direction: column; gap: 2px; }
.citation-stat__num {
  font-family: Lora, Georgia, serif;
  font-size: 44px;
  font-weight: 500;
  line-height: 1.05;
  color: #172033;
  font-variant-numeric: lining-nums tabular-nums;
}
.citation-stat__label { font-size: 13px; color: #6f7b87; }

.citation-map { position: relative; margin: 0 -8px; }
.citation-map svg { width: 100%; height: auto; display: block; }
.citation-map__empty { padding: 34px 8px; color: #788391; font-size: 14px; line-height: 1.7; }
.citation-land-dot { fill: #d4dce6; }
.citation-dot {
  fill: #7b9cc8;
  fill-opacity: 0.16;
  stroke: #4a6e9a;
  stroke-opacity: 0.55;
  stroke-width: 1;
  transition: fill-opacity 0.15s;
}
.citation-dot:hover { fill-opacity: 0.32; }
.citation-dot-core { fill: #2f5683; }
.citation-country-label {
  fill: #172033;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  paint-order: stroke;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linejoin: round;
}
.citation-country-count { fill: #6f7b87; font-weight: 500; }

.citation-side { margin-top: 18px; }
.citation-list h3 {
  margin: 0 0 14px !important;
  font-size: 11px !important;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9aa3ad;
}
.citation-side .citation-list ol {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: column;
  column-gap: 48px;
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
}
@media (max-width: 640px) { .citation-side .citation-list ol { grid-template-columns: 1fr; grid-template-rows: none; grid-auto-flow: row; } }
.citation-side .citation-list li {
  margin: 0 !important;
  padding: 10px 0;
  border-bottom: 1px solid #edf1f5;
  display: grid;
  grid-template-columns: 26px 9em minmax(0, 1fr) 2.2em;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #172033;
}
.citation-rank { font-size: 12px; font-weight: 600; color: #9aa3ad; font-variant-numeric: tabular-nums; }
.citation-bar { height: 3px; border-radius: 99px; background: #edf1f5; overflow: hidden; }
.citation-bar span { display: block; height: 100%; background: #7b9cc8; }
.citation-count { text-align: right; font-variant-numeric: tabular-nums; color: #4f5964; font-weight: 600; }
.citation-reach__footer {
  margin: 22px 0 0;
  max-width: 760px;
  color: #8a94a0;
  font-size: 12px !important;
  line-height: 1.6 !important;
}

/* ── HCI/CSCW pass: sans system type, keyword pill, venue badges, figure captions ── */
.hl {
  background: var(--sp-badge-bg, rgba(123,156,200,0.16));
  color: inherit;
  padding: 0.02em 0.32em 0.06em;
  border-radius: 0.32em;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
.citation-reach .hl { background: rgba(123,156,200,0.18); }
.sp-head__title, .page__content .citation-reach .citation-reach__title {
  font-family: inherit !important;
  font-weight: 700 !important;
  letter-spacing: -0.015em !important;
}
.sp-paper { grid-template-columns: 116px minmax(0, 1fr); align-items: start; }
.sp-venue-badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--sp-badge-bg, rgba(123,156,200,0.14));
  color: var(--sp-accent, #4a6e9a);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.35;
  white-space: nowrap;
}
.sp-venue-badge--pending {
  background: #fff;
  color: #6f7b87;
  box-shadow: inset 0 0 0 1px #d8e0ea;
}
.sp-paper__year {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #9aa3ad;
  font-variant-numeric: tabular-nums;
}
.sp-paper__venue {
  font-family: inherit !important;
  font-style: normal !important;
  font-size: 13.5px !important;
}
.sp-paper__line { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; margin-top: 4px; }
.sp-paper__line .sp-paper__venue { display: inline; margin: 0; }
.sp-paper__tags { display: inline-flex; flex-wrap: wrap; gap: 6px; }
.sp-paper { padding: 14px 0 !important; }
.rp-fig-caption { margin-bottom: 30px !important; }
.sp-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px #d8e0ea;
  font-size: 11.5px;
  font-weight: 600;
  color: #4f5964 !important;
  text-decoration: none !important;
  line-height: 1.5;
}
a.sp-tag:hover { box-shadow: inset 0 0 0 1px var(--sp-accent, #4a6e9a); color: var(--sp-accent, #4a6e9a) !important; }
.sp-tag--status { color: #6f7b87 !important; background: #f6f8fb; box-shadow: none; }
@media (max-width: 640px) { .sp-paper { grid-template-columns: 1fr; gap: 6px; } }

/* Projects as teaser figures */
.sp-projects { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 18px; }
.sp-project { flex-direction: column; border-radius: 12px; }
.sp-project__thumb { width: 100%; aspect-ratio: 16 / 9; border-bottom: 1px solid #e6ebf1; }
.sp-project__thumb img { object-position: top center; }
.sp-project__body { padding: 12px 14px 14px; justify-content: flex-start; }
.sp-project__kind {
  font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #9aa3ad;
}
.sp-project__title { font-family: inherit !important; font-size: 15px !important; font-weight: 700 !important; }

/* Figures */
.rp-fig-caption, .citation-fig-caption {
  margin: 10px 0 0;
  max-width: 820px;
  font-size: 13px !important;
  line-height: 1.6 !important;
  color: #6f7b87;
}
.rp-fig-caption b, .citation-fig-caption b { color: #172033; font-weight: 700; }
.citation-stat__num { font-family: inherit !important; font-weight: 700 !important; letter-spacing: -0.02em; font-size: 40px !important; }
.citation-reach__footer { display: none; }

/* Paper rows with teaser figures and author lists */
.sp-paper { grid-template-columns: 148px minmax(0, 1fr) !important; gap: 20px !important; padding: 18px 0 !important; }
.sp-paper__fig {
  width: 148px;
  aspect-ratio: 3 / 2;
  border-radius: 8px;
  overflow: hidden;
  background: #f4f7fa;
  box-shadow: inset 0 0 0 1px #e6ebf1;
}
.sp-paper__fig:not(.sp-paper__fig--empty) { background: #fff; }
.sp-paper__fig img { width: 100%; height: 100%; object-fit: contain; padding: 4px; box-sizing: border-box; display: block; }
.sp-paper__fig--empty {
  background-color: var(--sp-badge-bg, rgba(123,156,200,0.13));
  background-image: radial-gradient(circle, rgba(23,32,51,0.13) 1px, transparent 1.4px);
  background-size: 10px 10px;
  box-shadow: none;
}
.sp-paper__body { min-width: 0; }
.sp-paper__authors {
  display: block;
  margin-top: 3px;
  font-size: 13.5px;
  line-height: 1.5;
  color: #6f7b87;
}
.sp-paper__authors strong { color: #172033; font-weight: 700; }
.sp-paper__line { margin-top: 8px !important; }
.sp-paper__line .sp-paper__venue { font-size: 13px !important; color: #8a94a0; }
@media (max-width: 640px) {
  .sp-paper { grid-template-columns: 96px minmax(0, 1fr) !important; gap: 14px !important; }
  .sp-paper__fig { width: 96px; }
}
@media (min-width: 72em) {
  .page-with-rail-nav__main { padding-right: 9.4rem; }
}
#citation-reach { scroll-margin-top: 8rem; }
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
    <img src="/assets/images/research/human-centered-ai-learning-strands.png?v=20260824" alt="Illustrated map of four human-centered AI learning research strands" data-no-lightbox="true">
    <button class="rp-map-hit rp-map-hit--a" type="button" data-zone="a" onclick="showPanel('a', true)"><span>AI-mediated self-directed learning</span></button>
    <button class="rp-map-hit rp-map-hit--b" type="button" data-zone="b" onclick="showPanel('b', true)"><span>Authenticity and assessment</span></button>
    <button class="rp-map-hit rp-map-hit--c" type="button" data-zone="c" onclick="showPanel('c', true)"><span>Learner heterogeneity and equity</span></button>
    <button class="rp-map-hit rp-map-hit--d" type="button" data-zone="d" onclick="showPanel('d', true)"><span>AI literacy and design translation</span></button>
  </div>
</figure>

<p class="rp-fig-caption"><span class="lang-en"><b>Figure 1.</b> Four research strands in human-centered AI for learning. Click a region to open that strand.</span><span class="lang-zh" hidden><b>图 1.</b> 以人为本的AI学习研究的四个方向。点击图中区域查看对应方向。</span></p>

<div class="rp-tabs">
  <button id="strand-a" class="rp-tab" data-zone="a" onclick="showPanel('a')"><span class="lang-en">Agency &amp; SDL</span><span class="lang-zh" hidden>能动性与自主学习</span></button>
  <button id="strand-b" class="rp-tab" data-zone="b" onclick="showPanel('b')"><span class="lang-en">Authenticity &amp; Assessment</span><span class="lang-zh" hidden>真实性与评估</span></button>
  <button id="strand-c" class="rp-tab" data-zone="c" onclick="showPanel('c')"><span class="lang-en">Equity &amp; Heterogeneity</span><span class="lang-zh" hidden>公平性与学习者异质性</span></button>
  <button id="strand-d" class="rp-tab" data-zone="d" onclick="showPanel('d')"><span class="lang-en">Literacy &amp; Design</span><span class="lang-zh" hidden>AI素养与学习设计</span></button>
</div>

<div class="sp-wrap" id="strand-panel">
  <div class="sp-head">
    <p class="sp-head__eyebrow" id="sp-eyebrow"></p>
    <h3 class="sp-head__title" id="sp-title"></h3>
    <p class="sp-head__desc" id="sp-desc"></p>
  </div>
  <div id="sp-content"></div>
</div>

<section class="citation-reach" id="citation-reach" data-citation-map data-reveal>
  <div class="citation-reach__head">
    <div class="citation-reach__eyebrow">Research reach</div>
    <h2 class="citation-reach__title">Where my work <span class="hl">travels</span></h2>
    <div class="citation-reach__copy">Who builds on this research, located by the institutions of citing authors.</div>
  </div>
  <div class="citation-reach__stats" aria-label="Citation reach summary">
    <div class="citation-stat">
      <span class="citation-stat__num" data-citation-count>...</span>
      <span class="citation-stat__label">citing works mapped in OpenAlex</span>
    </div>
    <div class="citation-stat">
      <span class="citation-stat__num" data-citation-country-count>...</span>
      <span class="citation-stat__label">countries and regions</span>
    </div>
  </div>
  <div class="citation-reach__grid">
    <div class="citation-map" data-citation-map-canvas>
      <div class="citation-map__empty">Citation geography data will appear here after the OpenAlex update script runs.</div>
    </div>
    <p class="citation-fig-caption" data-citation-caption><b>Figure 2.</b> Citing works by the country of citing authors' institutions. Circle area is proportional to the number of citing works.</p>
    <div class="citation-side">
      <div class="citation-list">
        <h3>Top citing regions</h3>
        <ol data-citation-countries>
          <li>Waiting for citation data.</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="citation-reach__footer" data-citation-generated>Source: OpenAlex. This map is based on DOI-linked records and does not represent total Google Scholar citations. Up to 200 citing works are sampled per source publication. Country counts use citing authors' institutional country metadata and exclude works without usable country information.</div>
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
    meta: 'Agency & SDL', title: 'AI-Mediated Self-Directed Learning', hl: 'Self-Directed',
    meta_zh: '能动性与自主学习',
    desc: 'I study how learners plan, prompt, verify, and make meaning with AI in self-directed learning environments. This strand brings together conceptual, measurement, and empirical work on how agency is distributed across personal attributes, learning processes, and contexts when AI becomes part of the workflow.',
    desc_zh: '我研究学习者在自主学习情境中如何规划、提示、验证，并借助AI建构意义。这一方向整合概念性、测量性与实证性研究，聚焦AI融入学习流程时能动性如何在个人特质、学习过程与情境之间分布。',
    papers: [
      { title: 'A Meta-Analysis of AI-Assisted Self-Regulated Learning', venue: 'Online Learning', year: '2026', href: 'https://doi.org/10.24059/olj.v30iSI2.5691', status: 'published' },
      { title: 'Development and Validation of the PA-SDA Scale', venue: 'System', year: '2025', href: 'https://doi.org/10.1016/j.system.2025.103793', status: 'published' },
      { title: 'Reconceptualizing Self-Directed Learning in the Era of Generative AI', venue: 'IEEE TLT', year: '2024', href: 'https://doi.org/10.1109/TLT.2024.3386098', status: 'published' },
      { title: 'SDL with GenAI: Insights from YouTube Creators', venue: 'TechTrends', year: '2024', href: 'https://doi.org/10.1007/s11528-024-00960-3', status: 'published' },
      { title: 'Multilingual ChatGPT Applications in Language Learning', venue: 'IJCALLT', year: '2023', href: 'https://doi.org/10.4018/IJCALLT.326135', status: 'published' },
      { title: 'Pathways to Proficiency: Mapping Personal Attributes in AI-Integrated SDL', venue: 'Language Learning & Technology', year: '', href: null, status: 'review' }
    ],
    projects: [
      { title: 'Dissertation: AI in Learning, Humans in Charge', href: '/projects/global-learners-genai/', thumb: '/assets/images/dissertation/progressive-narrowing-2026.png' }
    ]
  },
  b: {
    meta: 'Authenticity & Assessment', title: 'Authenticity, Assessment & Judgment', hl: 'Authenticity',
    meta_zh: '真实性与评估',
    desc: 'I investigate how AI changes what counts as authentic work, authorship, and good evaluative judgment in educational settings. This strand connects instructor-facing questions about assessment and writing with learner-side questions about ownership, reflection, and responsible AI-supported performance.',
    desc_zh: '我探究AI如何改变教育情境中对"真实作品"、"作者身份"与"良好评估判断"的认定，连接教师侧的评估与写作问题，以及学生侧的所有权与负责任使用AI的问题。',
    papers: [
      { title: "Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy and Performance", venue: 'British Journal of Educational Technology', year: '2025', href: 'https://doi.org/10.1111/bjet.13588', status: 'published' },
      { title: "Non-Traditional Online Learners' Ownership in ChatGPT-Facilitated Design", venue: 'Journal of Computing in Higher Education', year: '2025', href: 'https://doi.org/10.1007/s12528-025-09476-y', status: 'published' },
      { title: 'Tutor, Not Solver: Designing a Guardrailed AI Assistant for Learning', venue: 'IEEE TLT', year: '', href: null, status: 'review' },
      { title: 'What Makes Student-AI Collaborative Writing Authentic?', venue: 'International Journal for Educational Integrity', year: '', href: null, status: 'review' },
      { title: 'Prompt Literacy as AI-Mediated Feedback Literacy', venue: 'International Journal of Educational Technology in Higher Education', year: '', href: null, status: 'review' },
      { title: 'The Emotional Equation: Affective Factors Shaping AI-Assisted ESL Writing', venue: 'Education and Information Technologies', year: '', href: null, status: 'review' },
      { title: 'Design Precedents to Design Innovation: AI Monitoring System for Writing Assessment', venue: 'Journal of Computing in Higher Education', year: '', href: null, status: 'accepted' },
      { title: 'Infusing Authenticity into a Service-Learning Program', venue: 'Education + Training', year: '2026', href: 'https://doi.org/10.1108/ET-08-2025-0597', status: 'published' }
    ],
    projects: [{ title: 'Authenticity & Assessment in the Age of GenAI', href: '/projects/authenticity-assessment/', thumb: null }]
  },
  c: {
    meta: 'Equity & Heterogeneity', title: 'Learner Heterogeneity & Equity', hl: 'Equity',
    meta_zh: '公平性与学习者异质性',
    desc: 'I examine how AI-mediated learning varies across multilingual, global, and nontraditional learners rather than assuming one uniform experience. These studies trace where language background, prior preparation, and institutional context shape who benefits from AI support, how, and at what cost.',
    desc_zh: '我考察AI辅助学习在多语言、全球化与非传统学习者群体中的差异性，而非预设一种统一的经验。这些研究追踪语言背景、前期准备与机构情境如何影响谁受益、如何受益。',
    papers: [
      { title: "Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy and Performance", venue: 'British Journal of Educational Technology', year: '2025', href: 'https://doi.org/10.1111/bjet.13588', status: 'published' },
      { title: "Non-Traditional Online Learners' Ownership in ChatGPT-Facilitated Design", venue: 'Journal of Computing in Higher Education', year: '2025', href: 'https://doi.org/10.1007/s12528-025-09476-y', status: 'published' },
      { title: 'ChatGPT-Supported Chinese Writing for Learners from Low-Income Families', venue: 'Languages', year: '2023', href: 'https://doi.org/10.3390/languages8040238', status: 'published' },
      { title: 'Culturally and Linguistically Responsive Online Teacher Professional Development', venue: 'Online Learning', year: '2023', href: 'https://doi.org/10.24059/olj.v27i4.4003', status: 'published' },
      { title: 'Understanding AI-Assisted Learning Acceptance among Vocational Students: An AIDUA Model Approach', venue: 'IJIET', year: '2026', href: 'https://doi.org/10.18178/ijiet.2026.16.4.2557', status: 'published' },
      { title: 'Technology Review of Magic School AI', venue: 'Education Sciences', year: '2025', href: 'https://doi.org/10.3390/educsci15080963', status: 'published' }
    ],
    projects: [{ title: 'Dissertation: AI in Learning, Humans in Charge', href: '/projects/global-learners-genai/' }]
  },
  d: {
    meta: 'Literacy & Design', title: 'AI Literacy & Learning Design', hl: 'AI Literacy',
    meta_zh: 'AI素养与学习设计',
    desc: 'I translate research on agency, authenticity, and equity into AI literacy concepts, design principles, and practical learning environments. This strand moves from explanation to action: how should courses, tutoring systems, and institutional supports be designed so AI strengthens reflection and participation rather than passive dependence?',
    desc_zh: '我将关于能动性、真实性与公平性的研究成果转化为AI素养概念、设计原则与可操作的学习环境。这一方向从解释走向行动：课程、辅导系统与机构支持应如何设计，才能让AI强化反思与参与，而非助长被动依赖？',
    papers: [
      { title: 'AI-Generation Literacy', venue: 'Palgrave Encyclopedia', year: '2026', href: 'https://doi.org/10.1007/978-3-031-51447-0_260-1', status: 'published' },
      { title: 'Beyond Individual AI Literacy: Family AI Literacy as Cooperative Accomplishment', venue: 'CSCW 2026 Workshop', year: '2026', href: 'https://extendedhorizon.com/cscw2026ws-family-ai/files/accepted-papers/01-beyond-individual-ai-literacy.pdf', status: 'accepted' },
      { title: 'Two Years of Innovation: Systematic Review of GenAI in Language Learning', venue: 'Computers and Education: AI', year: '2025', href: 'https://doi.org/10.1016/j.caeai.2025.100445', status: 'published' },
      { title: 'Language Educators × Generative AI: A Systematic Review', venue: 'Int. Journal of AI in Education', year: '2026', href: 'https://doi.org/10.1016/j.ijaied.2026.100010', status: 'published' },
      { title: 'First-Year Research on ChatGPT and Language Education', venue: 'Computers and Education: AI', year: '2024', href: 'https://doi.org/10.1016/j.caeai.2024.100266', status: 'published' },
      { title: 'Collaborative Problem Solving in Conversational AI-Mediated Learning', venue: 'Computers & Education: AI', year: '2025', href: 'https://doi.org/10.1016/j.caeai.2025.100393', status: 'published' },
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
      { title: 'Prompt Literacy as AI-Mediated Feedback Literacy', venue: 'International Journal of Educational Technology in Higher Education', year: '', href: null, status: 'review' }
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
      { title: 'Tutor, Not Solver: Designing a Guardrailed AI Assistant for Learning', venue: 'IEEE Transactions on Learning Technologies', year: '', href: null, status: 'review' },
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
      { title: 'Understanding AI-Assisted Learning Acceptance among Vocational Students: An AIDUA Model Approach', venue: 'International Journal of Information and Education Technology', year: '2026', href: 'https://doi.org/10.18178/ijiet.2026.16.4.2557', status: 'published' },
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

function escapeText(v) {
  return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var PUB_META = {
"https://doi.org/10.1016/j.system.2025.103793": {
"authors": "<strong>Li, B.</strong>, Zhang, Z., Lowell, V., Wang, C., &amp; Bonk, C. J.",
"thumb": "/assets/images/publications/PA-SDA Scale.png"
},
"https://doi.org/10.1109/TLT.2024.3386098": {
"authors": "<strong>Li, B.</strong>, Bonk, C. J., Wang, C., &amp; Kou, X.",
"thumb": "/assets/images/publications/IEEE TLT 2024.png"
},
"https://doi.org/10.1007/s11528-024-00960-3": {
"authors": "<strong>Li, B.</strong>, Wang, C., Bonk, C. J., &amp; Kou, X.",
"thumb": "/assets/images/publications/techtrends-2024-youtube-sdl.jpg"
},
"https://doi.org/10.4018/IJCALLT.326135": {
"authors": "<strong>Li, B.</strong>, Bonk, C. J., &amp; Kou, X.",
"thumb": "/assets/images/publications/ijcallt-2023-multilingual-chatgpt.png"
},
"t:pathways to proficiency mapping personal attributes in ai integrated sdl": {
"authors": "<strong>Li, B.</strong>, Zhang, Z., &amp; Lowell, V.",
"thumb": "/assets/images/publications/review-pathways-sem-model.jpg"
},
"https://doi.org/10.1111/bjet.13588": {
"authors": "Yang, M., Jiang, S., <strong>Li, B.</strong>, Herman, K., Luo, T., Moots, S. C., &amp; Lovett, N.",
"thumb": "/assets/images/publications/BJET 2025_1.png"
},
"https://doi.org/10.1007/s12528-025-09476-y": {
"authors": "Yang, M., Luo, T., Herman, K., <strong>Li, B.</strong>, Jiang, S., &amp; Kim, J.",
"thumb": "/assets/images/publications/Non-tradition_JCHE.png"
},
"t:tutor not solver designing a guardrailed ai assistant for learning": {
"authors": "<strong>Li, B.</strong>, Tan, L., Zakharov, W., Qiu, Q., &amp; Acton, C. B.",
"thumb": "/assets/images/projects-petechat-interface-v2.png"
},
"t:what makes student ai collaborative writing authentic": {
"authors": "<strong>Li, B.</strong>, Wang, J., &amp; Wang, C.",
"thumb": "/assets/images/publications/review-authenticity-qsort-interface.jpg"
},
"t:prompt literacy as ai mediated feedback literacy": {
"authors": "<strong>Li, B.</strong>, Phan, T., Tang, G., &amp; Bonk, C. J."
},
"t:the emotional equation affective factors shaping ai assisted esl writing": {
"authors": "Li, X., Zhang, Y., &amp; <strong>Li, B.</strong>"
},
"t:design precedents to design innovation ai monitoring system for writing assessment": {
"authors": "<strong>Li, B.</strong>, Lowell, V., &amp; Hou, Z."
},
"https://doi.org/10.1108/ET-08-2025-0597": {
"authors": "Yang, M., Harbor, J., <strong>Li, B.</strong>, &amp; Nikiema, J.",
"thumb": "/assets/images/publications/et-2026-service-learning-journey.jpg"
},
"https://doi.org/10.3390/languages8040238": {
"authors": "Li, X., <strong>Li, B.</strong>, &amp; Cho, S.",
"thumb": "/assets/images/publications/languages-2023-low-income-writing.png"
},
"https://doi.org/10.24059/olj.v27i4.4003": {
"authors": "Pawan, F., <strong>Li, B.</strong>, Nijiati, S., Dopwell, B. M., Harris, A., &amp; Iruoje, T.",
"thumb": "/assets/images/publications/olj-2023-online-media.jpg"
},
"https://doi.org/10.18178/ijiet.2026.16.4.2557": {
"authors": "Ye, J.-H., Yang, X., <strong>Li, B.</strong>, Nong, W., Hong, J.-C., &amp; Wang, L.",
"thumb": "/assets/images/publications/ijiet-2026-aidua-model.jpg"
},
"https://doi.org/10.3390/educsci15080963": {
"authors": "Li, X., <strong>Li, B.</strong>, Li, J., &amp; Cho, S.-J.",
"thumb": "/assets/images/publications/educsci-2025-magic-school.jpg"
},
"https://doi.org/10.1007/978-3-031-51447-0_260-1": {
"authors": "<strong>Li, B.</strong>, &amp; Lowell, V.",
"thumb": "/assets/images/publications/AI-generation Literacy.png"
},
"https://extendedhorizon.com/cscw2026ws-family-ai/files/accepted-papers/01-beyond-individual-ai-literacy.pdf": {
"authors": "<strong>Li, B.</strong>, &amp; Yang, M."
},
"https://doi.org/10.1016/j.caeai.2025.100445": {
"authors": "<strong>Li, B.</strong>, Tan, L. Y., Wang, C., &amp; Lowell, V.",
"thumb": "/assets/images/publications/CAEAI 2025_1.png"
},
"https://doi.org/10.1016/j.ijaied.2026.100010": {
"authors": "<strong>Li, B.</strong>, Exter, M., Feng, W., Tang, G., &amp; Xu, K.",
"thumb": "/assets/images/publications/ijaied-2026-language-educators-prisma.jpg"
},
"https://doi.org/10.1016/j.caeai.2024.100266": {
"authors": "<strong>Li, B.</strong>, Lowell, V., Watson, C., &amp; Wang, C.",
"thumb": "/assets/images/publications/caeai-2024-chatgpt-first-year.jpg"
},
"https://doi.org/10.1016/j.caeai.2025.100393": {
"authors": "Aslan, S., Alyuz, N., <strong>Li, B.</strong>, Durham, L. M., Shi, M., Sharma, S., &amp; Nachman, L.",
"thumb": "/assets/images/publications/cps-intel_1.jpg"
},
"https://doi.org/10.1007/978-3-031-76293-2_12": {
"authors": "<strong>Li, B.</strong>, &amp; Lowell, V. L.",
"thumb": "/assets/images/publications/ticapp.gif"
},
"https://doi.org/10.3390/educsci15081004": {
"authors": "Yang, M., Lovett, N., <strong>Li, B.</strong>, &amp; Hou, Z.",
"thumb": "/assets/images/publications/educsci-2025-learner-state-portal.jpg"
},
"t:learning in the loop moments mindsets and meaning with generative ai": {
"authors": "<strong>Li, B.</strong>",
"thumb": "/assets/images/publications/review-learning-in-the-loop-framework.jpg"
},
"t:choosing the future of learning assessing preferences for educational gpts": {
"authors": "Mao, Y., &amp; <strong>Li, B.</strong>"
},
"https://doi.org/10.24059/olj.v30iSI2.5691": {
"authors": "Zhang, Z., <strong>Li, B.</strong>, Xu, Q., Cheng, Z., &amp; West, R. E.",
"thumb": "/assets/images/publications/olj-2026-srl-meta-funnel.jpg"
}
};

function pubMeta(p) {
  return PUB_META[p.href || ('t:' + String(p.title).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim())] || {};
}

var VENUE_SHORT = {
  'System (Elsevier)': 'System',
  'IEEE Transactions on Learning Technologies': 'IEEE TLT',
  'TechTrends': 'TechTrends',
  'International Journal of Computer-Assisted Language Learning and Teaching': 'IJCALLT',
  'Language Learning & Technology': 'LLT',
  'Online Learning': 'OLJ',
  'British Journal of Educational Technology': 'BJET',
  'Journal of Computing in Higher Education': 'JCHE',
  'International Journal for Educational Integrity': 'IJEI',
  'International Journal of Educational Technology in Higher Education': 'IJETHE',
  'Education and Information Technologies': 'EAIT',
  'Education + Training': 'E+T',
  'Languages': 'Languages',
  'International Journal of Information and Education Technology': 'IJIET',
  'Education Sciences': 'Educ. Sci.',
  'Palgrave Encyclopedia': 'Palgrave',
  'CSCW 2026 Workshop': 'CSCW WS',
  'Computers and Education: Artificial Intelligence': 'CAEAI',
  'International Journal of AI in Education': 'IJAIEd',
  'Springer': 'Springer',
  'Journal of Computer-Assisted Learning': 'JCAL',
  'International Journal of Human-Computer Interaction': 'IJHCI'
};

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
  panel.style.setProperty('--sp-dot', col.bg.replace(/0\.13\)$/, '1)'));

  // Update header: eyebrow dot + label, description
  var meta = (isZh && data.meta_zh) ? data.meta_zh : data.meta;
  var desc = (isZh && data.desc_zh) ? data.desc_zh : data.desc;
  document.getElementById('sp-eyebrow').innerHTML =
    '<span class="sp-head__dot"></span>' + (isZh ? '研究方向' : meta);
  var titleText = isZh ? meta : (data.title || meta);
  var titleHtml = escapeText(titleText);
  if (!isZh && data.hl) titleHtml = titleHtml.replace(escapeText(data.hl), '<span class="hl">' + escapeText(data.hl) + '</span>');
  document.getElementById('sp-title').innerHTML = titleHtml;
  document.getElementById('sp-desc').textContent = desc;

  // Paper cards grid
  var html = '';
  var papersLabel = isZh ? '论文' : 'Selected papers';
  var projectsLabel = isZh ? '相关项目' : 'Related projects';
  var viewLabel = isZh ? '查看项目 →' : 'View project →';
  var readLabel = isZh ? '→ 阅读论文' : '→ Read paper';
  var learnLabel = isZh ? '→ 了解更多' : '→ Learn more';

  if (data.papers && data.papers.length) {
    html += '<p class="sp-section-label">' + papersLabel + '</p><ul class="sp-papers">';
    var papers = data.papers.slice().sort(function (x, y) {
      return (Number(y.year) || 0) - (Number(x.year) || 0);
    });
    papers.forEach(function (p) {
      var shortV = VENUE_SHORT[p.venue] || p.venue || '';
      var pending = p.status && p.status !== 'published';
      var pm = pubMeta(p);
      html += '<li class="sp-paper">';
      html += pm.thumb
        ? '<div class="sp-paper__fig"><img src="' + encodeURI(pm.thumb) + '" alt="" loading="lazy"></div>'
        : '<div class="sp-paper__fig sp-paper__fig--empty" aria-hidden="true"></div>';
      html += '<div class="sp-paper__body">';
      html += p.href
        ? '<a class="sp-paper__title" href="' + p.href + '" target="_blank" rel="noopener">' + p.title + '</a>'
        : '<span class="sp-paper__title">' + p.title + '</span>';
      if (pm.authors) html += '<span class="sp-paper__authors">' + pm.authors + '</span>';
      html += '<div class="sp-paper__line">';
      html += '<span class="sp-venue-badge' + (pending ? ' sp-venue-badge--pending' : '') + '">' + escapeText(shortV) + (p.year ? ' ' + p.year : '') + '</span>';
      if (p.venue && shortV !== p.venue) html += '<span class="sp-paper__venue">' + p.venue + '</span>';
      if (p.href) html += '<a class="sp-tag" href="' + p.href + '" target="_blank" rel="noopener">' + (p.href.indexOf('https://doi.org/') === 0 ? 'DOI ↗' : 'Paper ↗') + '</a>';
      if (pending) html += '<span class="sp-tag sp-tag--status">' + (sl[p.status] || p.status) + '</span>';
      html += '</div></div></li>';
    });
    html += '</ul>';
  }

  if (data.projects && data.projects.length) {
    html += '<p class="sp-section-label">' + projectsLabel + '</p><div class="sp-projects">';
    data.projects.forEach(function (p) {
      html += '<a class="sp-project" href="' + p.href + '">';
      if (p.thumb) {
        html += '<div class="sp-project__thumb"><img src="' + p.thumb + '" alt="' + p.title + '" loading="lazy"></div>';
      } else {
        html += '<div class="sp-project__thumb sp-project__thumb--empty"></div>';
      }
      html += '<div class="sp-project__body">';
      html += '<span class="sp-project__kind">' + (/^Dissertation/.test(p.title) ? (isZh ? '博士论文' : 'Dissertation') : (isZh ? '设计项目' : 'Design project')) + '</span>';
      html += '<span class="sp-project__title">' + p.title.replace(/^Dissertation:\s*/, '').replace(/\s+—\s+/, ': ') + '</span>';
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

  // Land mask: 2.4-degree grid sampled from Natural Earth 50m land (world-atlas).
  var LAND = {"step":2.4,"lat0":72,"lon0":-169.2,"cols":146,"rows":["00001fe63f00fff80000000c08fffff878000","1ff84bf399c0bff80000f000dbffffffffd78","1ffffffff8787f800007ff5ffbffffffffffc","3ffffffffbf07c07800f7effffffffffffff4","3fffffff08203800003cffffffffffffffefc","5ecfffff01c00800007e0ffffffffffffe200","0500ffff01f80000040c7fffffffffff80e00","1001fffff1fc00000410ffffffffffff00c00","00003ffffbff0000177fffffffffffffe0800","00003ffffffc000004ffffffffffffffe0000","00001fffffe3800007ffffffffffffff80000","00001ffffffc000001f7e5e7ffffffff00000","00001fffffc000001f5be0effffffffe70000","00001fffff8000001e259ff3ffffffb840000","00000fffff0000001e00bfe7ffffff1840000","00000ffffe00000001e003ffffffff88c0000","000003fffc0000000fe003ffffffff8700000","000000fff80000001ffdd7ffffffffc400000","000001fe000000003ffffbefffffffc000000","000000fc040000007ffffbf1ffffff8000000","0000003c00000000fffffdfe1fffff4000000","0000001c0a000000fffffdff0fe7fc0000000","0000001e60400000fffffefe07c3e80000000","00000007c0000000fffffe780382f04000000","0000000070000000ffffff600300f04000000","0000000010000000ffffff800300b00000000","0000000009f800007ffffff00180000000000","0000000001fe00003ffffff00080801000000","0000000001ff8000105fffe00001410000000","0000000003ffc000001fffc00000c70800000","0000000003ffc000001fff800000470000000","0000000007fff000001fff000000675080000","0000000007fffe00000ffe0000002000f0000","0000000003ffff00000ffe0000001c0070800","0000000003ffff000007ff000000000008000","0000000001fffe000007ff000000000220000","0000000001fffe00000fff100000000720000","00000000007ffe00000ffe700000001fb0004","00000000003ffc00000ffc600000003ff0000","00000000003ffc000007fc60000001fff8000","00000000003ff0000007fc60000003fffc000","00000000003fe0000007f800000003fffe000","00000000007fe0000003f000000001fffe000","00000000007f80000003f000000001fffe000","00000000007f80000001c000000001e1fc000","00000000007e000000000000000000007c010","0000000000fe0000000000000000000020008","0000000000f80000000000000000000010000","0000000000700000000000000000000000020","0000000000e00000000000000000000000040","0000000000f00000000000000000000000000","0000000000c00000000000000000000000000","0000000000800000000000000000000000000","0000000000200000000000000000000000000"]};

  function renderLandDots() {
    var dots = [];
    LAND.rows.forEach(function (hex, r) {
      var lat = LAND.lat0 - r * LAND.step;
      for (var c = 0; c < LAND.cols; c++) {
        var nibble = parseInt(hex.charAt(c >> 2), 16);
        if (!(nibble & (8 >> (c & 3)))) continue;
        var point = project(LAND.lon0 + c * LAND.step, lat);
        dots.push('<circle class="citation-land-dot" cx="' + point.x.toFixed(1) + '" cy="' + point.y.toFixed(1) + '" r="1.45"/>');
      }
    });
    return dots.join('');
  }

  function dotClass() {
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

    var dots = countries.slice().reverse().map(function (country) {
      var point = project(country.longitude, country.latitude);
      var radius = 3 + Math.sqrt((Number(country.count) || 1) / maxCount) * 19;
      return '<g><circle class="citation-dot" cx="' + point.x.toFixed(1) + '" cy="' + point.y.toFixed(1) + '" r="' + radius.toFixed(1) + '">' +
        '<title>' + escapeHtml(country.name + ': ' + country.count) + '</title></circle>' +
        '<circle class="citation-dot-core" cx="' + point.x.toFixed(1) + '" cy="' + point.y.toFixed(1) + '" r="1.8"/></g>';
    }).join('');
    var labels = countries.slice(0, 6).map(function (country) {
      var point = project(country.longitude, country.latitude);
      var radius = 3 + Math.sqrt((Number(country.count) || 1) / maxCount) * 19;
      var right = point.x > 800;
      var x = right ? point.x - radius - 6 : point.x + radius + 6;
      return '<text class="citation-country-label" x="' + x.toFixed(1) + '" y="' + (point.y + 4).toFixed(1) + '" text-anchor="' + (right ? 'end' : 'start') + '">' +
        escapeHtml(country.code) + ' <tspan class="citation-country-count">' + escapeHtml(country.count) + '</tspan></text>';
    }).join('');

    canvas.innerHTML =
      '<svg viewBox="0 0 920 330" role="img" aria-label="Citation geography map">' +
      '<rect width="920" height="330" fill="transparent"/>' +
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
    root.querySelector('[data-citation-count]').textContent = data.citation_count || 0;
    renderMap(data);

    var topCountries = (data.countries || []).slice(0, 8);
    var topMax = topCountries.reduce(function (m, c) { return Math.max(m, Number(c.count) || 0); }, 1);
    var countryCountEl = root.querySelector('[data-citation-country-count]');
    if (countryCountEl) countryCountEl.textContent = (data.countries || []).length;
    var rank = 0;
    renderList('[data-citation-countries]', topCountries, function (country) {
      rank += 1;
      var pct = Math.max(4, Math.round((Number(country.count) || 0) / topMax * 100));
      return '<span class="citation-rank">' + (rank < 10 ? '0' : '') + rank + '</span>' +
        '<span>' + escapeHtml(country.name) + '</span>' +
        '<span class="citation-bar" aria-hidden="true"><span style="width:' + pct + '%"></span></span>' +
        '<span class="citation-count">' + escapeHtml(country.count) + '</span>';
    }, 'Waiting for citation data.');

    var caption = root.querySelector('[data-citation-caption]');
    if (caption && data.generated_at) {
      caption.innerHTML = '<b>Figure 2.</b> Citing works by the country of citing authors\' institutions. Circle area is proportional to the number of citing works. Source: OpenAlex DOI-linked records as of ' +
        escapeHtml(formatDate(data.generated_at)) + '; not equivalent to Google Scholar counts, and works without usable country metadata are excluded.';
    }
    var generated = root.querySelector('[data-citation-generated]');
    if (generated && data.generated_at) {
      var sampleLimit = Number(data.max_citing_per_source);
      var sampleNote = sampleLimit > 0 ? ' Up to ' + sampleLimit + ' citing works are sampled per source publication.' : '';
      generated.textContent = 'Source: OpenAlex. Last updated ' + formatDate(data.generated_at) +
        '. This map is based on DOI-linked records and does not represent total Google Scholar citations.' + sampleNote + ' Country counts use citing author institutional country metadata and exclude works without usable country information.';
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
