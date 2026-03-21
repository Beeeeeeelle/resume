---
title: "Research"
layout: single
permalink: /research/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/ChatGPT-and-Generative-AI-as-a-New-Partner-in-Language-Teaching-and-Learning—2.png
  excerpt: "My research examines how generative AI reshapes learner agency, authenticity, and equity in self-directed and assessed learning."
---

<style>
/* ── Research Strands heading ── */
.rn-heading {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8b95a7;
  margin: 52px 0 10px;
}
.rn-intro {
  max-width: 860px;
  margin: 0 0 22px;
  font-size: 14px;
  line-height: 1.8;
  color: #5f6b7c;
}

/* ── 2×2 strand grid ── */
.rn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}
@media (max-width: 640px) {
  .rn-grid { grid-template-columns: 1fr; }
}

/* ── Strand card ── */
.rn-card {
  position: relative;
  border-radius: 18px;
  padding: 22px 22px 20px;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  border: 1px solid #e8edf5;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
  transition: box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
}
.rn-card:hover {
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.09);
  transform: translateY(-3px);
}
.rn-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 4px;
}
.rn-card--1::before { background: linear-gradient(90deg, #3d6cb5 0%, #9ec5ff 100%); }
.rn-card--2::before { background: linear-gradient(90deg, #b04468 0%, #f0a7bf 100%); }
.rn-card--3::before { background: linear-gradient(90deg, #2e7a5a 0%, #8ed4b2 100%); }
.rn-card--4::before { background: linear-gradient(90deg, #8a6020 0%, #e4b56d 100%); }
.rn-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.rn-card__meta {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.rn-card__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 34px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: #f3f6fb;
  color: #64748b;
}
.rn-card--1 .rn-card__meta { background: #eaf2ff; color: #2d5ca6; }
.rn-card--2 .rn-card__meta { background: #fbeaf0; color: #9a3658; }
.rn-card--3 .rn-card__meta { background: #e9f7f0; color: #27684b; }
.rn-card--4 .rn-card__meta { background: #fbf1e4; color: #7b5622; }
.rn-card--1 .rn-card__num { background: #edf4ff; color: #2d5ca6; }
.rn-card--2 .rn-card__num { background: #fdf0f4; color: #9a3658; }
.rn-card--3 .rn-card__num { background: #eef9f3; color: #27684b; }
.rn-card--4 .rn-card__num { background: #fdf5ea; color: #7b5622; }

/* Large serif title */
.rn-card h3 {
  font-family: Lora, serif;
  font-size: 21px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 12px;
  color: #172033;
}

.rn-card p {
  font-size: 13.5px;
  line-height: 1.68;
  color: #5a6575;
  margin: 0 0 16px;
}

/* ── Pill-style paper links ── */
.rn-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.rn-pill {
  display: inline-block;
  font-size: 11.5px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: background 0.18s, transform 0.18s, border-color 0.18s;
  background: #f6f8fc;
  border: 1px solid #e1e8f2;
}
.rn-pill:hover {
  background: #eef3fb;
  transform: translateY(-1px);
}
.rn-card--1 .rn-pill { background: #edf4ff; border-color: #d8e7ff; color: #2d5ca6; }
.rn-card--2 .rn-pill { background: #fdf0f4; border-color: #f6d9e3; color: #9a3658; }
.rn-card--3 .rn-pill { background: #eef9f3; border-color: #d8efdf; color: #27684b; }
.rn-card--4 .rn-pill { background: #fdf5ea; border-color: #f2dfbf; color: #7b5622; }
.rn-card--1 .rn-pill:hover { background: #e5f0ff; }
.rn-card--2 .rn-pill:hover { background: #fbe6ee; }
.rn-card--3 .rn-pill:hover { background: #e5f5ec; }
.rn-card--4 .rn-pill:hover { background: #f9ecd7; }

/* ── Projects section ── */
.projects-section {
  margin: 52px 0 40px;
}
.projects-heading {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #aaa;
  margin: 0 0 20px;
}
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 640px) {
  .project-list { grid-template-columns: 1fr; }
}
.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8eaf0;
  transition: box-shadow 0.22s ease, transform 0.22s ease;
}
.project-card:hover {
  box-shadow: 0 10px 28px rgba(17,24,39,0.08);
  transform: translateY(-4px);
}
.project-card__media {
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #eef2f7;
}
.project-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.project-card:hover .project-card__media img {
  transform: scale(1.04);
}
.project-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 18px 20px;
}
.project-card__tag {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 8px;
  border-radius: 10px;
  margin-bottom: 9px;
}
.tag--collab { background: #e8f0fe; color: #2a52a0; }
.tag--dbr    { background: #fce8f0; color: #a02a52; }
.tag--design { background: #e8f8ee; color: #2a7a4a; }
.tag--assessment { background: #fdf0f4; color: #9a3658; }
.tag--diss {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(200,140,40,0.10);
  color: #9a6600;
  border: 1px solid rgba(200,140,40,0.28);
}
.tag--diss::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #e08a00;
  animation: diss-pulse 1.8s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes diss-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.45; transform: scale(0.75); }
}

/* Dissertation card — warm premium treatment */
.project-card--diss {
  border-color: rgba(200,140,40,0.22);
  background:
    linear-gradient(160deg, rgba(255,243,210,0.55) 0%, #ffffff 80px),
    #ffffff;
  box-shadow: 0 2px 12px rgba(200,140,40,0.08);
}
.project-card--diss:hover {
  box-shadow: 0 10px 28px rgba(200,140,40,0.14);
}

.project-card__title {
  display: block;
  font-size: 14.5px;
  font-weight: 700;
  color: #111;
  margin: 0 0 7px;
  line-height: 1.4;
}
.project-card__summary {
  font-size: 13px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 10px;
}
.project-card__meta {
  margin: 0 0 12px;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #7a879a;
}
.project-card a.proj-link {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  font-size: 12px;
  color: #2a52a0;
  text-decoration: none;
  font-weight: 600;
}
.project-card a.proj-link:hover { text-decoration: underline; }
.project-card__artifacts {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0 0 12px;
}
.project-card__artifact {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 999px;
  background: #f3f6fb;
  color: #64748b;
  font-size: 11px;
  font-weight: 600;
}
</style>

<!-- ── RESEARCH STRANDS ── -->
<p class="rn-heading">Research Strands</p>
<p class="rn-intro">My research agenda is organized around four connected strands: AI-mediated self-directed learning, learner heterogeneity and equity, authenticity and assessment, and the design principles that translate these findings into practice.</p>
<div class="rn-grid">

  <div class="rn-card rn-card--1">
    <div class="rn-card__top">
      <span class="rn-card__meta">Agency &amp; SDL</span>
      <span class="rn-card__num">01</span>
    </div>
    <h3>AI-Mediated Self-Directed Learning</h3>
    <p>I study how learners plan, prompt, verify, and make meaning with AI in self-directed learning environments. This strand brings together conceptual, measurement, and empirical work on how agency is distributed across personal attributes, learning processes, and contexts when AI becomes part of the workflow.</p>
    <div class="rn-pills">
      <a class="rn-pill" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" rel="noopener">PA-SDA Scale · System '25</a>
      <a class="rn-pill" href="https://doi.org/10.1109/TLT.2024.3386098" target="_blank" rel="noopener">SDL × GenAI Era · TLT '24</a>
      <a class="rn-pill" href="https://doi.org/10.1007/s11528-024-00960-3" target="_blank" rel="noopener">SDL with GenAI · TechTrends '24</a>
    </div>
  </div>

  <div class="rn-card rn-card--2">
    <div class="rn-card__top">
      <span class="rn-card__meta">Equity &amp; Heterogeneity</span>
      <span class="rn-card__num">02</span>
    </div>
    <h3>Learner Heterogeneity &amp; Equity</h3>
    <p>I examine how AI-mediated learning varies across multilingual, global, and nontraditional learners rather than assuming one uniform experience. These studies trace where language background, prior preparation, and institutional context shape who benefits from AI support, how, and at what cost.</p>
    <div class="rn-pills">
      <a class="rn-pill" href="https://doi.org/10.1111/bjet.13588" target="_blank" rel="noopener">NonTrad × ChatGPT · BJET '25</a>
      <a class="rn-pill" href="https://doi.org/10.3390/languages8040238" target="_blank" rel="noopener">Low-Income &amp; ChatGPT · Lang. '23</a>
      <a class="rn-pill" href="/projects/global-learners-genai/">Global Learners Study →</a>
    </div>
  </div>

  <div class="rn-card rn-card--3">
    <div class="rn-card__top">
      <span class="rn-card__meta">Authenticity &amp; Assessment</span>
      <span class="rn-card__num">03</span>
    </div>
    <h3>Authenticity, Assessment &amp; Judgment</h3>
    <p>I investigate how AI changes what counts as authentic work, authorship, and good evaluative judgment in educational settings. This strand connects instructor-facing questions about assessment and writing with learner-side questions about ownership, reflection, and responsible AI-supported performance.</p>
    <div class="rn-pills">
      <a class="rn-pill" href="/projects/authenticity-assessment/">Authenticity Project Case →</a>
      <span class="rn-pill">Q-Method Authenticity · BJET</span>
      <span class="rn-pill">AI Writing Assessment · JCHE</span>
      <span class="rn-pill">Authenticity in Service Learning · E&amp;T</span>
    </div>
  </div>

  <div class="rn-card rn-card--4">
    <div class="rn-card__top">
      <span class="rn-card__meta">Literacy &amp; Design</span>
      <span class="rn-card__num">04</span>
    </div>
    <h3>AI Literacy &amp; Learning Design</h3>
    <p>I translate research on agency, authenticity, and equity into AI literacy concepts, design principles, and practical learning environments. This strand moves from explanation to action: how should courses, tutoring systems, and institutional supports be designed so AI strengthens reflection and participation rather than passive dependence?</p>
    <div class="rn-pills">
      <a class="rn-pill" href="https://doi.org/10.1007/978-3-031-51447-0_260-1" target="_blank" rel="noopener">AI-Gen Literacy · Palgrave '26</a>
      <a class="rn-pill" href="https://doi.org/10.1016/j.caeai.2025.100445" target="_blank" rel="noopener">2yr GenAI Review · CAEAI '25</a>
      <a class="rn-pill" href="/projects/petechat/">PeteChat Design Case →</a>
    </div>
  </div>

</div>

<!-- ── PROJECTS & COLLABORATIONS ── -->
<section class="projects-section">
<p class="projects-heading">Projects &amp; Collaborations</p>
<div class="project-list">

  <article class="project-card">
    <a class="project-card__media" href="/projects/cps-ai-environments/">
      <img src="/assets/images/publications/cps-intel_1.jpg" alt="Collaborative Problem Solving project visual" />
    </a>
    <div class="project-card__body">
      <span class="project-card__tag tag--collab">Industry Collaboration · Intel Labs</span>
      <p class="project-card__meta">Controlled study · interaction traces · learning outcomes</p>
      <span class="project-card__title">Collaborative Problem Solving in AI-Mediated Environments</span>
      <p class="project-card__summary">A research collaboration examining how conversational AI reshapes peer coordination, feedback, and performance in collaborative problem-solving settings.</p>
      <div class="project-card__artifacts">
        <span class="project-card__artifact">Photo evidence</span>
        <span class="project-card__artifact">Study design</span>
        <span class="project-card__artifact">Publication</span>
      </div>
      <a class="proj-link" href="/projects/cps-ai-environments/">Open project details →</a>
    </div>
  </article>

  <article class="project-card">
    <a class="project-card__media" href="/projects/ticapp/">
      <img src="/assets/images/publications/ticapp.gif" alt="TicApp mobile learning app preview" />
    </a>
    <div class="project-card__body">
      <span class="project-card__tag tag--dbr">Design-Based Research</span>
      <p class="project-card__meta">Mobile app · empathy-driven UX · field-tested iteration</p>
      <span class="project-card__title">TicApp - Mobile Learning App for Diverse Learners</span>
      <p class="project-card__summary">A full-cycle design-based research project translating Chinese character learning theory into a live mobile app with strong visual, methodological, and implementation artifacts.</p>
      <div class="project-card__artifacts">
        <span class="project-card__artifact">App visuals</span>
        <span class="project-card__artifact">DBR diagram</span>
        <span class="project-card__artifact">Case details</span>
      </div>
      <a class="proj-link" href="/projects/ticapp/">Open project details →</a>
    </div>
  </article>

  <article class="project-card">
    <a class="project-card__media" href="/projects/petechat/">
      <img src="/assets/images/projects-petechat-interface-v2.png" alt="PeteChat tutoring assistant interface" />
    </a>
    <div class="project-card__body">
      <span class="project-card__tag tag--design">AI System Design</span>
      <p class="project-card__meta">Guardrailed tutor · DBR cycles · higher education</p>
      <span class="project-card__title">PeteChat - Guardrailed AI Tutoring Assistant</span>
      <p class="project-card__summary">An LLM-powered tutoring system designed around a tutor-not-solver philosophy to preserve student judgment, ownership, and meaningful help-seeking.</p>
      <div class="project-card__artifacts">
        <span class="project-card__artifact">Interface</span>
        <span class="project-card__artifact">Dialogue flow</span>
        <span class="project-card__artifact">Timeline</span>
      </div>
      <a class="proj-link" href="/projects/petechat/">Open project details →</a>
    </div>
  </article>

  <article class="project-card">
    <a class="project-card__media" href="/projects/authenticity-assessment/" style="background: linear-gradient(145deg, #fff7f8 0%, #fff 42%, #fff7ea 100%);">
      <div style="height:100%;display:flex;flex-direction:column;justify-content:center;padding:20px 22px;">
        <span style="display:inline-flex;align-items:center;width:max-content;padding:5px 10px;border-radius:999px;background:#fbecef;color:#9a3658;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Authenticity line</span>
        <strong style="display:block;margin:14px 0 8px;font-family:Lora,serif;font-size:23px;line-height:1.2;color:#2c2030;">From student-AI writing to assessment judgment</strong>
        <span style="display:block;font-size:12.5px;line-height:1.65;color:#6b5563;">A higher education research line on authorship, ownership, and what institutions should evaluate when AI enters student work.</span>
      </div>
    </a>
    <div class="project-card__body">
      <span class="project-card__tag tag--assessment">Authenticity &amp; Assessment</span>
      <p class="project-card__meta">Instructor perspectives · writing assessment · higher education</p>
      <span class="project-card__title">Authenticity &amp; Assessment in the Age of GenAI</span>
      <p class="project-card__summary">A project cluster connecting instructor perspectives on student-AI collaborative writing, writing assessment design, and the broader question of how authentic work should be judged when AI participates in the process.</p>
      <div class="project-card__artifacts">
        <span class="project-card__artifact">Q-method study</span>
        <span class="project-card__artifact">Assessment criteria</span>
        <span class="project-card__artifact">Design framing</span>
      </div>
      <a class="proj-link" href="/projects/authenticity-assessment/">Open project details →</a>
    </div>
  </article>

  <article class="project-card project-card--diss">
    <a class="project-card__media" href="/projects/global-learners-genai/">
      <img src="/assets/images/Research%20Trajectory%20Mind-Map%20-%20Simply%20Remove%20Blank%20Box.png" alt="Global learners and GenAI dissertation visual map" />
    </a>
    <div class="project-card__body">
      <span class="project-card__tag tag--diss">Dissertation in Progress</span>
      <p class="project-card__meta">Longitudinal mixed methods · global learners · agency &amp; equity</p>
      <span class="project-card__title">Global Learners &amp; GenAI: A Longitudinal Mixed-Methods Study</span>
      <p class="project-card__summary">An ongoing dissertation examining how global learners plan, verify, and make meaning with GenAI over time, extending the broader agenda on learner agency, heterogeneity, and equity.</p>
      <div class="project-card__artifacts">
        <span class="project-card__artifact">Trajectory map</span>
        <span class="project-card__artifact">Related artifacts</span>
        <span class="project-card__artifact">Study plan</span>
      </div>
      <a class="proj-link" href="/projects/global-learners-genai/">Open project details →</a>
    </div>
  </article>

</div>
</section>
