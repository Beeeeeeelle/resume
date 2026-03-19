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

/* ── Strand card — unified dark + top accent glow ── */
.rn-card {
  position: relative;
  border-radius: 16px;
  padding: 30px 28px 24px;
  overflow: hidden;
  background: #151c2c;
  border: 1px solid rgba(255,255,255,0.07);
  box-shadow: 0 4px 24px rgba(0,0,0,0.28);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.rn-card:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.40);
  transform: translateY(-3px);
}

/* Subtle top-edge accent glow per strand */
.rn-card--1 {
  background:
    radial-gradient(ellipse at 50% -20%, rgba(99,149,255,0.30) 0%, transparent 58%),
    #151c2c;
}
.rn-card--2 {
  background:
    radial-gradient(ellipse at 50% -20%, rgba(236,110,148,0.28) 0%, transparent 58%),
    #151c2c;
}
.rn-card--3 {
  background:
    radial-gradient(ellipse at 50% -20%, rgba(72,192,158,0.26) 0%, transparent 58%),
    #151c2c;
}
.rn-card--4 {
  background:
    radial-gradient(ellipse at 50% -20%, rgba(255,185,80,0.26) 0%, transparent 58%),
    #151c2c;
}

/* Circle accent — per-strand accent color */
.rn-card__circle {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lora, serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
}
.rn-card--1 .rn-card__circle { color: rgba(99,149,255,0.90); border-color: rgba(99,149,255,0.30); }
.rn-card--2 .rn-card__circle { color: rgba(236,110,148,0.90); border-color: rgba(236,110,148,0.30); }
.rn-card--3 .rn-card__circle { color: rgba(72,192,158,0.90); border-color: rgba(72,192,158,0.30); }
.rn-card--4 .rn-card__circle { color: rgba(255,185,80,0.90);  border-color: rgba(255,185,80,0.30); }

/* Large serif title — white */
.rn-card h3 {
  font-family: Lora, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 12px;
  padding-right: 60px;
  color: #ffffff;
}

/* Override per-strand colors (all white on dark bg) */
.rn-card--1 h3, .rn-card--2 h3,
.rn-card--3 h3, .rn-card--4 h3 { color: #ffffff; }

.rn-card p {
  font-size: 13.5px;
  line-height: 1.68;
  color: rgba(255,255,255,0.68);
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
  transition: background 0.18s, transform 0.18s;
  background: rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.88);
  border: 1px solid rgba(255,255,255,0.18);
}
.rn-pill:hover {
  background: rgba(255,255,255,0.22);
  transform: translateY(-1px);
}
/* Per-strand pill accent tints */
.rn-card--1 .rn-pill { background: rgba(99,149,255,0.12);  border-color: rgba(99,149,255,0.25);  color: rgba(160,192,255,0.95); }
.rn-card--2 .rn-pill { background: rgba(236,110,148,0.12); border-color: rgba(236,110,148,0.25); color: rgba(255,170,195,0.95); }
.rn-card--3 .rn-pill { background: rgba(72,192,158,0.12);  border-color: rgba(72,192,158,0.25);  color: rgba(140,225,200,0.95); }
.rn-card--4 .rn-pill { background: rgba(255,185,80,0.12);  border-color: rgba(255,185,80,0.25);  color: rgba(255,210,130,0.95); }
.rn-card--1 .rn-pill:hover { background: rgba(99,149,255,0.22); }
.rn-card--2 .rn-pill:hover { background: rgba(236,110,148,0.22); }
.rn-card--3 .rn-pill:hover { background: rgba(72,192,158,0.22); }
.rn-card--4 .rn-pill:hover { background: rgba(255,185,80,0.22); }

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
  border: 1px solid #e8eaf0;
  transition: box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}
.project-card:hover {
  box-shadow: 0 3px 14px rgba(0,0,0,0.07);
}
.project-card[open] {
  background: #fff;
  border-color: #d7deea;
  box-shadow: 0 8px 24px rgba(17,24,39,0.08);
}
.project-card summary {
  list-style: none;
  cursor: pointer;
}
.project-card summary::-webkit-details-marker {
  display: none;
}
.project-card__summary {
  position: relative;
  padding: 18px 48px 14px 18px;
}
.project-card__summary::after {
  content: "+";
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #d9deea;
  color: #50627f;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
}
.project-card[open] .project-card__summary::after {
  content: "-";
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
.project-card__title {
  display: block;
  font-size: 14.5px;
  font-weight: 700;
  color: #111;
  line-height: 1.4;
  margin-bottom: 7px;
}
.project-card__teaser {
  display: block;
  font-size: 13px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
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
.project-card__hint {
  display: inline-block;
  margin-top: 2px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #7a879a;
}
.project-details {
  padding: 0 18px 18px;
  border-top: 1px solid #e8eaf0;
}
.project-details__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 14px;
}
@media (max-width: 640px) {
  .project-details__grid {
    grid-template-columns: 1fr;
  }
}
.project-details__item {
  background: #f7f9fc;
  border-radius: 8px;
  padding: 12px;
}
.project-details__label {
  display: block;
  margin-bottom: 6px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7a879a;
}
.project-details__item p {
  margin: 0;
  font-size: 12.5px;
  line-height: 1.65;
  color: #4e5968;
}
.project-details__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  align-items: center;
  margin-top: 14px;
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

  <details class="project-card">
    <summary class="project-card__summary">
      <span class="project-card__tag tag--collab">Industry Collaboration · Intel Labs</span>
      <span class="project-card__title">Collaborative Problem Solving in AI-Mediated Environments</span>
      <span class="project-card__teaser">Partnered with Intel Labs to investigate how learners engage in collaborative problem-solving when working alongside conversational AI. The study examines instructional design decisions, interaction patterns, and learning outcomes in controlled AI-mediated settings.</span>
      <span class="project-card__hint">Click to expand</span>
    </summary>
    <div class="project-details">
      <div class="project-details__grid">
        <div class="project-details__item">
          <span class="project-details__label">Research Focus</span>
          <p>How conversational AI changes the way learners coordinate ideas, distribute roles, and negotiate solutions during joint problem-solving tasks.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Study Design</span>
          <p>Industry-academic collaboration combining controlled learning tasks, interaction trace analysis, and outcome comparisons across AI-mediated group conditions.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Contribution</span>
          <p>Identifies design moves that support productive collaboration with AI instead of letting the system dominate peer interaction.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Current Output</span>
          <p>Peer-reviewed publication in Computers and Education: Artificial Intelligence documenting the collaboration framework and observed learner behaviors.</p>
        </div>
      </div>
      <div class="project-details__footer">
        <a class="proj-link" href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" rel="noopener">View publication →</a>
        <span class="proj-status">Industry collaboration with Intel Labs</span>
      </div>
    </div>
  </details>

  <details class="project-card">
    <summary class="project-card__summary">
      <span class="project-card__tag tag--dbr">Design-Based Research</span>
      <span class="project-card__title">TicApp - Mobile Learning App for Diverse Learners</span>
      <span class="project-card__teaser">A full-cycle design-based research project producing TicApp, a mobile application built with empathy-driven UX for underrepresented learner populations. Applies cognitive load principles and identity-aware design across iterative prototyping and classroom evaluation cycles.</span>
      <span class="project-card__hint">Click to expand</span>
    </summary>
    <div class="project-details">
      <div class="project-details__grid">
        <div class="project-details__item">
          <span class="project-details__label">Design Goal</span>
          <p>Create a mobile learning experience that reduces friction for learners who are often underserved by mainstream educational interfaces.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Methods</span>
          <p>Iterative prototyping, learner feedback cycles, classroom implementation, and design revision grounded in design-based research methodology.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Design Principles</span>
          <p>Uses empathy-driven UX, cognitive load management, and identity-conscious interface decisions to support sustained use and accessibility.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Outcome</span>
          <p>Resulted in a documented design case that connects app features, learner needs, and implementation decisions across multiple development cycles.</p>
        </div>
      </div>
      <div class="project-details__footer">
        <a class="proj-link" href="https://doi.org/10.1007/978-3-031-76293-2_12" target="_blank" rel="noopener">View Springer design case →</a>
        <span class="proj-status">Completed DBR cycle</span>
      </div>
    </div>
  </details>

  <details class="project-card">
    <summary class="project-card__summary">
      <span class="project-card__tag tag--design">AI System Design</span>
      <span class="project-card__title">PeteChat - Guardrailed AI Tutoring Assistant</span>
      <span class="project-card__teaser">A design-based research project developing PeteChat, an LLM-powered AI tutor built around a "Tutor, Not Solver" philosophy. The system uses guardrails and iterative classroom refinement to promote higher-order thinking while safeguarding academic integrity and data privacy.</span>
      <span class="project-card__hint">Click to expand</span>
    </summary>
    <div class="project-details">
      <div class="project-details__grid">
        <div class="project-details__item">
          <span class="project-details__label">System Philosophy</span>
          <p>PeteChat is designed to scaffold reasoning and reflection rather than provide direct answers, preserving the learner's role in the problem-solving process.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Guardrails</span>
          <p>Prompt and interaction constraints are used to discourage answer-giving, support academic integrity, and keep learner data handling within classroom-safe boundaries.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Implementation Cycle</span>
          <p>Developed through iterative classroom pilots, instructor feedback, and refinements to align system behavior with real pedagogical needs.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Status</span>
          <p>Design case and formal write-up are in preparation, with 2025 focused on documenting the tutoring logic, classroom deployment, and learner response patterns.</p>
        </div>
      </div>
      <div class="project-details__footer">
        <span class="proj-status">Design case in preparation · 2025</span>
      </div>
    </div>
  </details>

  <details class="project-card">
    <summary class="project-card__summary">
      <span class="project-card__tag tag--diss">Dissertation · In Progress</span>
      <span class="project-card__title">Global Learners &amp; GenAI: A Longitudinal Mixed-Methods Study</span>
      <span class="project-card__teaser">My dissertation tracks how learners from diverse national and socioeconomic backgrounds engage with generative AI over time - integrating survey, interview, interaction log, and performance data to understand how AI-mediated learning evolves and diverges across populations.</span>
      <span class="project-card__hint">Click to expand</span>
    </summary>
    <div class="project-details">
      <div class="project-details__grid">
        <div class="project-details__item">
          <span class="project-details__label">Core Question</span>
          <p>How learners from different linguistic, cultural, and socioeconomic backgrounds adopt generative AI over time, and where those trajectories meaningfully diverge.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Data Sources</span>
          <p>Combines surveys, interviews, interaction traces, and learning performance data to capture both measurable change and lived learner experience.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Analytical Value</span>
          <p>Designed to connect short-term tool use with longer-term patterns of motivation, self-direction, and educational opportunity across global learner populations.</p>
        </div>
        <div class="project-details__item">
          <span class="project-details__label">Timeline</span>
          <p>Expected completion in 2026 under the advising support of Lowell and Exter, with dissertation chapters centered on equity, process, and learner adaptation.</p>
        </div>
      </div>
      <div class="project-details__footer">
        <span class="proj-status">Expected completion: 2026 · Advisors: Lowell &amp; Exter</span>
      </div>
    </div>
  </details>

</div>
</section>
