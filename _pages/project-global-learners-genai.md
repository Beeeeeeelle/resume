---
title: "AI in Learning, Humans in Charge"
permalink: /projects/global-learners-genai/
layout: single
classes: wide
author_profile: false
---

{% include project-case-styles.html %}

<style>
.diss-page {
  --ink: #2f3742;
  --muted: #667280;
  --line: #dfe7f0;
  --soft: #f7fafc;
  --blue: #2f7f97;
  --orange: #e66f28;
  --green: #5f9275;
  color: var(--ink);
}
.diss-page p {
  line-height: 1.68;
}
.diss-back {
  margin: 0 0 18px;
  font-size: 0.86rem;
}
.diss-back a {
  color: #6d7885;
  text-decoration: none;
}
.diss-kicker {
  margin: 0 0 12px;
  color: var(--blue);
  font-size: 0.74rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.diss-hero {
  margin: 10px 0 42px;
}
.diss-hero__title {
  max-width: 900px;
  margin: 0 0 12px;
  color: #222831;
  font-size: clamp(2.5rem, 6vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: 0;
}
.diss-hero__subtitle {
  max-width: 820px;
  margin: 0 0 22px;
  color: var(--muted);
  font-size: clamp(1rem, 1.5vw, 1.24rem);
}
.diss-hero__claim {
  max-width: 980px;
  margin: 22px 0 0;
  padding-left: 22px;
  border-left: 3px solid var(--orange);
  color: #394551;
  font-size: 1.02rem;
}
.diss-figure {
  margin: 0;
}
.diss-figure img {
  display: block;
  width: 100%;
  height: auto;
}
.diss-figure figcaption {
  margin-top: 8px;
  color: #7a8592;
  font-size: 0.78rem;
  line-height: 1.48;
}
.diss-figure--framed {
  padding: 12px;
  border: 1px solid rgba(223, 231, 240, 0.9);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 12px 34px rgba(34, 47, 62, 0.055);
}
.diss-figure--flat {
  padding: 0;
}
.diss-figure--wide {
  margin-top: 24px;
}
.diss-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin: 28px 0 58px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.diss-stat {
  padding: 18px 18px 16px 0;
}
.diss-stat + .diss-stat {
  border-left: 1px solid var(--line);
  padding-left: 18px;
}
.diss-stat strong {
  display: block;
  margin-bottom: 5px;
  color: #27313d;
  font-size: 1.85rem;
  line-height: 1;
}
.diss-stat span {
  display: block;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.42;
}
.diss-section {
  margin: 64px 0;
}
.diss-section--tight {
  margin-top: 42px;
}
.diss-section__head {
  display: grid;
  grid-template-columns: 0.36fr 0.64fr;
  gap: 34px;
  align-items: start;
  margin-bottom: 22px;
}
.diss-section__num {
  display: block;
  margin-bottom: 8px;
  color: var(--orange);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.diss-section h2 {
  margin: 0;
  color: #242b34;
  font-size: clamp(1.5rem, 2.8vw, 2.7rem);
  line-height: 1.08;
}
.diss-section__head p {
  margin: 0;
  color: var(--muted);
  font-size: 0.98rem;
}
.diss-foundation {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 18px;
  align-items: start;
}
.diss-arc {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.diss-arc__item {
  padding: 20px 20px 20px 0;
}
.diss-arc__item + .diss-arc__item {
  border-left: 1px solid var(--line);
  padding-left: 20px;
}
.diss-arc__item span {
  display: block;
  margin-bottom: 8px;
  color: var(--blue);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.diss-arc__item h3 {
  margin: 0 0 7px;
  color: #26313c;
  font-size: 1.08rem;
}
.diss-arc__item p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}
.diss-study3 {
  margin: 78px calc(50% - 50vw);
  padding: 58px max(32px, calc((100vw - 1180px) / 2));
  background: linear-gradient(180deg, #fbfdff 0%, #fff 42%, #f8fbfb 100%);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.diss-study3__intro {
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  gap: 34px;
  align-items: end;
  margin-bottom: 28px;
}
.diss-study3__intro h2 {
  margin: 0;
  color: #222831;
  font-size: clamp(2rem, 4vw, 4.2rem);
  line-height: 0.98;
  letter-spacing: 0;
}
.diss-study3__intro p {
  margin: 0;
  color: var(--muted);
  font-size: 1.02rem;
}
.diss-sequence {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 34px;
}
.diss-step {
  display: grid;
  grid-template-columns: minmax(260px, 0.32fr) minmax(0, 0.68fr);
  gap: 28px;
  align-items: center;
  padding-top: 26px;
  border-top: 1px solid rgba(223, 231, 240, 0.92);
}
.diss-step--visual-first {
  grid-template-columns: minmax(0, 0.64fr) minmax(260px, 0.36fr);
}
.diss-step__copy h3 {
  margin: 0 0 10px;
  color: #26313c;
  font-size: clamp(1.26rem, 2vw, 1.9rem);
  line-height: 1.12;
}
.diss-step__copy p {
  margin: 0;
  color: var(--muted);
}
.diss-step__copy .diss-mini {
  margin-bottom: 8px;
  color: var(--orange);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
.diss-profile-counts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}
.diss-profile-counts div {
  border-top: 1px solid var(--line);
  padding-top: 10px;
}
.diss-profile-counts strong {
  display: block;
  color: #26313c;
  font-size: 1.38rem;
  line-height: 1;
}
.diss-profile-counts span {
  color: var(--muted);
  font-size: 0.78rem;
}
.diss-two-up {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.diss-insight {
  max-width: 980px;
  margin: 34px auto 0;
  padding: 20px 0 0;
  border-top: 1px solid var(--line);
  color: #394551;
  font-size: 1.02rem;
}
.diss-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.diss-link {
  border: 1px solid #cfdceb;
  border-radius: 999px;
  padding: 9px 14px;
  background: #fff;
  color: #2f5e8f;
  font-size: 0.86rem;
  font-weight: 750;
  text-decoration: none;
}
.diss-link:hover {
  background: #f3f8ff;
  text-decoration: none;
}
@media (max-width: 980px) {
  .diss-section__head,
  .diss-foundation,
  .diss-study3__intro,
  .diss-step,
  .diss-step--visual-first,
  .diss-two-up {
    grid-template-columns: 1fr;
  }
  .diss-strip,
  .diss-arc {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .diss-stat,
  .diss-stat + .diss-stat,
  .diss-arc__item,
  .diss-arc__item + .diss-arc__item {
    border-left: 0;
    padding-left: 0;
  }
}
@media (max-width: 640px) {
  .diss-hero__title {
    font-size: clamp(2.1rem, 13vw, 3.35rem);
    line-height: 1.03;
  }
  .diss-hero__subtitle {
    font-size: 0.98rem;
  }
  .diss-strip,
  .diss-arc,
  .diss-profile-counts {
    grid-template-columns: 1fr;
  }
  .diss-study3 {
    padding-left: 22px;
    padding-right: 22px;
  }
}
</style>

<div class="project-case diss-page">
  <p class="diss-back"><a href="/research/">&larr; Back to Research</a></p>

  <section class="diss-hero">
    <p class="diss-kicker">Doctoral dissertation &middot; Purdue University &middot; Defended June 2, 2026</p>
    <h1 class="diss-hero__title">AI in Learning, Humans in Charge</h1>
    <p class="diss-hero__subtitle">Mapping, Measuring, and Modeling Self-Directed Language Learning with Generative AI</p>

    <figure class="diss-figure diss-figure--flat diss-figure--wide">
      <img src="/assets/images/dissertation/progressive-narrowing-2026.png" alt="Progressive narrowing across the three-study dissertation" />
      <figcaption>Figure 5.1. The dissertation narrows from field mapping, to measurement, to learner-profile modeling.</figcaption>
    </figure>

    <p class="diss-hero__claim">The project asks how learners can use GenAI without giving up agency, authentic work, or learning quality. The answer is not simply "more AI use"; it is whether learners can regulate goals, verify outputs, and stay in charge of interpretation.</p>
  </section>

  <div class="diss-strip" aria-label="Dissertation summary">
    <div class="diss-stat">
      <strong>3</strong>
      <span>connected studies</span>
    </div>
    <div class="diss-stat">
      <strong>693</strong>
      <span>complete Wave 1 cases</span>
    </div>
    <div class="diss-stat">
      <strong>29</strong>
      <span>matched follow-up learners</span>
    </div>
    <div class="diss-stat">
      <strong>3</strong>
      <span>PA-SDA learner profiles</span>
    </div>
  </div>

  <section class="diss-section diss-section--tight">
    <div class="diss-section__head">
      <div>
        <span class="diss-section__num">Foundation</span>
        <h2>First, define what learner agency means in AI-mediated SDL.</h2>
      </div>
      <p>The dissertation builds from the AI-integrated self-directed learning framework and the PA-SDA personal-attribute structure. These figures set up the local learner-AI relationship before the empirical profile analysis begins.</p>
    </div>

    <div class="diss-foundation">
      <figure class="diss-figure diss-figure--framed">
        <img src="/assets/images/dissertation/ai-sdl-dimensions-2026.png" alt="AI-SDL Framework dimensions" />
        <figcaption>Figure 4.1. AI-SDL framework dimensions.</figcaption>
      </figure>
      <figure class="diss-figure diss-figure--framed">
        <img src="/assets/images/dissertation/ai-sdl-local-level-2026.png" alt="Local level of the AI-integrated SDL framework" />
        <figcaption>Figure 4.2. Local level of the AI-integrated SDL framework.</figcaption>
      </figure>
    </div>
  </section>

  <section class="diss-section">
    <div class="diss-section__head">
      <div>
        <span class="diss-section__num">Three-study arc</span>
        <h2>The dissertation moves from landscape to scale to profiles.</h2>
      </div>
      <p>Rather than treating GenAI learning as one broad behavior, the project gradually narrows the unit of analysis: the field, the measurement model, and finally learner heterogeneity.</p>
    </div>

    <figure class="diss-figure diss-figure--flat">
      <img src="/assets/images/dissertation/research-design-2026.png" alt="Research design for the final dissertation study" />
      <figcaption>Figure 4.3. Research design connecting the three-study dissertation arc and the mixed-methods profile analysis.</figcaption>
    </figure>

    <div class="diss-arc" aria-label="Three dissertation studies">
      <article class="diss-arc__item">
        <span>Study 1</span>
        <h3>Map the field</h3>
        <p>What did early ChatGPT and language-education research make visible, and what did it miss?</p>
      </article>
      <article class="diss-arc__item">
        <span>Study 2</span>
        <h3>Build PA-SDA</h3>
        <p>How can AI-mediated self-directed learning attributes be measured with a validated scale?</p>
      </article>
      <article class="diss-arc__item">
        <span>Study 3</span>
        <h3>Model learners</h3>
        <p>How do learner attributes cluster, and what happens when learners are followed over time?</p>
      </article>
    </div>
  </section>

  <section class="diss-study3">
    <div class="diss-study3__intro">
      <h2>Study 3 is the core story.</h2>
      <p>The final study uses PA-SDA to model learner heterogeneity. It starts with 693 Wave 1 learners, identifies three personal-attribute profiles, then follows 29 matched participants with a fixed-reference Wave 2 analysis and interview interpretation.</p>
    </div>

    <div class="diss-sequence">
      <div class="diss-step">
        <div class="diss-step__copy">
          <p class="diss-mini">Step 1</p>
          <h3>Start with the analytic sample.</h3>
          <p>The sample flow matters because the longitudinal layer is intentionally cautious: large baseline profile modeling, small matched follow-up, and qualitative interpretation rather than causal transition claims.</p>
        </div>
        <figure class="diss-figure diss-figure--framed">
          <img src="/assets/images/dissertation/sample-flow-fixed-reference-2026.png" alt="Sample flow for the fixed-reference PA-SDA personal-attribute analysis" />
          <figcaption>Figure 4.4. Sample flow and analytic subsets for the fixed-reference analysis.</figcaption>
        </figure>
      </div>

      <div class="diss-step diss-step--visual-first">
        <figure class="diss-figure diss-figure--framed">
          <img src="/assets/images/dissertation/wave1-profile-structure-2026.png" alt="Wave 1 PA-SDA personal-attribute profile structure" />
          <figcaption>Figure 4.5. Wave 1 PA-SDA personal-attribute profile structure.</figcaption>
        </figure>
        <div class="diss-step__copy">
          <p class="diss-mini">Step 2</p>
          <h3>Find the learner profiles.</h3>
          <p>The main baseline finding is heterogeneity. Learners do not simply use AI more or less; their confidence, attitude, motivation, resource use, and strategy use cluster into distinct profiles.</p>
          <div class="diss-profile-counts" aria-label="Profile counts">
            <div><strong>33</strong><span>lower-standing</span></div>
            <div><strong>495</strong><span>mid-range</span></div>
            <div><strong>165</strong><span>higher-standing</span></div>
          </div>
        </div>
      </div>

      <div class="diss-step">
        <div class="diss-step__copy">
          <p class="diss-mini">Step 3</p>
          <h3>Hold the reference model still.</h3>
          <p>Wave 2 participants are classified against the retained Wave 1 reference model. That makes the follow-up descriptive and interpretable: it shows where learners land relative to the original profile structure.</p>
        </div>
        <figure class="diss-figure diss-figure--framed">
          <img src="/assets/images/dissertation/fixed-reference-patterns-2026.png" alt="Fixed-reference PA-SDA profile patterns across waves" />
          <figcaption>Figure 4.6. Fixed-reference profile patterns across waves.</figcaption>
        </figure>
      </div>

      <div class="diss-step diss-step--visual-first">
        <figure class="diss-figure diss-figure--framed">
          <img src="/assets/images/dissertation/fixed-reference-movement-2026.png" alt="Fixed-reference movement across PA-SDA personal-attribute profiles" />
          <figcaption>Figure 4.7. Fixed-reference movement across profiles.</figcaption>
        </figure>
        <div class="diss-step__copy">
          <p class="diss-mini">Step 4</p>
          <h3>Read movement as stability, growth, or recalibration.</h3>
          <p>Most mid-range cases stayed mid-range, some moved upward, and no matched follow-up case originated from the lower-standing profile. The movement figure is therefore a descriptive map, not a causal transition model.</p>
        </div>
      </div>
    </div>

    <p class="diss-insight">The Study 3 contribution is the person-centered view: GenAI-supported learning is not one uniform experience. Learners differ in readiness, strategy, and capacity to maintain agency while working with AI.</p>
  </section>

  <section class="diss-section">
    <div class="diss-section__head">
      <div>
        <span class="diss-section__num">Evidence base</span>
        <h2>The dissertation connects framework, scale, and empirical modeling.</h2>
      </div>
      <p>This project builds on a connected line of published work on self-directed learning, GenAI-supported language learning, and PA-SDA measurement.</p>
    </div>
    <div class="diss-links">
      <a class="diss-link" href="https://doi.org/10.1109/TLT.2024.3386098" target="_blank" rel="noopener">AI-SDL Framework</a>
      <a class="diss-link" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" rel="noopener">PA-SDA Scale</a>
      <a class="diss-link" href="https://doi.org/10.1007/s11528-024-00960-3" target="_blank" rel="noopener">SDL with GenAI</a>
      <a class="diss-link" href="https://doi.org/10.4018/IJCALLT.326135" target="_blank" rel="noopener">Multilingual ChatGPT Applications</a>
    </div>
  </section>
</div>
