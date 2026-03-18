---
title: "Research"
layout: single
permalink: /research/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/ChatGPT-and-Generative-AI-as-a-New-Partner-in-Language-Teaching-and-Learning—2.png
  excerpt: "My research examines how generative AI reshapes learning — from the design of AI systems to the cognitive and motivational processes they activate in learners, and the outcomes they produce across diverse populations."
---

<style>
/* ── Research Strands heading ── */
.rn-heading {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #aaa;
  margin: 52px 0 20px;
}

/* ── 2×2 strand grid ── */
.rn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 640px) {
  .rn-grid { grid-template-columns: 1fr; }
}

/* ── Strand card — new style ── */
.rn-card {
  position: relative;
  border-radius: 18px;
  padding: 28px 28px 22px;
  overflow: hidden;
  transition: box-shadow 0.22s ease, transform 0.22s ease;
}
.rn-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  transform: translateY(-3px);
}

/* Per-strand tinted backgrounds */
.rn-card--1 { background: #eaeff9; }
.rn-card--2 { background: #faecf2; }
.rn-card--3 { background: #e8f4ee; }
.rn-card--4 { background: #f8f0e4; }

/* Circle accent — top-right decorative number */
.rn-card__circle {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lora, serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
}
.rn-card--1 .rn-card__circle { background: rgba(61,108,181,0.14); color: #3d6cb5; }
.rn-card--2 .rn-card__circle { background: rgba(176,68,104,0.14); color: #b04468; }
.rn-card--3 .rn-card__circle { background: rgba(46,122,90,0.14);  color: #2e7a5a; }
.rn-card--4 .rn-card__circle { background: rgba(138,96,32,0.14);  color: #8a6020; }

/* Large serif title */
.rn-card h3 {
  font-family: Lora, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 12px;
  padding-right: 60px; /* clear the circle */
}
.rn-card--1 h3 { color: #1a3262; }
.rn-card--2 h3 { color: #5c1a32; }
.rn-card--3 h3 { color: #1a4a30; }
.rn-card--4 h3 { color: #4a2c08; }

.rn-card p {
  font-size: 13.5px;
  line-height: 1.68;
  color: #555;
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
  padding: 4px 11px;
  border-radius: 20px;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.15s, transform 0.15s;
  background: rgba(255,255,255,0.72);
}
.rn-pill:hover { opacity: 0.85; transform: translateY(-1px); }

/* Pill text colors per strand */
.rn-card--1 .rn-pill { color: #2a52a0; }
.rn-card--2 .rn-pill { color: #902040; }
.rn-card--3 .rn-pill { color: #1e6040; }
.rn-card--4 .rn-pill { color: #6a4010; }

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
  background: #f9fafb;
  border-radius: 8px;
  padding: 18px 18px 14px;
  border: 1px solid #e8eaf0;
  transition: box-shadow 0.2s ease;
}
.project-card:hover {
  box-shadow: 0 3px 14px rgba(0,0,0,0.07);
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
.tag--diss   { background: #fdf3e8; color: #7a5a2a; }

.project-card h3 {
  font-size: 14.5px;
  font-weight: 700;
  color: #111;
  margin: 0 0 7px;
  line-height: 1.4;
}
.project-card p {
  font-size: 13px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 10px;
}
.project-card a.proj-link {
  font-size: 12px;
  color: #2a52a0;
  text-decoration: none;
  font-weight: 600;
}
.project-card a.proj-link:hover { text-decoration: underline; }
.project-card .proj-status {
  font-size: 11.5px;
  color: #999;
  font-style: italic;
}
</style>

<!-- ── RESEARCH STRANDS ── -->
<p class="rn-heading">Research Strands</p>
<div class="rn-grid">

  <div class="rn-card rn-card--1">
    <div class="rn-card__circle">01</div>
    <h3>Generative AI Systems</h3>
    <p>I map the landscape of AI tools in education through large-scale systematic reviews, tracking how ChatGPT and allied models have been studied from 2022 to the present. My reviews synthesize design implications, methodological gaps, and emerging pedagogical theories across more than 200 primary studies.</p>
    <div class="rn-pills">
      <a class="rn-pill" href="https://doi.org/10.1016/j.caeai.2024.100266" target="_blank" rel="noopener">ChatGPT Review · CAEAI '24</a>
      <a class="rn-pill" href="https://doi.org/10.1016/j.caeai.2025.100445" target="_blank" rel="noopener">2yr GenAI Review · CAEAI '25</a>
      <a class="rn-pill" href="https://doi.org/10.1080/17501229.2025.2598587" target="_blank" rel="noopener">GBLL Review · ILLT '25</a>
    </div>
  </div>

  <div class="rn-card rn-card--2">
    <div class="rn-card__circle">02</div>
    <h3>Learner–AI Interaction</h3>
    <p>I examine how learners actively engage with, adapt to, and make meaning from generative AI tools — through netnography of YouTube educators, collaborative problem-solving studies, and longitudinal interaction data. I pay particular attention to how social and motivational dynamics shift when an AI becomes a learning partner.</p>
    <div class="rn-pills">
      <a class="rn-pill" href="https://doi.org/10.1080/17501229.2025.2505700" target="_blank" rel="noopener">EduTubers · ILLT '25</a>
      <a class="rn-pill" href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" rel="noopener">CPS in AI Env · CAEAI '25</a>
      <a class="rn-pill" href="https://doi.org/10.1007/s11528-024-00960-3" target="_blank" rel="noopener">SDL with GenAI · TechTrends '24</a>
    </div>
  </div>

  <div class="rn-card rn-card--3">
    <div class="rn-card__circle">03</div>
    <h3>Learning Processes</h3>
    <p>My instrument development work operationalizes the cognitive and affective processes underlying AI-integrated self-directed learning. I developed and validated the PA-SDA scale — measuring personal attributes that predict effective SDL with AI — and proposed a reconceptualized SDL framework for the GenAI era.</p>
    <div class="rn-pills">
      <a class="rn-pill" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" rel="noopener">PA-SDA Scale · System '25</a>
      <a class="rn-pill" href="https://doi.org/10.1109/TLT.2024.3386098" target="_blank" rel="noopener">SDL × GenAI Era · TLT '24</a>
      <a class="rn-pill" href="https://doi.org/10.1007/978-3-031-51447-0_260-1" target="_blank" rel="noopener">AI-Gen Literacy · Palgrave '26</a>
    </div>
  </div>

  <div class="rn-card rn-card--4">
    <div class="rn-card__circle">04</div>
    <h3>Outcomes &amp; Equity</h3>
    <p>I investigate whether AI tools produce equitable learning outcomes — and for whom. Studies in this strand track academic writing gains for learners from low-income backgrounds, examine performance and self-efficacy for nontraditional college students, and evaluate culturally-responsive professional development designs.</p>
    <div class="rn-pills">
      <a class="rn-pill" href="https://doi.org/10.1111/bjet.13588" target="_blank" rel="noopener">NonTrad × ChatGPT · BJET '25</a>
      <a class="rn-pill" href="https://doi.org/10.3390/languages8040238" target="_blank" rel="noopener">Low-Income & ChatGPT · Lang. '23</a>
      <a class="rn-pill" href="https://doi.org/10.24059/olj.v27i4.4003" target="_blank" rel="noopener">Teacher PD · OLJ '23</a>
    </div>
  </div>

</div>

<!-- ── PROJECTS & COLLABORATIONS ── -->
<section class="projects-section">
<p class="projects-heading">Projects &amp; Collaborations</p>
<div class="project-list">

  <div class="project-card">
    <span class="project-card__tag tag--collab">Industry Collaboration · Intel Labs</span>
    <h3>Collaborative Problem Solving in AI-Mediated Environments</h3>
    <p>Partnered with Intel Labs to investigate how learners engage in collaborative problem-solving when working alongside conversational AI. The study examines instructional design decisions, interaction patterns, and learning outcomes in controlled AI-mediated settings.</p>
    <a class="proj-link" href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" rel="noopener">View publication →</a>
  </div>

  <div class="project-card">
    <span class="project-card__tag tag--dbr">Design-Based Research</span>
    <h3>TicApp — Mobile Learning App for Diverse Learners</h3>
    <p>A full-cycle design-based research project producing TicApp, a mobile application built with empathy-driven UX for underrepresented learner populations. Applies cognitive load principles and identity-aware design across iterative prototyping and classroom evaluation cycles.</p>
    <a class="proj-link" href="https://doi.org/10.1007/978-3-031-76293-2_12" target="_blank" rel="noopener">View Springer design case →</a>
  </div>

  <div class="project-card">
    <span class="project-card__tag tag--design">AI System Design</span>
    <h3>PeteChat — Guardrailed AI Tutoring Assistant</h3>
    <p>A design-based research project developing PeteChat, an LLM-powered AI tutor built around a "Tutor, Not Solver" philosophy. The system uses guardrails and iterative classroom refinement to promote higher-order thinking while safeguarding academic integrity and data privacy.</p>
    <span class="proj-status">Design case in preparation · 2025</span>
  </div>

  <div class="project-card">
    <span class="project-card__tag tag--diss">Dissertation · In Progress</span>
    <h3>Global Learners &amp; GenAI: A Longitudinal Mixed-Methods Study</h3>
    <p>My dissertation tracks how learners from diverse national and socioeconomic backgrounds engage with generative AI over time — integrating survey, interview, interaction log, and performance data to understand how AI-mediated learning evolves and diverges across populations.</p>
    <span class="proj-status">Expected completion: 2026 · Advisors: Lowell &amp; Exter</span>
  </div>

</div>
</section>
