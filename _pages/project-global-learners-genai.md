---
title: "Profiling Self-Directed Learning with Generative AI"
permalink: /projects/global-learners-genai/
layout: single
classes: wide
author_profile: false
---

{% include project-case-styles.html %}

<style>
/* ── Research line ── */
.rl-wrap {
  margin: 32px 0 40px;
}
.rl-group-label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #aaa;
  margin-bottom: 8px;
}
.rl-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.rl-step {
  font-size: 12px;
  font-weight: 600;
  color: #999;
  background: #f4f4f4;
  border-radius: 5px;
  padding: 5px 11px;
  white-space: nowrap;
}
.rl-step--active {
  color: #c0622a;
  background: #fff3ee;
  border: 1px solid rgba(192,98,42,0.18);
}
.rl-arrow {
  color: #ccc;
  font-size: 12px;
  flex-shrink: 0;
}
.rl-connector {
  width: 2px;
  height: 14px;
  background: #e0e0e0;
  margin-left: 20px;
}

/* ── Section label ── */
.diss-section-label {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #c0622a;
  margin: 52px 0 14px;
  padding-bottom: 7px;
  border-bottom: 2px solid #f0e8e3;
}

/* ── Figures ── */
.diss-fig {
  margin: 20px 0 28px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  background: #fff;
}
.diss-fig img {
  width: 100%;
  display: block;
}
.diss-fig figcaption {
  font-size: 12px;
  color: #888;
  padding: 9px 14px;
  background: #fafafa;
  border-top: 1px solid #eee;
  line-height: 1.5;
}
.diss-fig-half {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 20px 0 28px;
}
@media (max-width: 640px) {
  .diss-fig-half { grid-template-columns: 1fr; }
}
.diss-fig-half .diss-fig { margin: 0; }

/* ── Takeaway ── */
.diss-takeaway {
  background: linear-gradient(135deg, #fff8f5, #fff);
  border: 1px solid rgba(192,98,42,0.15);
  border-left: 4px solid #c0622a;
  border-radius: 0 8px 8px 0;
  padding: 16px 20px;
  margin: 24px 0 36px;
}
.diss-takeaway__label {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #c0622a;
  margin-bottom: 6px;
}
.diss-takeaway__text {
  font-size: 14px;
  color: #222;
  line-height: 1.65;
  margin: 0;
}
</style>

<div class="project-case">
  <p class="project-case__back"><a href="/research/">&larr; Back to Research</a></p>
  <p class="project-case__eyebrow">Dissertation · In Progress</p>
  <p class="project-case__lede">A cross-sectional latent profile analysis with exploratory longitudinal validation examining how global language learners differ in their AI-mediated self-directed learning and how those patterns evolve over time.</p>

  <div class="project-case__chips">
    <span class="project-case__chip">Latent profile analysis</span>
    <span class="project-case__chip">Person-centered analytics</span>
    <span class="project-case__chip">Longitudinal mixed methods</span>
    <span class="project-case__chip">N = 693</span>
  </div>

  <div class="rl-wrap">
    <p class="rl-group-label">Foundation</p>
    <div class="rl-row">
      <span class="rl-step">YouTube studies</span>
      <span class="rl-arrow">→</span>
      <span class="rl-step">Interview studies</span>
      <span class="rl-arrow">→</span>
      <span class="rl-step">Systematic reviews</span>
      <span class="rl-arrow">→</span>
      <span class="rl-step">AI-SDL Framework</span>
      <span class="rl-arrow">→</span>
      <span class="rl-step">PA-SDA Scale</span>
    </div>
    <div class="rl-connector"></div>
    <p class="rl-group-label">Dissertation</p>
    <div class="rl-row">
      <span class="rl-step rl-step--active">Core Study 1 — Learner Profiling & Longitudinal Tracking</span>
      <span class="rl-arrow">→</span>
      <span class="rl-step rl-step--active">Core Study 2 — Learning in the Loop</span>
    </div>
  </div>

  <div class="project-case__stats">
    <div class="project-case__stat">
      <span class="project-case__stat-value">693</span>
      <span class="project-case__stat-label">Wave 1 participants (global, multilingual)</span>
    </div>
    <div class="project-case__stat">
      <span class="project-case__stat-value">29</span>
      <span class="project-case__stat-label">Wave 2 follow-up with qualitative interviews</span>
    </div>
    <div class="project-case__stat">
      <span class="project-case__stat-value">3</span>
      <span class="project-case__stat-label">latent profiles identified at baseline</span>
    </div>
    <div class="project-case__stat">
      <span class="project-case__stat-value">4</span>
      <span class="project-case__stat-label">transition mechanisms from qualitative integration</span>
    </div>
  </div>

  <p class="diss-section-label">Theoretical Foundation — AI-SDL Framework</p>

  <p>Built on Song and Hill's (2007) SDL model, the AI-Integrated Self-Directed Learning Framework (Li et al., 2024) recast learner attributes as five AI-contextualized dimensions — self-efficacy, attitude, motivation, strategy use, and resource use — and recast the learning process as autonomous-adaptive rather than linear. The framework operates across local and global levels, situating learner–AI interaction within sociocultural, institutional, and design contexts.</p>

  <div class="diss-fig-half">
    <figure class="diss-fig">
      <img src="/assets/images/dissertation/framework-global-local.png" alt="AI-SDL Framework: global and local levels" />
      <figcaption>Global and local level structure of the AI-SDL Framework.</figcaption>
    </figure>
    <figure class="diss-fig">
      <img src="/assets/images/dissertation/framework-process.png" alt="Autonomous-adaptive process cycle" />
      <figcaption>The autonomous-adaptive process: planning, monitoring, adapting, evaluating.</figcaption>
    </figure>
  </div>

  <p class="diss-section-label">Core Study 1 — Learner Profiling & Longitudinal Tracking</p>

  <figure class="diss-fig">
    <img src="/assets/images/dissertation/study-design.png" alt="Research design: Wave 1 cross-sectional LPA, Wave 2 fixed-reference follow-up, mixed-methods integration" />
    <figcaption>Study design: Wave 1 cross-sectional LPA (N = 693, late 2024) → Wave 2 fixed-reference longitudinal validation (n = 29, mid-2025) → convergent mixed-methods integration.</figcaption>
  </figure>

  <figure class="diss-fig">
    <img src="/assets/images/dissertation/sample-flow.png" alt="Sample flow from 973 starts to three profiles and Wave 2 follow-up cohort" />
    <figcaption>Sample flow: 973 starts → 693 complete cases retained → three profiles (Lower-standing 4.78%, Mid-range 71.43%, Higher-standing 22.81%) → 29 Wave 2 follow-up participants.</figcaption>
  </figure>

  <figure class="diss-fig">
    <img src="/assets/images/dissertation/profile-comparison.png" alt="Profile comparison across five PA-SDA dimensions: Wave 1 and Wave 2 mean scores" />
    <figcaption>Mean PA-SDA scores across five dimensions by profile, comparing Wave 1 baseline (solid lines) to Wave 2 follow-up (dashed lines) under the fixed reference model.</figcaption>
  </figure>

  <figure class="diss-fig">
    <img src="/assets/images/dissertation/transitions.png" alt="Fixed-reference transitions across profiles from Wave 1 to Wave 2" />
    <figcaption>Fixed-reference transition diagram. Four pathways observed: stable mid-range (48.3%), higher-to-mid recalibration (20.7%), mid-to-higher growth (13.8%), stable higher (17.2%). Zero movement into or out of the lower-standing profile.</figcaption>
  </figure>

  <div class="diss-takeaway">
    <p class="diss-takeaway__label">Core Study 1 Finding</p>
    <p class="diss-takeaway__text">AI-mediated self-directed learning is heterogeneous at baseline and largely stable over time. Apparent decline often reflects strategic recalibration — not regression. The GenAI learner landscape is dominated by a mid-range majority capable yet not yet fully strategically integrated.</p>
  </div>

  <figure class="diss-fig">
    <img src="/assets/images/dissertation/mechanisms-table.png" alt="Four transition mechanisms: bounded augmentation, iterative refinement, depth-first recalibration, strategic partnership" />
    <figcaption>Four qualitative mechanisms explain the human logic behind profile transitions, with quantitative signals and exemplar voices from interview data.</figcaption>
  </figure>

  <figure class="diss-fig">
    <img src="/assets/images/dissertation/pca-movement.png" alt="PCA space showing observed movement across four transition pathways" />
    <figcaption>Observed movement through the fixed-reference personal-attribute space. Panels share the same PCA coordinate system, showing only the four observed transition pathways.</figcaption>
  </figure>

  <p class="diss-section-label">Core Study 2 — Learning in the Loop</p>

  <div class="project-case__detail-grid">
    <div class="project-case__panel">
      <span class="project-case__panel-label">Design</span>
      <p>A phenomenologically informed qualitative study with the same Wave 2 cohort (n = 29). Semi-structured interviews captured learning moments, meaning-making, and boundary-setting as they occurred in lived AI-mediated self-directed learning practice.</p>
    </div>
    <div class="project-case__panel">
      <span class="project-case__panel-label">Key Finding</span>
      <p>AI entered the execution of self-directed learning through an iterative loop of prompting, evaluating, verifying, and adapting. Agency showed up through verification routines, attempt-first rules, and selective trust — not through frequency of use.</p>
    </div>
  </div>

  <div class="project-case__detail-grid">
    <div class="project-case__panel">
      <span class="project-case__panel-label">Learning Moment Types</span>
      <p>Conceptual moments (AI surfaced new frameworks), expressive moments (AI offered linguistic alternatives), reflective moments (AI prompted metacognitive awareness), and generative moments (AI co-produced new ideas). Moment types mapped onto learners' existing strategic profiles.</p>
    </div>
    <div class="project-case__panel">
      <span class="project-case__panel-label">Constraint Layer</span>
      <p>Policy ambiguity, cost, ethical concerns, and authentic voice shaped what learners were willing to do with AI — functioning as a global-level layer that bounded local learner–AI interaction regardless of individual attributes.</p>
    </div>
  </div>

  <div class="diss-takeaway">
    <p class="diss-takeaway__label">Core Study 2 Finding</p>
    <p class="diss-takeaway__text">AI in self-directed learning behaved less like a passive tool and more like a co-regulatory partner — entering the execution of learning rather than merely surrounding it. What mattered most was not how often learners used AI, but whether they retained interpretive authority over its outputs.</p>
  </div>

  <section class="project-case__section">
    <h2>Related Evidence Base</h2>
    <p>This dissertation builds on a connected line of published work spanning early empirical studies, framework development, and scale validation.</p>
    <div class="project-case__links">
      <a class="project-case__link" href="https://doi.org/10.1109/TLT.2024.3386098" target="_blank" rel="noopener">Reconceptualizing SDL × GenAI</a>
      <a class="project-case__link" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" rel="noopener">PA-SDA Scale (System)</a>
      <a class="project-case__link" href="https://doi.org/10.1007/s11528-024-00960-3" target="_blank" rel="noopener">SDL with GenAI: YouTube Creators</a>
      <a class="project-case__link" href="https://doi.org/10.4018/IJCALLT.326135" target="_blank" rel="noopener">Multilingual ChatGPT Applications</a>
    </div>
  </section>
</div>
