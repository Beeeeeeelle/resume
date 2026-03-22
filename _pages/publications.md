---
permalink: /publications/
title: "Publications"
---

<style>
/* ── Section headings ── */
.pub-section {
  margin-bottom: 48px;
}
.pub-section h2 {
  font-size: 18px;
  font-weight: 700;
  color: #111;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin-bottom: 10px;
}
.pub-first-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 24px;
  padding: 6px 12px;
  border-radius: 999px;
  background: #fff7f2;
  border: 1px solid rgba(224, 90, 43, 0.16);
  font-size: 12px;
  font-weight: 600;
  color: #8a5c44;
}
.pub-first-note span {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, rgba(224,90,43,0.95), rgba(236,153,116,0.9));
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(224,90,43,0.08);
  flex-shrink: 0;
}
.pub-year {
  font-size: 13px;
  font-weight: 700;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 28px 0 14px;
}

/* ── Featured card (with thumbnail) ── */
.bl-pcard {
  display: flex !important;
  gap: 20px;
  margin-bottom: 28px;
  align-items: flex-start;
}
.bl-pcard--lead {
  padding: 14px;
  border-radius: 18px;
  background: linear-gradient(180deg, #fffaf7 0%, #ffffff 100%);
  border: 1px solid rgba(224, 90, 43, 0.10);
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.025);
}
@media (max-width: 600px) {
  .bl-pcard { flex-direction: column; }
  .bl-pcard__thumb { width: 100% !important; max-height: 200px; object-fit: cover; }
}
.bl-pcard__thumb {
  flex: 0 0 180px;
  width: 180px;
  max-width: 180px;
  border-radius: 5px;
  object-fit: contain;
  border: 1px solid #e8e8e8;
  display: block;
  background: #fafafa;
}
.bl-pcard__thumb--gif {
  flex: 0 0 180px;
  width: 180px;
  max-width: 180px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: #fafafa;
}
.bl-pcard--lead .bl-pcard__thumb,
.bl-pcard--lead .bl-pcard__thumb--gif,
.bl-pcard--lead .bl-pcard__slide img {
  border-color: rgba(224, 90, 43, 0.18);
}
.bl-pcard__body { flex: 1; min-width: 0; }
.bl-pcard--lead .bl-pcard__body::before,
.pub-entry__dot + .pub-entry__body::before {
  content: "First / corr.";
  display: inline-flex;
  align-items: center;
  margin: 0 0 10px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #fff7f2;
  border: 1px solid rgba(224,90,43,0.16);
  color: #a35734;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1;
}
/* div (not p) — avoids Minimal Mistakes .page__content p overrides */
.bl-pcard__title {
  font-size: 14.5px;
  font-weight: 700;
  color: #111;
  margin: 0 0 6px;
  line-height: 1.45;
}
.bl-pcard__authors {
  font-size: 13px;
  font-weight: 400;
  color: #444;
  margin: 0 0 3px;
  line-height: 1.5;
}
.bl-pcard__venue {
  font-size: 12px;
  font-weight: 400;
  color: #888;
  font-style: italic;
  margin: 0 0 10px;
  line-height: 1.4;
}
.bl-pcard__me {
  font-weight: 700;
  color: #111;
}

/* ── Plain list entry (no thumbnail) ── */
.pub-entry {
  display: flex;
  gap: 0;
  margin-bottom: 16px;
  align-items: flex-start;
}
/* Dot element is now invisible — just used as CSS hook for sibling selector */
.pub-entry__dot {
  width: 0;
  flex-shrink: 0;
}
.pub-entry__dot--empty {
  width: 0;
  flex-shrink: 0;
}
/* First / corresponding author entries now use a badge */
.pub-entry__dot + .pub-entry__body {
  padding: 12px 14px 10px;
  border-radius: 16px;
  background: linear-gradient(180deg, #fffaf7 0%, #ffffff 100%);
  border: 1px solid rgba(224, 90, 43, 0.10);
}
/* Co-authored */
.pub-entry__dot--empty + .pub-entry__body {
  padding-left: 0;
}
.pub-entry__body {
  font-size: 14px;
  line-height: 1.7;
  color: #333;
}
.pub-entry__body strong {
  color: #111;
}
.pub-focus-item {
  transition: opacity 0.22s ease, filter 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
}
.pub-section.is-spotlight .pub-focus-item {
  opacity: 0.44;
  filter: saturate(0.78);
}
.pub-section.is-spotlight .pub-focus-item.is-active {
  opacity: 1;
  filter: none;
  transform: none;
}
.pub-focus-item.is-active .bl-pcard__title,
.pub-focus-item.is-active .pub-entry__body {
  color: #1a2233;
}
.pub-focus-item.is-active .pub-tag {
  box-shadow: 0 6px 16px rgba(42, 122, 226, 0.12);
}

/* ── Resource buttons ── */
.pub-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 8px;
}
.pub-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  text-decoration: none;
  letter-spacing: 0.02em;
}
.pub-tag--doi   { background: #e8eef8; color: #2a52a0; }
.pub-tag--pdf   { background: #fce8e8; color: #b02020; }
.pub-tag--web   { background: #e8f6e8; color: #1e7a1e; }
.pub-tag--preprint { background: #f5f0e8; color: #7a5a00; }
.pub-tag--award { background: #fff4d9; color: #8a6700; }
.pub-tag:hover  { opacity: 0.8; }

.pub-recognition {
  margin-top: 12px;
  padding: 12px 13px;
  border-radius: 16px;
  border: 1px solid rgba(195, 160, 56, 0.22);
  background: linear-gradient(180deg, #fffdf7 0%, #fffaf0 100%);
  display: grid;
  gap: 10px;
}

.pub-recognition--with-image {
  align-items: start;
}

@media (min-width: 40em) {
  .pub-recognition--with-image {
    grid-template-columns: minmax(0, 1fr) 112px;
  }
}

.pub-recognition__label {
  display: inline-flex;
  width: max-content;
  align-items: center;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(195, 160, 56, 0.12);
  color: #896400;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1;
}

.pub-recognition__title {
  margin: 6px 0 4px;
  font-size: 13px;
  font-weight: 700;
  color: #2a2a2a;
  line-height: 1.45;
}

.pub-recognition__body {
  margin: 0;
  font-size: 12.5px;
  line-height: 1.6;
  color: #5a6473;
}

.pub-recognition__media {
  display: grid;
  gap: 0.55rem;
  align-content: start;
}

.pub-recognition__image {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(195, 160, 56, 0.18);
  background: #fff;
  display: block;
  cursor: zoom-in;
}

/* ── Under review ── */
.pub-status {
  font-size: 11.5px;
  font-style: italic;
  color: #999;
  margin-left: 6px;
}

/* ── Multi-image slideshow ── */
.bl-pcard__slides {
  flex: 0 0 180px;
  width: 180px;
  max-width: 180px;
  position: relative;
}
.bl-pcard__slide { display: none; }
.bl-pcard__slide.active { display: block; }
.bl-pcard__slide img {
  width: 180px;
  border-radius: 5px;
  object-fit: contain;
  border: 1px solid #e8e8e8;
  display: block;
  background: #fafafa;
  cursor: zoom-in;
  max-height: 220px;
}
.bl-pcard__thumb { cursor: zoom-in; }
.bl-pslide-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 6px;
}
.bl-pslide-btn {
  background: none;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 20px; height: 20px;
  cursor: pointer;
  font-size: 13px;
  color: #666;
  display: flex; align-items: center; justify-content: center;
  padding: 0; flex-shrink: 0; line-height: 1;
}
.bl-pslide-btn:hover { background: #f0f0f0; border-color: #aaa; }
.bl-pslide-dots { display: flex; gap: 4px; align-items: center; }
.bl-pslide-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: background 0.2s;
}
.bl-pslide-dot.active { background: #2a52a0; }

/* ── Lightbox ── */
.bl-lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.88);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.bl-lightbox.open { display: flex; }
.bl-lightbox img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
}
.bl-lightbox__close {
  position: absolute;
  top: 16px; right: 22px;
  color: #fff; font-size: 30px;
  cursor: pointer; line-height: 1; opacity: 0.7;
}
.bl-lightbox__close:hover { opacity: 1; }
</style>

<!-- ── TIMELINE ── -->
<style>
.pub-timeline {
  margin-bottom: 40px;
}
.pub-timeline h3 {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #aaa;
  margin: 0 0 16px;
}
.ptl-intro {
  max-width: 42rem;
  margin: 0 0 1.15rem;
  font-size: 15px;
  line-height: 1.65;
  color: #6b7280;
}
.ptl-cards {
  display: grid;
  gap: 1rem;
}
@media (min-width: 56em) {
  .ptl-cards {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media (min-width: 40em) and (max-width: 55.99em) {
  .ptl-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.ptl-card {
  padding: 1rem 1rem 1.05rem;
  border-radius: 1.1rem;
  border: 1px solid rgba(226, 232, 240, 0.92);
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.76) 0%, rgba(255, 255, 255, 0.98) 100%);
  box-shadow: 0 1rem 2.8rem rgba(15, 23, 42, 0.06);
  display: grid;
  gap: 0.9rem;
}
.ptl-card__year {
  margin: 0;
  font-size: 28px;
  line-height: 1;
  font-weight: 700;
  color: #4b5563;
  letter-spacing: -0.02em;
}
.ptl-card__rows {
  display: grid;
  gap: 0.75rem;
}
.ptl-row {
  display: grid;
  gap: 0.45rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(226, 232, 240, 0.9);
}
.ptl-row:first-child {
  padding-top: 0;
  border-top: 0;
}
.ptl-row__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7a8898;
}
.ptl-row__label--first {
  color: #9a5d3d;
}
.ptl-row__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.42rem;
  min-height: 1.9rem;
}
.ptl-row__empty {
  font-size: 13px;
  color: #a0aec0;
}

/* Publication squares */
.ptl-pub {
  min-width: 30px;
  height: 30px;
  padding: 0 8px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  color: #fff;
  cursor: default;
  position: relative;
  text-decoration: none;
  letter-spacing: 0.01em;
  line-height: 1;
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.16);
  transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
}
.ptl-pub:hover { transform: translateY(-1px); z-index: 10; box-shadow: 0 8px 18px rgba(15, 23, 42, 0.14); }

/* Venue colours */
.v-tlt     { background: #2a52a0; }
.v-caeai   { background: #7a52a0; }
.v-system  { background: #2a7aa0; }
.v-bjet    { background: #2a7a4a; }
.v-illt    { background: #c05020; }
.v-tech    { background: #a05020; }
.v-olj     { background: #20607a; }
.v-lang    { background: #5a7a20; }
.v-ijcallt { background: #7a7a20; }
.v-springer{ background: #5a2080; }
.v-jaid    { background: #808080; }
.v-edusci  { background: #607060; }
.v-jche    { background: #905050; }
.v-book    { background: #4a3a20; }
.v-ijaied  { background: #3a7a60; }

/* Legend */
.ptl-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  margin-top: 14px;
}
.ptl-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #667085;
}
.ptl-legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  flex-shrink: 0;
}

/* Tooltip */
.ptl-pub::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  padding: 5px 9px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 100;
  max-width: 260px;
  white-space: normal;
  text-align: center;
  font-family: sans-serif;
  letter-spacing: 0;
}
.ptl-pub:hover::after { opacity: 1; }
</style>

<div class="page-with-rail-nav">
<nav class="page-section-nav" data-page-nav aria-label="Publications page sections">
  <div class="page-section-nav__list">
    <a class="page-section-nav__link" href="#pub-overview">Timeline</a>
    <a class="page-section-nav__link" href="#pub-journals">Journal Articles</a>
    <a class="page-section-nav__link" href="#pub-proceedings">Proceedings</a>
    <a class="page-section-nav__link" href="#pub-chapters">Book Chapters</a>
    <a class="page-section-nav__link" href="#pub-book">Book</a>
    <a class="page-section-nav__link" href="#pub-under-review">Under Review</a>
  </div>
</nav>

<div class="page-with-rail-nav__main">
<div id="pub-overview" class="pub-timeline page-section-target supports-target-highlight" data-reveal>
  <h3>Publications at a glance</h3>
  <p class="ptl-intro">Selected peer-reviewed outputs grouped by year and authorship role. Hover each venue chip for the full citation cue, or jump into the sections below for complete entries.</p>
  <div class="ptl-cards">
    <article class="ptl-card">
      <h4 class="ptl-card__year">2023</h4>
      <div class="ptl-card__rows">
        <div class="ptl-row">
          <div class="ptl-row__label ptl-row__label--first">First / corresponding</div>
          <div class="ptl-row__items">
            <span class="ptl-pub v-ijcallt" data-tip="Li et al. (2023) · ChatGPT affordances in YouTuber videos · IJCALLT">IJ</span>
            <span class="ptl-pub v-lang" data-tip="Li et al. (2023) · YouTube content creation & ChatGPT · Languages">La</span>
            <a class="ptl-pub v-olj" href="https://doi.org/10.24059/olj.v27i4.4003" target="_blank" data-tip="Pawan, Li et al. (2023) · Culturally responsive online teacher PD · Online Learning Journal">OL</a>
          </div>
        </div>
        <div class="ptl-row">
          <div class="ptl-row__label">Co-authored</div>
          <div class="ptl-row__items">
            <span class="ptl-pub v-ijcallt" data-tip="Bao & Li (2023) · Graduate instructors' use of ChatGPT · IJCALLT">IJ</span>
            <span class="ptl-pub v-lang" data-tip="Li X., Li B., & Cho (2023) · Low-income learners & ChatGPT writing · Languages">La</span>
          </div>
        </div>
      </div>
    </article>

    <article class="ptl-card">
      <h4 class="ptl-card__year">2024</h4>
      <div class="ptl-card__rows">
        <div class="ptl-row">
          <div class="ptl-row__label ptl-row__label--first">First / corresponding</div>
          <div class="ptl-row__items">
            <a class="ptl-pub v-tlt" href="https://doi.org/10.1109/TLT.2024.3386098" target="_blank" data-tip="Li et al. (2024) · Reconceptualizing SDL in the GenAI era · IEEE TLT">TL</a>
            <a class="ptl-pub v-caeai" href="https://doi.org/10.1016/j.caeai.2024.100266" target="_blank" data-tip="Li et al. (2024) · First year of ChatGPT in education · CAEAI">CA</a>
            <a class="ptl-pub v-tech" href="https://doi.org/10.1007/s11528-024-00960-3" target="_blank" data-tip="Li et al. (2024) · SDL with GenAI: YouTube creators · TechTrends">TT</a>
            <a class="ptl-pub v-springer" href="https://doi.org/10.1007/978-3-031-76293-2_12" target="_blank" data-tip="Li & Lowell (2024) · TicApp: Design thinking for diverse learners · Springer">Sp</a>
          </div>
        </div>
        <div class="ptl-row">
          <div class="ptl-row__label">Co-authored</div>
          <div class="ptl-row__items">
            <span class="ptl-pub v-springer" data-tip="Crum, Li, & Kou (2024) · GenAI & vocabulary acquisition · HCI International / Springer">Sp</span>
          </div>
        </div>
      </div>
    </article>

    <article class="ptl-card">
      <h4 class="ptl-card__year">2025</h4>
      <div class="ptl-card__rows">
        <div class="ptl-row">
          <div class="ptl-row__label ptl-row__label--first">First / corresponding</div>
          <div class="ptl-row__items">
            <a class="ptl-pub v-system" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" data-tip="Li et al. (2025) · PA-SDA Scale development & validation · System">Sy</a>
            <a class="ptl-pub v-caeai" href="https://doi.org/10.1016/j.caeai.2025.100445" target="_blank" data-tip="Li et al. (2025) · Two years of GenAI in education: Systematic review · CAEAI">CA</a>
            <a class="ptl-pub v-illt" href="https://doi.org/10.1080/17501229.2025.2505700" target="_blank" data-tip="Li & Hikmatilla (2025) · EduTubers on social media · ILLT">IL</a>
            <a class="ptl-pub v-illt" href="https://doi.org/10.1080/17501229.2025.2598587" target="_blank" data-tip="Li, Luo, Bahari et al. (2025) · GBLL outcomes systematic review · ILLT">IL</a>
            <span class="ptl-pub v-ijaied" data-tip="Li, Exter, Feng et al. (Accepted) · Language educators & GenAI: Systematic review · IJAIED">IJ</span>
          </div>
        </div>
        <div class="ptl-row">
          <div class="ptl-row__label">Co-authored</div>
          <div class="ptl-row__items">
            <a class="ptl-pub v-bjet" href="https://doi.org/10.1111/bjet.13588" target="_blank" data-tip="Yang, Li et al. (2025) · Nontraditional students & ChatGPT · BJET">BJ</a>
            <a class="ptl-pub v-caeai" href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" data-tip="Aslan, Li et al. (2025) · Collaborative problem solving in AI environments · CAEAI">CA</a>
            <span class="ptl-pub v-edusci" data-tip="Yan, Li, & Lowell (2025) · AI & XR in education: SLR · Education Sciences">ES</span>
            <span class="ptl-pub v-edusci" data-tip="Yang, Lovett, Li, & Hou (2025) · AI agents & workplace performance · Education Sciences">ES</span>
            <span class="ptl-pub v-jaid" data-tip="Lovett, Li et al. (2025) · LLMs for learner personas · JAID">JA</span>
            <span class="ptl-pub v-edusci" data-tip="Li X., Li B., Li J., & Cho (2025) · Magic School AI review · Education Sciences">ES</span>
            <span class="ptl-pub v-jche" data-tip="Yang, Luo, Herman, Li et al. (in press) · Non-traditional learners & ChatGPT design · JCHE">JC</span>
          </div>
        </div>
      </div>
    </article>

    <article class="ptl-card">
      <h4 class="ptl-card__year">2026</h4>
      <div class="ptl-card__rows">
        <div class="ptl-row">
          <div class="ptl-row__label ptl-row__label--first">First / corresponding</div>
          <div class="ptl-row__items">
            <a class="ptl-pub v-book" href="https://doi.org/10.1007/978-3-031-51447-0_260-1" target="_blank" data-tip="Li & Lowell (2026) · AI-generation literacy · Palgrave Encyclopedia of CALL">Pa</a>
          </div>
        </div>
        <div class="ptl-row">
          <div class="ptl-row__label">Co-authored</div>
          <div class="ptl-row__items">
            <span class="ptl-row__empty">No entries yet</span>
          </div>
        </div>
      </div>
    </article>
  </div>

  <div class="ptl-legend">
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-tlt"></div>IEEE TLT</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-caeai"></div>CAEAI</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-system"></div>System</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-bjet"></div>BJET</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-illt"></div>ILLT</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-tech"></div>TechTrends</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-olj"></div>OLJ</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-lang"></div>Languages</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-springer"></div>Springer</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-edusci"></div>Edu. Sciences</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-book"></div>Book / Chapter</div>
    <div class="ptl-legend-item"><div class="ptl-legend-dot v-ijaied"></div>IJAIED</div>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════════ -->
<!--  PEER-REVIEWED JOURNAL ARTICLES                          -->
<!-- ══════════════════════════════════════════════════════════ -->
<section id="pub-journals" class="pub-section page-section-target supports-target-highlight" data-reveal>
<h2>Peer-Reviewed Journal Articles</h2>
<div class="pub-first-note"><span></span> First / corresponding author</div>

<div class="pub-year">2025</div>

<!-- IJAIED Accepted — plain list -->
<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Exter, M., Feng, W., Tang, G., &amp; Xu, K. (Accepted). A systematic review of language educators' practices and development with GenAI. <em>International Journal of Artificial Intelligence in Education</em>. <span class="pub-status">Accepted</span>
  </div>
</div>

<!-- PA-SDA Scale — with thumbnail -->
<div class="bl-pcard bl-pcard--lead">
  <img class="bl-pcard__thumb" src="/assets/images/publications/PA-SDA Scale.png" alt="PA-SDA Scale validation figure" data-lightbox-bound="true">
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">Development and Validation of the PA-SDA Scale: Measuring Personal Attributes in AI-Integrated Self-Directed Learning</div>
    <div class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, Zhang, Z., Lowell, V., Wang, C., &amp; Bonk, C. J.</div>
    <div class="bl-pcard__venue">System, 133, 103793 · 2025</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" rel="noopener">DOI</a>
      <span class="pub-tag pub-tag--award">Research Award</span>
    </div>
    <div class="pub-recognition pub-recognition--with-image">
      <div>
        <div class="pub-recognition__label">Research Recognition</div>
        <div class="pub-recognition__title">Global Smart Education Innovation Prize · Research Innovation Prize</div>
        <div class="pub-recognition__body">Recognized in 2025 for the PA-SDA Scale paper at the Global Smart Education Conference at Beijing Normal University. Awarded with the research team for innovation in smart education research, and later featured by Purdue College of Education in a campus recognition display.</div>
      </div>
      <div class="pub-recognition__media">
        <img class="pub-recognition__image" src="/assets/Award/Scale development.jpeg" alt="Global Smart Education Innovation Prize trophy and certificate for the PA-SDA Scale paper" data-lightbox-bound="true">
        <img class="pub-recognition__image" src="/assets/images/personal/award.jpeg" alt="Purdue College of Education display recognizing the Global Smart Education Innovation Prize for the PA-SDA Scale paper" data-lightbox-bound="true">
      </div>
    </div>
  </div>
</div>

<!-- Two years of innovation — carousel -->
<div class="bl-pcard bl-pcard--lead">
  <div class="bl-pcard__slides">
    <div class="bl-pcard__slide active"><img src="/assets/images/publications/CAEAI 2025_1.png" alt="Two Years – figure 1" data-lightbox-bound="true"></div>
    <div class="bl-pcard__slide"><img src="/assets/images/publications/CAEAI 2025_2.png" alt="Two Years – figure 2" data-lightbox-bound="true"></div>
    <div class="bl-pslide-nav">
      <button class="bl-pslide-btn bl-pslide-prev">‹</button>
      <div class="bl-pslide-dots"><span class="bl-pslide-dot active"></span><span class="bl-pslide-dot"></span></div>
      <button class="bl-pslide-btn bl-pslide-next">›</button>
    </div>
  </div>
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">Two Years of Innovation: A Systematic Review of Empirical Generative AI Research in Language Learning and Teaching</div>
    <div class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, Tan, L. Y., Wang, C., &amp; Lowell, V.</div>
    <div class="bl-pcard__venue">Computers &amp; Education: Artificial Intelligence, 9, 100445 · 2025</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.caeai.2025.100445" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- CPS × Intel — carousel -->
<div class="bl-pcard">
  <div class="bl-pcard__slides">
    <div class="bl-pcard__slide active"><img src="/assets/images/publications/cps-intel_1.jpg" alt="CPS study – fig 1" data-lightbox-bound="true"></div>
    <div class="bl-pcard__slide"><img src="/assets/images/publications/cps-intel_2.jpg" alt="CPS study – fig 2" data-lightbox-bound="true"></div>
    <div class="bl-pcard__slide"><img src="/assets/images/publications/cps-intel_3.jpg" alt="CPS study – fig 3" data-lightbox-bound="true"></div>
    <div class="bl-pcard__slide"><img src="/assets/images/publications/cps-intel_4.jpg" alt="CPS study – fig 4" data-lightbox-bound="true"></div>
    <div class="bl-pslide-nav">
      <button class="bl-pslide-btn bl-pslide-prev">‹</button>
      <div class="bl-pslide-dots">
        <span class="bl-pslide-dot active"></span><span class="bl-pslide-dot"></span>
        <span class="bl-pslide-dot"></span><span class="bl-pslide-dot"></span>
      </div>
      <button class="bl-pslide-btn bl-pslide-next">›</button>
    </div>
  </div>
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">An Early Investigation of Collaborative Problem Solving in Conversational AI-Mediated Learning Environments</div>
    <div class="bl-pcard__authors">Aslan, S., Alyuz, N., <span class="bl-pcard__me">Li, B.</span>, Durham, L. M., Shi, M., Sharma, S., &amp; Nachman, L.</div>
    <div class="bl-pcard__venue">Computers &amp; Education: Artificial Intelligence, 100, 100393 · 2025</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" rel="noopener">DOI</a>
      <span class="pub-tag pub-tag--award">Research Award</span>
    </div>
    <div class="pub-recognition pub-recognition--with-image">
      <div>
        <div class="pub-recognition__label">Research Recognition</div>
        <div class="pub-recognition__title">AECT Systems Thinking &amp; Change Outstanding Journal Article Award</div>
        <div class="pub-recognition__body">Received at AECT 2025 in Las Vegas for this Intel Labs collaboration on collaborative problem solving in conversational AI-mediated learning environments.</div>
      </div>
      <img class="pub-recognition__image" src="/assets/Award/AECT CPS.jpeg" alt="AECT Systems Thinking and Change Outstanding Journal Article Award plaque for the collaborative problem solving paper" data-lightbox-bound="true">
    </div>
  </div>
</div>

<!-- BJET 2025 — with thumbnail -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb" src="/assets/images/publications/BJET 2025_1.png" alt="Nontraditional students ChatGPT BJET 2025" data-lightbox-bound="true">
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy, and Performance: A Mixed-Methods Approach</div>
    <div class="bl-pcard__authors">Yang, M., Jiang, S., <span class="bl-pcard__me">Li, B.</span>, Herman, K., Luo, T., Moots, S. C., &amp; Lovett, N.</div>
    <div class="bl-pcard__venue">British Journal of Educational Technology · Advance online publication · 2025</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1111/bjet.13588" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- Yang JCHE — with thumbnail -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb" src="/assets/images/publications/Non-tradition_JCHE.png" alt="Non-traditional learners ChatGPT JCHE 2025" data-lightbox-bound="true">
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">Examining Non-Traditional Online Learners' Ownership of Learning in the Context of ChatGPT-Facilitated Design</div>
    <div class="bl-pcard__authors">Yang, M., Luo, T., Herman, K., <span class="bl-pcard__me">Li, B.</span>, Jiang, S., &amp; Kim, J.</div>
    <div class="bl-pcard__venue">Journal of Computing in Higher Education · 2025</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1007/s12528-025-09476-y" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- GBLL Review — carousel -->
<div class="bl-pcard bl-pcard--lead">
  <div class="bl-pcard__slides">
    <div class="bl-pcard__slide active"><img src="/assets/images/publications/game-based_1.png" alt="GBLL Review – figure 1" data-lightbox-bound="true"></div>
    <div class="bl-pcard__slide"><img src="/assets/images/publications/game-based_2.png" alt="GBLL Review – figure 2" data-lightbox-bound="true"></div>
    <div class="bl-pslide-nav">
      <button class="bl-pslide-btn bl-pslide-prev">‹</button>
      <div class="bl-pslide-dots"><span class="bl-pslide-dot active"></span><span class="bl-pslide-dot"></span></div>
      <button class="bl-pslide-btn bl-pslide-next">›</button>
    </div>
  </div>
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">Beyond Scores: A Systematic Review of Learning and Psychological Outcomes of Digital Game-Based Language Learning (2010–2025)</div>
    <div class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, Luo, T., Bahari, A., Yang, M., &amp; Chan, W. S.</div>
    <div class="bl-pcard__venue">Innovation in Language Learning and Teaching, 1–37 · 2025</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1080/17501229.2025.2598587" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, &amp; Hikmatilla, U. (2025). Getting viral on social media: Exploring EduTubers' perceptions and practices. <em>Innovation in Language Learning and Teaching, 19</em>, 1–25.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1080/17501229.2025.2505700" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Yan, W., <strong>Li, B.</strong>, &amp; Lowell, V. L. (2025). Integrating artificial intelligence and extended reality in language education: A systematic literature review (2017–2024). <em>Education Sciences, 15</em>(8), 1066.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.3390/educsci15081066" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Yang, M., Lovett, N., <strong>Li, B.</strong>, &amp; Hou, Z. (2025). Towards dynamic learner state: Orchestrating AI agents and workplace performance via the Model Context Protocol. <em>Education Sciences, 15</em>(8), 1004.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.3390/educsci15081004" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Lovett, N., Yang, M., Herman, K., <strong>Li, B.</strong>, Sosonkina, M., Purwanto, W., Jiang, P., &amp; Wu, M. H. (2025). Leveraging large language models to create learner personas for training design. <em>Journal of Applied Instructional Design, 14</em>(3).
    <div class="pub-tags">
      <a class="pub-tag pub-tag--web" href="https://jaid.edtechbooks.org/jaid_14_3/fkuqikevdr" target="_blank" rel="noopener">Web</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Li, X., <strong>Li, B.</strong>, Li, J., &amp; Cho, S.-J. (2025). Technology review of Magic School AI: An intelligent way for education inclusivity and teacher workload reduction. <em>Education Sciences, 15</em>(8), 963.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.3390/educsci15080963" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-year">2024</div>

<!-- IEEE TLT 2024 — with thumbnail -->
<div class="bl-pcard bl-pcard--lead">
  <img class="bl-pcard__thumb" src="/assets/images/publications/IEEE TLT 2024.png" alt="AI-Integrated SDL Framework (IEEE TLT 2024)" data-lightbox-bound="true">
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">Reconceptualizing Self-Directed Learning in the Era of Generative AI: An Exploratory Analysis</div>
    <div class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, Bonk, C. J., Wang, C., &amp; Kou, X.</div>
    <div class="bl-pcard__venue">IEEE Transactions on Learning Technologies, 17(3), 1515–1529 · 2024</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1109/TLT.2024.3386098" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Lowell, V., Watson, C., &amp; Wang, C. (2024). A systematic review of the first year of publications on ChatGPT and language education. <em>Computers &amp; Education: Artificial Intelligence, 100</em>, 100266.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.caeai.2024.100266" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Wang, C., Bonk, C. J., &amp; Kou, X. (2024). Exploring inventions in self-directed learning with generative AI: Implementations and perspectives of YouTube content creators. <em>TechTrends</em>.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1007/s11528-024-00960-3" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-year">2023</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Bonk, C. J., &amp; Kou, X. (2023). Exploring the multilingual applications of ChatGPT: Uncovering language learning affordances in YouTuber videos. <em>International Journal of Computer-Assisted Language Learning and Teaching, 13</em>(1), 1–22.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.4018/IJCALLT.326135" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Bao, Y., &amp; <strong>Li, B.</strong> (2023). A preliminary study on graduate student instructors' exploration, perception, and use of ChatGPT. <em>International Journal of Computer-Assisted Language Learning and Teaching, 13</em>(1), 1–23.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.4018/IJCALLT.332873" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Kou, X., &amp; Bonk, C. J. (2023). Embracing the disrupted language teaching and learning field: Analyzing YouTube content creation related to ChatGPT. <em>Languages, 8</em>, 197.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.3390/languages8030197" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Li, X., <strong>Li, B.</strong>, &amp; Cho, S. (2023). Empowering learners from low-income families to improve their writing with ChatGPT's assistance. <em>Languages, 8</em>, 238.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.3390/languages8040238" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    Pawan, F., <strong>Li, B.</strong>, Nijiati, S., Dopwell, B. M., Harris, A., &amp; Iruoje, T. (2023). Culturally- and linguistically-responsive online teacher professional development. <em>Online Learning, 27</em>(4).
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.24059/olj.v27i4.4003" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>
</section>

<!-- ══════════════════════════════════════════════════════════ -->
<!--  REFEREED PROCEEDINGS                                    -->
<!-- ══════════════════════════════════════════════════════════ -->
<section id="pub-proceedings" class="pub-section page-section-target supports-target-highlight" data-reveal>
<h2>Refereed Proceedings</h2>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Crum, S., <strong>Li, B.</strong>, &amp; Kou, X. (2024). Generative artificial intelligence and interactive learning platforms: Second language vocabulary acquisition. In C. Stephanidis et al. (Eds.), <em>HCI International 2024 Posters</em> (CCIS Vol. 2117). Springer.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1007/978-3-031-61953-3_6" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>
</section>

<!-- ══════════════════════════════════════════════════════════ -->
<!--  BOOK CHAPTERS                                           -->
<!-- ══════════════════════════════════════════════════════════ -->
<section id="pub-chapters" class="pub-section page-section-target supports-target-highlight" data-reveal>
<h2>Book Chapters</h2>

<!-- AI-generation literacy — Palgrave 2026 — with thumbnail -->
<div class="bl-pcard bl-pcard--lead">
  <img class="bl-pcard__thumb" src="/assets/images/publications/AI-generation Literacy.png" alt="AI-Generation Literacy – Palgrave Encyclopedia" data-lightbox-bound="true">
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">AI-Generation Literacy</div>
    <div class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, &amp; Lowell, V.</div>
    <div class="bl-pcard__venue">In L. McCallum &amp; D. Tafazoli (Eds.), <em>The Palgrave Encyclopedia of Computer-Assisted Language Learning</em>. Palgrave Macmillan · 2026</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1007/978-3-031-51447-0_260-1" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- TicApp — with animated gif thumbnail + project page link -->
<div class="bl-pcard bl-pcard--lead">
  <img class="bl-pcard__thumb bl-pcard__thumb--gif" src="/assets/images/publications/ticapp.gif" alt="TicApp mobile app demo" data-lightbox-bound="true">
  <div class="bl-pcard__body">
    <div class="bl-pcard__title">Implementing Design Thinking: A Mobile Application for Diverse Learners to Overcome Challenges in Character Learning</div>
    <div class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, &amp; Lowell, V. L.</div>
    <div class="bl-pcard__venue">In M. Schmidt et al. (Eds.), <em>Transdisciplinary Learning Experience Design</em>. Springer · 2024</div>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1007/978-3-031-76293-2_12" target="_blank" rel="noopener">DOI</a>
      <a class="pub-tag pub-tag--web" href="/blog/APP/" rel="noopener">Project page</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Ma, Y., &amp; Lyu, X. (2023). Bring together native speakers around the world: A foreign language flagship program's online experience during COVID. In R. Chen (Ed.), <em>The Future of Remote and Hybrid Work in Global Higher Education</em>. Palgrave Macmillan.
  </div>
</div>
</section>

<!-- ══════════════════════════════════════════════════════════ -->
<!--  BOOK                                                    -->
<!-- ══════════════════════════════════════════════════════════ -->
<section id="pub-book" class="pub-section page-section-target supports-target-highlight" data-reveal>
<h2>Book</h2>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, &amp; Li, H. (2021). <em>Techniques of Teaching English</em>. Zhejiang University Press. (Print run: 1,000; adopted by Zhejiang Ocean University.)
  </div>
</div>
</section>

<!-- ══════════════════════════════════════════════════════════ -->
<!--  UNDER REVIEW & IN REVISION                              -->
<!-- ══════════════════════════════════════════════════════════ -->
<section id="pub-under-review" class="pub-section page-section-target supports-target-highlight" data-reveal>
<h2>Under Review &amp; In Revision</h2>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong> Learning in the loop: Moments, mindsets, and meaning with generative AI. <em>Computers &amp; Education</em>. <span class="pub-status">Under review</span>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Yang, M., Harbor, J., <strong>Li, B.</strong>, &amp; Nikiema, J. Infusing authenticity into a service-learning program. <em>Education + Training</em>. <span class="pub-status">Major revision</span>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    Mao, Y., &amp; <strong>Li, B.</strong> Choosing the future of learning: Assessing preferences for educational GPTs through a discrete choice experiment. <em>International Journal of Artificial Intelligence in Education</em>. <span class="pub-status">Under review</span>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    Li, X., Zhang, Y., &amp; <strong>Li, B.</strong> The emotional equation: Affective factors shaping AI-assisted ESL writing. <em>Education and Information Technologies</em>. <span class="pub-status">Under review</span>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Mao, Y., Zhang, Y., Niu, W., &amp; Qian, J. Coding their choices: Assessing student preferences for statistical software through a discrete choice experiment. <em>Journal of Educational Computing Research</em>. <span class="pub-status">Under review</span>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Zhang, Z., &amp; Lowell, V. Pathways to proficiency: Mapping personal attributes in AI-integrated self-directed learning. <em>Language Learning &amp; Technology</em>. <span class="pub-status">Under review</span>
  </div>
</div>


<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Ye, J., Yang, X., <strong>Li, B.</strong>, Nong, W., &amp; Wang, L. Factors associated with AI-assisted learning satisfaction and acceptance among vocational college students. <em>International Journal of Information and Education Technology</em>. <span class="pub-status">In press</span>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Li, X., Cho, S., &amp; <strong>Li, B.</strong> Impact of AI on language teaching pedagogy: A participatory action research study. In S. Wyatt (Ed.), <em>Emerging Technologies in Second Language Teaching and Learning</em>. Vernon Press. <span class="pub-status">Minor revision</span>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Lowell, V., &amp; Hou, Z. Design precedents to design innovation: Developing an advanced AI monitoring system for writing assessment. <em>Journal of Computing in Higher Education</em>. <span class="pub-status">Proposal accepted</span>
  </div>
</div>
</section>
</div>
</div>

<!-- ── LIGHTBOX OVERLAY ── -->
<div class="bl-lightbox" id="bl-lightbox">
  <span class="bl-lightbox__close" id="bl-lightbox-close">✕</span>
  <img id="bl-lightbox-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="" data-lightbox-bound="true">
</div>

<script>
(function () {
  /* ── Carousel ── */
  document.querySelectorAll('.bl-pcard__slides').forEach(function (slides) {
    var items  = slides.querySelectorAll('.bl-pcard__slide');
    var dots   = slides.querySelectorAll('.bl-pslide-dot');
    var prev   = slides.querySelector('.bl-pslide-prev');
    var next   = slides.querySelector('.bl-pslide-next');
    if (!items.length) return;
    var cur = 0;
    function show(n) {
      items[cur].classList.remove('active');
      dots[cur] && dots[cur].classList.remove('active');
      cur = (n + items.length) % items.length;
      items[cur].classList.add('active');
      dots[cur] && dots[cur].classList.add('active');
    }
    prev && prev.addEventListener('click', function (e) { e.preventDefault(); show(cur - 1); });
    next && next.addEventListener('click', function (e) { e.preventDefault(); show(cur + 1); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { show(i); });
    });
  });

  /* ── Lightbox ── */
  var lb    = document.getElementById('bl-lightbox');
  var lbImg = document.getElementById('bl-lightbox-img');
  var lbX   = document.getElementById('bl-lightbox-close');
  function openLB(src, alt) {
    lbImg.src = src; lbImg.alt = alt || '';
    lb.classList.add('open');
  }
  function closeLB() { lb.classList.remove('open'); lbImg.removeAttribute('src'); }
  document.querySelectorAll('.bl-pcard__slide img, .bl-pcard__thumb').forEach(function (img) {
    img.addEventListener('click', function (e) { e.stopPropagation(); openLB(img.src, img.alt); });
  });
  lbX  && lbX.addEventListener('click', closeLB);
  lbImg && lbImg.addEventListener('click', function (e) { e.stopPropagation(); closeLB(); });
  lb   && lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLB(); });
}());
</script>
