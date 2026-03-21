---
title: "Authenticity & Assessment"
permalink: /projects/authenticity-assessment/
layout: single
classes: wide
author_profile: false
---

{% include project-case-styles.html %}

<style>
.auth-case-hero {
  padding: 1.5rem;
  background:
    radial-gradient(circle at top left, rgba(200, 134, 142, 0.18), transparent 38%),
    radial-gradient(circle at bottom right, rgba(209, 167, 96, 0.16), transparent 34%),
    linear-gradient(180deg, #fffefe 0%, #fcf8f6 100%);
}

.auth-case-hero__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

@media (max-width: 760px) {
  .auth-case-hero__grid {
    grid-template-columns: 1fr;
  }
}

.auth-case-hero__panel {
  min-height: 180px;
  border-radius: 18px;
  border: 1px solid rgba(229, 231, 235, 0.95);
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem 1rem 0.95rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.auth-case-hero__label {
  display: inline-block;
  margin: 0 0 0.7rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.auth-case-hero__label--1 { background: #fbecef; color: #9a3658; }
.auth-case-hero__label--2 { background: #edf4ff; color: #2d5ca6; }
.auth-case-hero__label--3 { background: #fdf4e7; color: #8d5e14; }

.auth-case-hero__title {
  margin: 0 0 0.55rem;
  font-family: Lora, serif;
  font-size: 1.15rem;
  line-height: 1.35;
  color: #1f2937;
}

.auth-case-hero__copy {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.7;
  color: #4b5563;
}

.auth-case-hero__bridge {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0;
  gap: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #8b6b33;
}

.auth-case-hero__bridge::before,
.auth-case-hero__bridge::after {
  content: "";
  height: 1px;
  flex: 1;
  background: linear-gradient(90deg, transparent, rgba(176, 146, 97, 0.5), transparent);
}

.auth-framework {
  padding: 1.1rem;
  border: 1px solid #ece5de;
  border-radius: 18px;
  background:
    radial-gradient(circle at top right, rgba(232, 185, 145, 0.14), transparent 30%),
    linear-gradient(180deg, #fffdfb 0%, #fff9f5 100%);
}

.auth-framework__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

@media (max-width: 760px) {
  .auth-framework__grid {
    grid-template-columns: 1fr;
  }
}

.auth-framework__card {
  padding: 1rem 1rem 0.95rem;
  border-radius: 16px;
  border: 1px solid rgba(229, 231, 235, 0.95);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.auth-framework__index {
  display: inline-block;
  margin: 0 0 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9a3658;
}

.auth-framework__title {
  margin: 0 0 0.45rem;
  font-family: Lora, serif;
  font-size: 1.08rem;
  line-height: 1.35;
  color: #1f2937;
}

.auth-framework__body {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.7;
  color: #4b5563;
}

.auth-framework__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.auth-framework__pill {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  background: #fff;
  color: #7c5a21;
  border: 1px solid rgba(196, 160, 104, 0.35);
}

.auth-framework__note {
  margin: 0.8rem 0 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: #6b7280;
}

.auth-spectrum {
  padding: 1.1rem;
  border: 1px solid #ece7dc;
  border-radius: 18px;
  background:
    radial-gradient(circle at top left, rgba(214, 229, 212, 0.25), transparent 28%),
    linear-gradient(180deg, #fffefb 0%, #fff 100%);
}

.auth-spectrum__bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border-radius: 999px;
}

.auth-spectrum__zone {
  padding: 0.82rem 0.7rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
}

.auth-spectrum__zone--accepted { background: linear-gradient(135deg, #1f5f39, #3f8d5b); }
.auth-spectrum__zone--contested { background: linear-gradient(135deg, #c5901e, #d9a83c); }
.auth-spectrum__zone--rejected { background: linear-gradient(135deg, #c65b39, #9e2626); }

.auth-spectrum__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 14px;
}

@media (max-width: 760px) {
  .auth-spectrum__cards {
    grid-template-columns: 1fr;
  }
}

.auth-spectrum__card {
  padding: 1rem 1rem 0.95rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
}

.auth-spectrum__card h3 {
  margin: 0 0 0.65rem;
  font-size: 0.95rem;
  line-height: 1.35;
}

.auth-spectrum__card ul {
  margin: 0;
  padding-left: 1.05rem;
}

.auth-spectrum__card li {
  margin: 0 0 0.45rem;
  color: #4b5563;
  line-height: 1.6;
}

.auth-spectrum__card--accepted h3 { color: #1f5f39; }
.auth-spectrum__card--contested h3 { color: #b07a0d; }
.auth-spectrum__card--rejected h3 { color: #9e2626; }

.auth-spectrum__note {
  margin: 0.95rem 0 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #6b7280;
}
</style>

<div class="project-case">
  <p class="project-case__back"><a href="/research/">&larr; Back to Research</a></p>
  <p class="project-case__eyebrow">Higher Education · Emerging Research Line</p>
  <p class="project-case__lede">Authenticity and assessment form a connected research line spanning student-AI collaborative writing, an interview-based authenticity framework, and writing assessment design. Across these studies, the central question is how instructors should judge authorship, ownership, and legitimate performance when generative AI becomes part of student work.</p>

  <div class="project-case__chips">
    <span class="project-case__chip">Instructor perspectives</span>
    <span class="project-case__chip">Integrated authenticity framework</span>
    <span class="project-case__chip">Assessment redesign</span>
  </div>

  <figure class="project-case__hero">
    <div class="auth-case-hero">
      <div class="auth-case-hero__grid">
        <div class="auth-case-hero__panel">
          <span class="auth-case-hero__label auth-case-hero__label--1">Student Work</span>
          <h2 class="auth-case-hero__title">AI changes the status of process, not only product.</h2>
          <p class="auth-case-hero__copy">Drafting, prompting, revising, and reflection all become part of what must be interpreted when students work with generative AI.</p>
        </div>
        <div class="auth-case-hero__panel">
          <span class="auth-case-hero__label auth-case-hero__label--2">Instructor Judgment</span>
          <h2 class="auth-case-hero__title">Authenticity becomes an evaluative question.</h2>
          <p class="auth-case-hero__copy">The issue is not only whether AI was used, but how instructors define ownership, legitimacy, and meaningful intellectual contribution.</p>
        </div>
        <div class="auth-case-hero__panel">
          <span class="auth-case-hero__label auth-case-hero__label--3">Assessment Design</span>
          <h2 class="auth-case-hero__title">Good response means redesign, not only detection.</h2>
          <p class="auth-case-hero__copy">This line moves toward criteria, transparency, and design principles that help institutions evaluate AI-mediated work without collapsing into vague prohibition or surveillance.</p>
        </div>
      </div>
      <div class="auth-case-hero__bridge">From authenticity concerns to assessment criteria</div>
    </div>
    <figcaption>This project line treats authenticity as a design and judgment problem: how should educational systems interpret AI-mediated work, and what kinds of assessment structures become necessary as a result?</figcaption>
  </figure>

  <div class="project-case__stats">
    <div class="project-case__stat">
      <span class="project-case__stat-value">3 connected studies</span>
      <span class="project-case__stat-label">Q-method perspectives, interview-based framework building, and writing assessment design</span>
    </div>
    <div class="project-case__stat">
      <span class="project-case__stat-value">Higher education</span>
      <span class="project-case__stat-label">primary context for student writing, instructor judgment, and institutional response</span>
    </div>
    <div class="project-case__stat">
      <span class="project-case__stat-value">3 authenticity dimensions</span>
      <span class="project-case__stat-label">investment, process integrity, and contextual integration shape how AI-mediated work is judged</span>
    </div>
    <div class="project-case__stat">
      <span class="project-case__stat-value">Beyond detection</span>
      <span class="project-case__stat-label">the line pushes toward criteria, disclosure, and task redesign rather than binary prohibition</span>
    </div>
  </div>

  <div class="project-case__detail-grid">
    <div class="project-case__panel">
      <span class="project-case__panel-label">Research Problem</span>
      <p>Generative AI blurs familiar boundaries between assistance, authorship, revision, and outsourcing. Instructors are left to judge work that may be cognitively meaningful, partially delegated, strategically reflective, or merely polished by an AI system. This project line asks what counts as authentic academic work once those boundaries become unstable.</p>
    </div>
    <div class="project-case__panel">
      <span class="project-case__panel-label">Why It Matters</span>
      <p>Without clearer evaluative language, institutions tend to default either to vague integrity warnings or to surveillance-heavy responses. This line instead pushes toward better criteria, better assignments, and more defensible ways of interpreting AI-mediated work.</p>
    </div>
  </div>

  <section class="project-case__section">
    <h2>Integrated Authenticity Framework</h2>
    <p>The framework-building side of this line treats authenticity as a holistic judgment rather than a yes-or-no label. In the current formulation, instructors evaluate AI-mediated writing across three interacting dimensions, then interpret those dimensions through student agency, AI integration, and educational value.</p>
    <div class="auth-framework">
      <div class="auth-framework__grid">
        <div class="auth-framework__card">
          <span class="auth-framework__index">Dimension 1</span>
          <h3 class="auth-framework__title">Personal-Intellectual Investment</h3>
          <p class="auth-framework__body">Does the work still reflect the student&apos;s own ideas, commitment, and independent contribution rather than borrowed fluency or outsourced thinking?</p>
        </div>
        <div class="auth-framework__card">
          <span class="auth-framework__index">Dimension 2</span>
          <h3 class="auth-framework__title">Process Integrity</h3>
          <p class="auth-framework__body">How visible is the student&apos;s judgment across drafting, prompting, revising, source evaluation, and explanation of choices made with AI?</p>
        </div>
        <div class="auth-framework__card">
          <span class="auth-framework__index">Dimension 3</span>
          <h3 class="auth-framework__title">Contextual Integration</h3>
          <p class="auth-framework__body">What counts as authentic depends on disciplinary norms, course level, and task purpose. The same AI move may be defensible in one context and unacceptable in another.</p>
        </div>
      </div>
      <div class="auth-framework__footer">
        <span class="auth-framework__pill">Mediating vectors: student agency, AI integration, educational value</span>
        <span class="auth-framework__pill">Contextual modifiers: disciplinary norms, educational level, task parameters</span>
      </div>
      <p class="auth-framework__note">The practical implication is that authenticity cannot be inferred from AI use alone. It has to be evaluated across multiple dimensions and in relation to the educational purpose of the task.</p>
    </div>
  </section>

  <section class="project-case__section">
    <h2>Where Faculty Draw the Line</h2>
    <p>The spectrum work shows why blanket policy language fails. Faculty judgments tend to cluster into accepted, contested, and rejected zones, with the middle zone depending heavily on assignment design, disciplinary expectations, and whether students can document their process.</p>
    <div class="auth-spectrum">
      <div class="auth-spectrum__bar">
        <div class="auth-spectrum__zone auth-spectrum__zone--accepted">Accepted Zone</div>
        <div class="auth-spectrum__zone auth-spectrum__zone--contested">Contested Zone</div>
        <div class="auth-spectrum__zone auth-spectrum__zone--rejected">Rejected Zone</div>
      </div>
      <div class="auth-spectrum__cards">
        <div class="auth-spectrum__card auth-spectrum__card--accepted">
          <h3>Accepted uses</h3>
          <ul>
            <li>Brainstorming and idea generation</li>
            <li>Preliminary literature search</li>
            <li>Grammar and mechanics support</li>
            <li>Translation assistance</li>
          </ul>
        </div>
        <div class="auth-spectrum__card auth-spectrum__card--contested">
          <h3>Contested uses</h3>
          <ul>
            <li>Stylistic enhancement</li>
            <li>Structural reorganization</li>
            <li>Paraphrasing existing arguments</li>
            <li>Generating supporting examples</li>
          </ul>
        </div>
        <div class="auth-spectrum__card auth-spectrum__card--rejected">
          <h3>Rejected uses</h3>
          <ul>
            <li>Core argument generation</li>
            <li>Substituting original analysis</li>
            <li>Undisclosed full-text composition</li>
            <li>Fabricated evidence or citations</li>
          </ul>
        </div>
      </div>
      <p class="auth-spectrum__note">The middle zone is the real assessment problem. Instructors do not just need better detection; they need criteria for judging contribution, disclosure, and alignment between AI use and the task&apos;s learning goals.</p>
    </div>
  </section>

  <section class="project-case__section">
    <h2>What This Line Studies</h2>
    <ul class="project-case__list">
      <li>How instructors define authentic work when students draft, revise, or brainstorm with generative AI.</li>
      <li>Which criteria matter most in evaluation: ownership, process transparency, judgment, disciplinary fit, and educational value.</li>
      <li>How writing assessment systems and classroom routines should be redesigned so AI use can be interpreted rather than simply detected.</li>
    </ul>
  </section>

  <section class="project-case__section">
    <h2>Connected Outputs</h2>
    <div class="project-case__detail-grid">
      <div class="project-case__panel">
        <span class="project-case__panel-label">Q-Method Authenticity Study</span>
        <p>A Q-method manuscript on higher education instructors&apos; subjective judgments of authenticity in student-AI collaborative writing. This work is useful because it identifies structured viewpoints rather than flattening disagreement into a simple average opinion.</p>
      </div>
      <div class="project-case__panel">
        <span class="project-case__panel-label">Interview-Based Framework Study</span>
        <p>A qualitative authenticity study centered on instructor perspectives in AI-assisted academic writing. This is where the Integrated Authenticity Framework and the acceptability spectrum begin to take shape.</p>
      </div>
    </div>
    <div class="project-case__detail-grid">
      <div class="project-case__panel">
        <span class="project-case__panel-label">Writing Assessment Design</span>
        <p>A proposal-accepted line in the <em>Journal of Computing in Higher Education</em> that moves from abstract integrity concerns to the concrete design of criteria, monitoring structures, and evidence sources for AI-mediated writing.</p>
      </div>
      <div class="project-case__panel">
        <span class="project-case__panel-label">Programmatic Role</span>
        <p>This line extends the learner-agency work into instructor judgment and institutional design. It is where the research agenda moves from how learners work with AI to how educational systems should interpret and assess that work fairly.</p>
      </div>
    </div>
  </section>

  <section class="project-case__section">
    <h2>Current Position</h2>
    <p>This research line already includes Q-method work on subjective judgments, interview-based framework building, and a design-oriented assessment proposal. The next step is translating those insights into more portable assessment criteria and task design guidance.</p>
    <div class="project-case__links">
      <a class="project-case__link" href="/publications/">See publication statuses</a>
      <a class="project-case__link" href="/research/">Return to research agenda</a>
    </div>
  </section>
</div>
