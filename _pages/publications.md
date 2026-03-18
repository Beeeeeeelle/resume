---
permalink: /publications/
title: "Publications"
---

<style>
/* ── Metrics bar ── */
.pub-metrics {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  padding: 18px 0 28px;
  margin-bottom: 36px;
}
.pub-metric {
  text-align: center;
}
.pub-metric__number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: #2a52a0;
  line-height: 1;
}
.pub-metric__label {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #888;
  margin-top: 4px;
}

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
  font-size: 12.5px;
  color: #777;
  margin: 0 0 22px;
  font-style: italic;
}
.pub-first-note span {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: #e05a2b;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
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
.bl-pcard__body { flex: 1; min-width: 0; }
.bl-pcard__title {
  font-size: 14.5px !important;
  font-weight: 700 !important;
  color: #111 !important;
  margin: 0 0 5px !important;
  line-height: 1.45 !important;
}
.bl-pcard__authors {
  font-size: 13.5px;
  color: #555;
  margin: 0 0 4px;
}
.bl-pcard__venue {
  font-size: 13px;
  color: #777;
  font-style: italic;
  margin: 0 0 10px;
}
.bl-pcard__me {
  font-weight: 700;
  color: #111;
}

/* ── Plain list entry (no thumbnail) ── */
.pub-entry {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  align-items: flex-start;
}
.pub-entry__dot {
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  background: #e05a2b;
  border-radius: 50%;
  margin-top: 6px;
}
.pub-entry__dot--empty {
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  margin-top: 6px;
}
.pub-entry__body {
  font-size: 14px;
  line-height: 1.7;
  color: #333;
}
.pub-entry__body strong {
  color: #111;
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
  border-radius: 3px;
  text-decoration: none;
  letter-spacing: 0.02em;
}
.pub-tag--doi   { background: #e8eef8; color: #2a52a0; }
.pub-tag--pdf   { background: #fce8e8; color: #b02020; }
.pub-tag--web   { background: #e8f6e8; color: #1e7a1e; }
.pub-tag--preprint { background: #f5f0e8; color: #7a5a00; }
.pub-tag:hover  { opacity: 0.8; }

/* ── Under review ── */
.pub-status {
  font-size: 11.5px;
  font-style: italic;
  color: #999;
  margin-left: 6px;
}
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
.ptl-wrap {
  overflow-x: auto;
}
.ptl-grid {
  display: grid;
  grid-template-columns: 110px repeat(4, 1fr);
  gap: 0;
  min-width: 420px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  overflow: hidden;
}
.ptl-header {
  background: #f5f6f8;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: 700;
  color: #666;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
}
.ptl-header:not(:last-child) { border-right: 1px solid #e8e8e8; }
.ptl-label {
  padding: 10px 10px;
  font-size: 11.5px;
  font-weight: 700;
  color: #555;
  background: #f9fafb;
  display: flex;
  align-items: center;
  border-right: 1px solid #e8e8e8;
}
.ptl-label--first { border-bottom: 1px solid #e8e8e8; }
.ptl-cell {
  padding: 8px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  border-right: 1px solid #e8e8e8;
}
.ptl-cell:last-child { border-right: none; }
.ptl-cell--first { border-bottom: 1px solid #e8e8e8; }

/* Publication squares */
.ptl-pub {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 800;
  color: #fff;
  cursor: default;
  position: relative;
  text-decoration: none;
  letter-spacing: 0;
  line-height: 1;
  text-align: center;
}
.ptl-pub:hover { transform: scale(1.15); z-index: 10; }

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

/* Legend */
.ptl-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 12px;
}
.ptl-legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #555;
}
.ptl-legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 2px;
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

<div class="pub-timeline">
  <h3>Publications at a glance</h3>
  <div class="ptl-wrap">
  <div class="ptl-grid">
    <!-- Header row: 2023–2026 -->
    <div class="ptl-header" style="text-align:left"></div>
    <div class="ptl-header">2023</div>
    <div class="ptl-header">2024</div>
    <div class="ptl-header">2025</div>
    <div class="ptl-header">2026</div>

    <!-- Row 1: First / corresponding author -->
    <div class="ptl-label ptl-label--first">First / corresp.</div>
    <div class="ptl-cell ptl-cell--first">
      <span class="ptl-pub v-ijcallt" data-tip="Li et al. (2023) · ChatGPT affordances in YouTuber videos · IJCALLT">IJ</span>
      <span class="ptl-pub v-lang"    data-tip="Li et al. (2023) · YouTube content creation & ChatGPT · Languages">La</span>
      <a class="ptl-pub v-olj"    href="https://doi.org/10.24059/olj.v27i4.4003" target="_blank" data-tip="Pawan, Li et al. (2023) · Culturally responsive online teacher PD · Online Learning Journal">OL</a>
    </div>
    <div class="ptl-cell ptl-cell--first">
      <a class="ptl-pub v-tlt"   href="https://doi.org/10.1109/TLT.2024.3386098" target="_blank" data-tip="Li et al. (2024) · Reconceptualizing SDL in the GenAI era · IEEE TLT">TL</a>
      <a class="ptl-pub v-caeai" href="https://doi.org/10.1016/j.caeai.2024.100266" target="_blank" data-tip="Li et al. (2024) · First year of ChatGPT in education · CAEAI">CA</a>
      <a class="ptl-pub v-tech"  href="https://doi.org/10.1007/s11528-024-00960-3" target="_blank" data-tip="Li et al. (2024) · SDL with GenAI: YouTube creators · TechTrends">TT</a>
      <a class="ptl-pub v-springer" href="https://doi.org/10.1007/978-3-031-76293-2_12" target="_blank" data-tip="Li & Lowell (2024) · TicApp: Design thinking for diverse learners · Springer">Sp</a>
    </div>
    <div class="ptl-cell ptl-cell--first">
      <a class="ptl-pub v-system" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" data-tip="Li et al. (2025) · PA-SDA Scale development & validation · System">Sy</a>
      <a class="ptl-pub v-caeai"  href="https://doi.org/10.1016/j.caeai.2025.100445" target="_blank" data-tip="Li et al. (2025) · Two years of GenAI in education: Systematic review · CAEAI">CA</a>
      <a class="ptl-pub v-illt"   href="https://doi.org/10.1080/17501229.2025.2505700" target="_blank" data-tip="Li & Hikmatilla (2025) · EduTubers on social media · ILLT">IL</a>
    </div>
    <div class="ptl-cell ptl-cell--first">
      <a class="ptl-pub v-book" href="https://doi.org/10.1007/978-3-031-51447-0_260-1" target="_blank" data-tip="Li & Lowell (2026) · AI-generation literacy · Palgrave Encyclopedia of CALL">Pa</a>
    </div>

    <!-- Row 2: Co-authored -->
    <div class="ptl-label">Co-authored</div>
    <div class="ptl-cell">
      <span class="ptl-pub v-ijcallt" data-tip="Bao & Li (2023) · Graduate instructors' use of ChatGPT · IJCALLT">IJ</span>
      <span class="ptl-pub v-lang"    data-tip="Li X., Li B., & Cho (2023) · Low-income learners & ChatGPT writing · Languages">La</span>
    </div>
    <div class="ptl-cell">
      <span class="ptl-pub v-springer" data-tip="Crum, Li, & Kou (2024) · GenAI & vocabulary acquisition · HCI International / Springer">Sp</span>
    </div>
    <div class="ptl-cell">
      <a class="ptl-pub v-bjet"    href="https://doi.org/10.1111/bjet.13588" target="_blank" data-tip="Yang, Li et al. (2025) · Nontraditional students & ChatGPT · BJET">BJ</a>
      <a class="ptl-pub v-caeai"   href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" data-tip="Aslan, Li et al. (2025) · Collaborative problem solving in AI environments · CAEAI">CA</a>
      <span class="ptl-pub v-edusci"  data-tip="Yan, Li, & Lowell (2025) · AI & XR in education: SLR · Education Sciences">ES</span>
      <span class="ptl-pub v-edusci"  data-tip="Yang, Lovett, Li, & Hou (2025) · AI agents & workplace performance · Education Sciences">ES</span>
      <span class="ptl-pub v-jaid"    data-tip="Lovett, Li et al. (2025) · LLMs for learner personas · JAID">JA</span>
      <span class="ptl-pub v-edusci"  data-tip="Li X., Li B., Li J., & Cho (2025) · Magic School AI review · Education Sciences">ES</span>
      <span class="ptl-pub v-jche"    data-tip="Yang, Luo, Herman, Li et al. (in press) · Non-traditional learners & ChatGPT design · JCHE">JC</span>
    </div>
    <div class="ptl-cell"></div>
  </div>
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
  </div>
</div>

<!-- ── METRICS ── -->
<div class="pub-metrics">
  <div class="pub-metric">
    <span class="pub-metric__number">641+</span>
    <span class="pub-metric__label">Citations</span>
  </div>
  <div class="pub-metric">
    <span class="pub-metric__number">12</span>
    <span class="pub-metric__label">h-index</span>
  </div>
  <div class="pub-metric">
    <span class="pub-metric__number">13</span>
    <span class="pub-metric__label">First-author papers</span>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════════ -->
<!--  PEER-REVIEWED JOURNAL ARTICLES                          -->
<!-- ══════════════════════════════════════════════════════════ -->
<section class="pub-section">
<h2>Peer-Reviewed Journal Articles</h2>
<p class="pub-first-note"><span></span> First / corresponding author</p>

<p class="pub-year">2025</p>

<!-- PA-SDA Scale — with thumbnail -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb" src="/assets/images/publications/PA-SDA Scale.png" alt="PA-SDA Scale validation figure">
  <div class="bl-pcard__body">
    <p class="bl-pcard__title">Development and Validation of the PA-SDA Scale: Measuring Personal Attributes in AI-Integrated Self-Directed Learning</p>
    <p class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, Zhang, Z., Lowell, V., Wang, C., &amp; Bonk, C. J.</p>
    <p class="bl-pcard__venue">System, 133, 103793 · 2025</p>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- Two years of innovation — with thumbnail -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb" src="/assets/images/publications/CAEAI 2025_1.png" alt="Two years of generative AI research systematic review">
  <div class="bl-pcard__body">
    <p class="bl-pcard__title">Two Years of Innovation: A Systematic Review of Empirical Generative AI Research in Education</p>
    <p class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, Tan, L. Y., Wang, C., &amp; Lowell, V.</p>
    <p class="bl-pcard__venue">Computers &amp; Education: Artificial Intelligence, 9, 100445 · 2025</p>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.caeai.2025.100445" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- CPS × Intel — with thumbnail -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb" src="/assets/images/publications/cps-intel_1.jpg" alt="Collaborative problem solving in AI-mediated environments">
  <div class="bl-pcard__body">
    <p class="bl-pcard__title">An Early Investigation of Collaborative Problem Solving in Conversational AI-Mediated Learning Environments</p>
    <p class="bl-pcard__authors">Aslan, S., Alyuz, N., <span class="bl-pcard__me">Li, B.</span>, Durham, L. M., Shi, M., Sharma, S., &amp; Nachman, L.</p>
    <p class="bl-pcard__venue">Computers &amp; Education: Artificial Intelligence, 100, 100393 · 2025</p>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- BJET 2025 — with thumbnail -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb" src="/assets/images/publications/BJET 2025_1.png" alt="Nontraditional students ChatGPT BJET 2025">
  <div class="bl-pcard__body">
    <p class="bl-pcard__title">Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy, and Performance: A Mixed-Methods Approach</p>
    <p class="bl-pcard__authors">Yang, M., Jiang, S., <span class="bl-pcard__me">Li, B.</span>, Herman, K., Luo, T., Moots, S. C., &amp; Lovett, N.</p>
    <p class="bl-pcard__venue">British Journal of Educational Technology · Advance online publication · 2025</p>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1111/bjet.13588" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- Remaining 2025 — plain list -->
<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    <strong>Yang, M.</strong>, Luo, T., Herman, K., <strong>Li, B.</strong>, Jiang, S., &amp; Kim, J. (In press). Examining non-traditional online learners' ownership of learning in the context of ChatGPT-facilitated design. <em>Journal of Computing in Higher Education</em>.
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
    <strong>Yang, M.</strong>, Lovett, N., <strong>Li, B.</strong>, &amp; Hou, Z. (2025). Towards dynamic learner state: Orchestrating AI agents and workplace performance via the Model Context Protocol. <em>Education Sciences, 15</em>(8), 1004.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.3390/educsci15081004" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Lovett, N., <strong>Li, B.</strong>, Yang, M., Herman, K., Sosonkina, M., Purwanto, W., Jiang, P., &amp; Wu, M. H. (2025). Leveraging large language models to create learner personas for training design. <em>Journal of Applied Instructional Design, 14</em>(3).
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

<p class="pub-year">2024</p>

<!-- IEEE TLT 2024 — with thumbnail -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb" src="/assets/images/publications/IEEE TLT 2024.png" alt="AI-Integrated SDL Framework (IEEE TLT 2024)">
  <div class="bl-pcard__body">
    <p class="bl-pcard__title">Reconceptualizing Self-Directed Learning in the Era of Generative AI: An Exploratory Analysis</p>
    <p class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, Bonk, C. J., Wang, C., &amp; Kou, X.</p>
    <p class="bl-pcard__venue">IEEE Transactions on Learning Technologies, 17(3), 1515–1529 · 2024</p>
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

<p class="pub-year">2023</p>

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
<section class="pub-section">
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
<section class="pub-section">
<h2>Book Chapters</h2>

<!-- AI-generation literacy — Palgrave 2026 -->
<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, &amp; Lowell, V. (2026). AI-generation literacy. In L. McCallum &amp; D. Tafazoli (Eds.), <em>The Palgrave Encyclopedia of Computer-Assisted Language Learning</em>. Palgrave Macmillan.
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1007/978-3-031-51447-0_260-1" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- TicApp — with animated gif thumbnail + project page link -->
<div class="bl-pcard">
  <img class="bl-pcard__thumb bl-pcard__thumb--gif" src="/assets/images/publications/ticapp.gif" alt="TicApp mobile app demo">
  <div class="bl-pcard__body">
    <p class="bl-pcard__title">Implementing Design Thinking: A Mobile Application for Diverse Learners to Overcome Challenges in Character Learning</p>
    <p class="bl-pcard__authors"><span class="bl-pcard__me">Li, B.</span>, &amp; Lowell, V. L.</p>
    <p class="bl-pcard__venue">In M. Schmidt et al. (Eds.), <em>Transdisciplinary Learning Experience Design</em>. Springer · 2024</p>
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
<section class="pub-section">
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
<section class="pub-section">
<h2>Under Review &amp; In Revision</h2>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    Mao, Y., &amp; <strong>Li, B.</strong> Choosing the future of learning: Assessing preferences for educational GPTs through a discrete choice experiment. <em>International Journal of Artificial Intelligence in Education</em>. <span class="pub-status">Under review</span>
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
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Exter, M., Tang, G., Xu, K., &amp; Feng, W. A systematic review of language educators' perspectives, practices, and professional development in the GenAI era. <em>International Journal of Artificial Intelligence in Education</em>. <span class="pub-status">Major revision</span>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry__dot--empty"></div>
  <div class="pub-entry__body">
    Ye, J., Yang, X., <strong>Li, B.</strong>, Nong, W., &amp; Wang, L. Factors associated with AI-assisted learning satisfaction and acceptance among vocational college students. <em>European Journal of Education</em>. <span class="pub-status">Under review</span>
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
