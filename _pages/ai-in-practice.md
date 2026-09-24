---
title: "AI in Practice"
permalink: /ai-in-practice/
---

<style>
.layout--single .page__inner-wrap > header {
  display: none;
}

.aip-page {
  --aip-paper: #ffffff;
  --aip-soft: #f7f7f5;
  --aip-ink: #202124;
  --aip-copy: #51565f;
  --aip-quiet: #8a9099;
  --aip-rule: rgba(32, 33, 36, 0.14);
  --aip-orange: #d97745;
  --aip-blue: #5f7fa3;
  --aip-red: #b94a48;
  color: var(--aip-copy);
  font-family: var(--global-font-family, "Helvetica Neue", Arial, sans-serif);
}

.aip-page *,
.aip-page *::before,
.aip-page *::after {
  box-sizing: border-box;
}

.aip-page h1,
.aip-page h2,
.aip-page h3,
.aip-page p,
.aip-page figure,
.aip-page blockquote,
.aip-page dl,
.aip-page dd {
  margin-top: 0;
}

.aip-cover {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 1;
  margin: 0;
  border-radius: 4px;
  background: var(--aip-soft);
}

.aip-cover img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 57%;
  filter: saturate(0.82) contrast(0.98);
  transition: filter 650ms cubic-bezier(.16, 1, .3, 1), transform 650ms cubic-bezier(.16, 1, .3, 1);
}

.aip-cover:hover img {
  filter: saturate(1) contrast(1);
  transform: scale(1.01);
}

.aip-document-head {
  position: relative;
  max-width: 49rem;
  padding: 1.7rem clamp(0.2rem, 2.4vw, 1.6rem) 0;
}

.aip-kicker,
.aip-entry-label,
.aip-property dt,
.aip-initiative__role,
.aip-course__meta {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  letter-spacing: 0;
  text-transform: uppercase;
}

.aip-kicker {
  margin-bottom: 0.55rem;
  color: var(--aip-blue);
  font-size: 11px;
  font-weight: 700;
}

.page__content .aip-title {
  margin: 0 0 0.75rem;
  color: var(--aip-ink);
  font-size: clamp(2.45rem, 5.2vw, 4.25rem);
  font-weight: 750;
  line-height: 0.98;
  letter-spacing: 0;
}

.aip-intro {
  max-width: 46rem;
  margin-bottom: 1.65rem;
  color: var(--aip-copy);
  font-size: clamp(17px, 1.45vw, 20px);
  line-height: 1.65;
  text-wrap: pretty;
}

.aip-hand {
  color: var(--aip-blue);
  font-family: "Bradley Hand", "Segoe Print", "Noteworthy", cursive;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.35;
  transform: rotate(-1.4deg);
}

.aip-properties {
  display: grid;
  grid-template-columns: 0.9fr 1.35fr 1fr;
  margin: 0;
  padding: 0.9rem 0;
  border-top: 1px solid var(--aip-rule);
  border-bottom: 1px solid var(--aip-rule);
}

.aip-property {
  min-width: 0;
  padding-right: 1rem;
}

.aip-property + .aip-property {
  padding-left: 1rem;
  border-left: 1px solid var(--aip-rule);
}

.aip-property dt {
  margin-bottom: 0.38rem;
  color: var(--aip-quiet);
  font-size: 10px;
  font-weight: 650;
}

.aip-property dd {
  margin-bottom: 0;
  color: var(--aip-ink);
  font-size: 13px;
  line-height: 1.45;
}

.aip-entry {
  display: grid;
  grid-template-columns: minmax(118px, 0.32fr) minmax(0, 1.68fr);
  gap: clamp(1.4rem, 4vw, 3.4rem);
  margin-top: clamp(3.7rem, 8vw, 6.5rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--aip-ink);
}

.aip-entry-rail {
  position: relative;
}

.aip-entry-number {
  display: block;
  margin-bottom: 0.8rem;
  color: var(--aip-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 42px;
  font-style: italic;
  line-height: 1;
}

.aip-entry-number::after {
  content: "";
  display: block;
  width: 42px;
  margin-top: 0.45rem;
  border-top: 2px solid var(--aip-orange);
  transform: rotate(-2deg);
}

.aip-entry-label {
  margin-bottom: 0.45rem;
  color: var(--aip-quiet);
  font-size: 10px;
  line-height: 1.6;
}

.aip-entry-rail .aip-hand {
  display: block;
  max-width: 8rem;
  margin-top: 1.15rem;
}

.aip-series-name {
  margin-bottom: 0.55rem;
  color: var(--aip-blue);
  font-size: 13px;
  font-weight: 700;
}

.page__content .aip-entry-title {
  max-width: 45rem;
  margin: 0 0 0.9rem;
  color: var(--aip-ink);
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 720;
  line-height: 1.16;
  letter-spacing: 0;
  text-transform: none;
  text-wrap: balance;
}

.aip-entry-copy {
  max-width: 43rem;
  margin-bottom: 1.15rem;
  color: var(--aip-copy);
  font-size: 16px;
  line-height: 1.72;
}

.aip-callout {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: 0.85rem;
  max-width: 43rem;
  margin: 1.45rem 0;
  padding: 1rem 1.1rem;
  background: var(--aip-soft);
  border-left: 0;
  border-radius: 4px;
}

.aip-callout__mark {
  color: var(--aip-orange);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 24px;
  font-style: italic;
  line-height: 1;
}

.aip-callout p {
  margin: 0;
  color: var(--aip-ink);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.65;
}

.aip-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  margin-top: 1.15rem;
}

.aip-link {
  color: var(--aip-ink);
  font-size: 14px;
  font-weight: 680;
  text-decoration: none;
  border-bottom: 1px solid rgba(217, 119, 69, 0.7);
}

.aip-link::after {
  content: " \2192";
  color: var(--aip-orange);
}

.aip-link:hover,
.aip-link:focus-visible {
  color: var(--aip-blue);
}

.aip-session-note {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(1.25rem, 3vw, 2rem);
  align-items: start;
  margin-top: clamp(2rem, 5vw, 3.5rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--aip-rule);
  scroll-margin-top: 6rem;
}

.page__content .aip-session-note h2 {
  margin: 0 0 0.7rem;
  color: var(--aip-ink);
  font-size: clamp(21px, 2.1vw, 27px);
  line-height: 1.2;
  letter-spacing: 0;
  text-transform: none;
}

.aip-session-note__copy {
  margin-bottom: 0.9rem;
  font-size: 15px;
  line-height: 1.6;
}

.aip-session-note__photos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.aip-session-note__photos figure {
  min-width: 0;
  margin: 0;
}

.aip-session-note__photos a {
  display: block;
  overflow: hidden;
  border-radius: 4px;
}

.aip-session-note__photos a:focus-visible {
  outline: 2px solid var(--aip-orange);
  outline-offset: 4px;
}

.aip-session-note__photos img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.aip-course {
  margin-top: clamp(3.3rem, 7vw, 5.6rem);
  padding-top: 1.2rem;
  border-top: 1px solid var(--aip-rule);
}

.aip-course__heading,
.aip-gallery-heading,
.aip-initiatives__heading {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: baseline;
  margin-bottom: 1.2rem;
}

.page__content .aip-course h2,
.page__content .aip-gallery-section h2,
.page__content .aip-initiatives h2 {
  margin: 0;
  color: var(--aip-ink);
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  font-weight: 720;
  line-height: 1.25;
  letter-spacing: 0;
  text-transform: none;
}

.aip-course__meta {
  color: var(--aip-quiet);
  font-size: 10px;
}

.aip-course__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(190px, 0.45fr);
  gap: clamp(1.4rem, 4vw, 3rem);
  align-items: start;
}

.aip-course figure {
  margin: 0;
}

.aip-course__media {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: var(--aip-soft);
  border: 1px solid var(--aip-rule);
  border-radius: 4px;
}

.aip-course video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aip-caption {
  margin: 0.55rem 0 0;
  color: var(--aip-quiet);
  font-size: 12px;
  line-height: 1.55;
}

.aip-board-list {
  margin: 0.9rem 0 1rem;
  padding: 0;
  list-style: none;
}

.aip-board-list li {
  position: relative;
  margin: 0;
  padding: 0.68rem 0 0.68rem 1.7rem;
  color: var(--aip-copy);
  font-size: 13px;
  line-height: 1.45;
  border-bottom: 1px solid var(--aip-rule);
}

.aip-board-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.83rem;
  width: 12px;
  height: 12px;
  border: 1px solid var(--aip-ink);
  border-radius: 2px;
}

.aip-board-list li::after {
  content: "";
  position: absolute;
  left: 3px;
  top: 0.93rem;
  width: 7px;
  height: 4px;
  border-left: 1.5px solid var(--aip-orange);
  border-bottom: 1.5px solid var(--aip-orange);
  transform: rotate(-45deg);
}

.aip-gallery-section {
  margin-top: clamp(3.7rem, 8vw, 6.5rem);
}

.aip-gallery {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(230px, 0.65fr);
  grid-template-rows: repeat(2, minmax(190px, 1fr));
  gap: 8px;
}

.aip-gallery figure {
  overflow: hidden;
  min-height: 0;
  margin: 0;
  background: var(--aip-soft);
  border-radius: 4px;
}

.aip-gallery figure:first-child {
  grid-row: 1 / 3;
}

.aip-gallery img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.72);
  transition: filter 650ms cubic-bezier(.16, 1, .3, 1), transform 650ms cubic-bezier(.16, 1, .3, 1);
}

.aip-gallery figure:first-child img { object-position: 51% center; }
.aip-gallery figure:nth-child(3) img { object-position: 58% center; }

.aip-gallery figure:hover img {
  filter: saturate(1);
  transform: scale(1.015);
}

.aip-initiatives {
  margin-top: clamp(4.2rem, 9vw, 7.5rem);
}

.aip-initiatives__intro {
  max-width: 43rem;
  margin-bottom: 1.35rem;
  color: var(--aip-copy);
  font-size: 15px;
  line-height: 1.68;
}

.aip-initiative {
  display: grid;
  grid-template-columns: 42px minmax(180px, 0.82fr) minmax(0, 1.35fr) minmax(150px, 0.65fr);
  gap: clamp(0.8rem, 2.2vw, 1.6rem);
  align-items: start;
  padding: 1.25rem 0;
  border-top: 1px solid var(--aip-rule);
  transition: background-color 500ms cubic-bezier(.16, 1, .3, 1);
}

.aip-initiative:last-child {
  border-bottom: 1px solid var(--aip-rule);
}

.aip-initiative:hover {
  background: #fafafa;
}

.aip-initiative__index {
  display: flex;
  gap: 7px;
  align-items: center;
  color: var(--aip-quiet);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 16px;
  font-style: italic;
}

.aip-initiative__index::before {
  content: "";
  width: 7px;
  height: 7px;
  flex: 0 0 7px;
  border-radius: 50%;
  background: var(--aip-blue);
}

.aip-initiative:nth-of-type(2) .aip-initiative__index::before { background: #9dbb85; }
.aip-initiative:nth-of-type(3) .aip-initiative__index::before { background: #d6a34a; }

.page__content .aip-initiative h3 {
  margin: 0;
  color: var(--aip-ink);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.45;
}

.aip-initiative p {
  margin: 0;
  color: var(--aip-copy);
  font-size: 13.5px;
  line-height: 1.65;
}

.aip-initiative__role {
  color: var(--aip-quiet) !important;
  font-size: 9px !important;
  line-height: 1.65 !important;
}

.aip-collaborate {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.42fr);
  gap: 1rem;
  min-height: 220px;
  margin-top: clamp(4rem, 9vw, 7rem);
  padding: clamp(1.5rem, 4vw, 2.8rem);
  overflow: hidden;
  background: var(--aip-soft);
  border-top: 1px solid var(--aip-rule);
  border-bottom: 1px solid var(--aip-rule);
}

.aip-collaborate__copy {
  position: relative;
  z-index: 2;
  align-self: center;
}

.aip-collaborate__copy::before {
  content: "";
  display: block;
  width: 46px;
  margin-bottom: 1rem;
  border-top: 2px solid var(--aip-orange);
  transform: rotate(-2deg);
}

.page__content .aip-collaborate h2 {
  max-width: 34rem;
  margin: 0 0 0.65rem;
  color: var(--aip-ink);
  font-size: clamp(1.5rem, 2.8vw, 2.15rem);
  font-weight: 720;
  line-height: 1.2;
  letter-spacing: 0;
  text-transform: none;
  text-wrap: balance;
}

.aip-collaborate p {
  max-width: 37rem;
  margin: 0 0 0.9rem;
  color: var(--aip-copy);
  font-size: 14px;
  line-height: 1.65;
}

.aip-collaborate .aip-hand {
  display: inline-block;
  margin-left: 0.85rem;
  color: var(--aip-blue);
  font-size: 14px;
}

.aip-collaborate__belle {
  align-self: end;
  justify-self: end;
  width: min(290px, 100%);
  margin: 0 -1.6rem -1.8rem 0;
  mix-blend-mode: multiply;
  transition: transform 700ms cubic-bezier(.16, 1, .3, 1);
}

.aip-collaborate:hover .aip-collaborate__belle {
  transform: translate(5px, -3px);
}

@media (max-width: 900px) {
  .aip-session-note {
    grid-template-columns: 1fr;
    gap: 1.1rem;
  }

  .aip-session-note__photos {
    max-width: 540px;
  }

  .aip-properties {
    grid-template-columns: 1fr 1fr;
  }

  .aip-property:last-child {
    grid-column: 1 / 3;
    margin-top: 0.85rem;
    padding: 0.85rem 0 0;
    border-top: 1px solid var(--aip-rule);
    border-left: 0;
  }

  .aip-initiative {
    grid-template-columns: 36px minmax(150px, 0.78fr) minmax(0, 1.22fr);
  }

  .aip-initiative__role {
    grid-column: 2 / 4;
  }
}

@media (max-width: 600px) {
  .aip-cover {
    aspect-ratio: 1.75 / 1;
  }

  .aip-cover img {
    object-position: 66% center;
  }

  .aip-document-head {
    padding: 0 0.2rem;
  }

  .page__content .aip-title {
    font-size: clamp(2.25rem, 12vw, 3.2rem);
  }

  .aip-properties {
    grid-template-columns: 1fr;
  }

  .aip-property,
  .aip-property + .aip-property,
  .aip-property:last-child {
    grid-column: auto;
    margin: 0;
    padding: 0.65rem 0;
    border-top: 1px solid var(--aip-rule);
    border-left: 0;
  }

  .aip-property:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .aip-property:last-child {
    padding-bottom: 0;
  }

  .aip-entry {
    grid-template-columns: 1fr;
    gap: 1.35rem;
  }

  .aip-entry-rail {
    display: grid;
    grid-template-columns: 55px minmax(0, 1fr);
    gap: 0.8rem;
    align-items: start;
  }

  .aip-entry-number {
    grid-row: 1 / 3;
  }

  .aip-entry-rail .aip-hand {
    max-width: none;
    margin: 0.15rem 0 0;
  }

  .aip-course__heading,
  .aip-gallery-heading,
  .aip-initiatives__heading {
    display: block;
  }

  .aip-course__heading .aip-hand,
  .aip-gallery-heading .aip-hand,
  .aip-initiatives__heading .aip-hand {
    display: block;
    margin-top: 0.55rem;
  }

  .aip-course__grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .aip-gallery {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 245px 160px;
    gap: 6px;
  }

  .aip-gallery figure:first-child {
    grid-column: 1 / 3;
    grid-row: auto;
  }

  .aip-initiative {
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 0.45rem 0.8rem;
  }

  .aip-initiative > p,
  .aip-initiative__role {
    grid-column: 2;
  }

  .aip-collaborate {
    grid-template-columns: minmax(0, 1fr) 112px;
    min-height: 260px;
    padding: 1.4rem 1.15rem;
  }

  .aip-collaborate__belle {
    width: 205px;
    margin: 0 -3.7rem -1.25rem -1.8rem;
  }

  .aip-collaborate .aip-hand {
    display: block;
    margin: 0.75rem 0 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .aip-page img {
    transition: none !important;
  }
}
</style>

<div class="aip-page">
  <header class="aip-document" data-reveal>
    <figure class="aip-cover">
      <img src="/assets/images/ai-in-practice/lunch-learn/session-01/room-wide.webp" alt="Belle Li leading the first Purdue AI Lunch and Learn workshop with educators gathered around a shared table" loading="eager">
    </figure>

    <div class="aip-document-head">
      <p class="aip-kicker">Field notes / AI in practice</p>
      <h1 class="aip-title">AI in Practice</h1>
      <p class="aip-intro">This is where my research becomes something educators can try, question, and shape. I design hands-on programs that keep human judgment visible while people build with AI.</p>

      <dl class="aip-properties" aria-label="AI in Practice overview">
        <div class="aip-property">
          <dt>Current program</dt>
          <dd>Purdue AI Lunch &amp; Learn</dd>
        </div>
        <div class="aip-property">
          <dt>Formats</dt>
          <dd>Workshops &middot; conferences &middot; digital initiatives</dd>
        </div>
        <div class="aip-property">
          <dt>Working rhythm</dt>
          <dd>Make &middot; test &middot; question &middot; refine</dd>
        </div>
      </dl>
    </div>
  </header>

  <section class="aip-entry" id="lunch-learn" aria-labelledby="aip-session-title">
    <aside class="aip-entry-rail" data-reveal>
      <span class="aip-entry-number">01</span>
      <p class="aip-entry-label">Sep 10, 2026<br>60 minutes<br>West Lafayette</p>
      <span class="aip-hand">from idea to something you can open</span>
    </aside>

    <div class="aip-entry-main" data-reveal>
      <p class="aip-series-name">Purdue AI Lunch &amp; Learn &middot; Session 01</p>
      <h2 class="aip-entry-title" id="aip-session-title">Build Your First Personal Website with AI</h2>
      <p class="aip-entry-copy">Participants began with curated academic examples, chose a structure that fit their work, and practiced directing, evaluating, and refining AI-generated pages.</p>

      <blockquote class="aip-callout">
        <span class="aip-callout__mark" aria-hidden="true">*</span>
        <p>The website was the project. The lasting skill was learning how to make decisions with AI without handing those decisions over to it.</p>
      </blockquote>

      <div class="aip-actions">
        <a class="aip-link" href="/assets/images/news/ai-lunch-learn/ai-lunch-learn-session-01-flyer.webp" target="_blank" rel="noopener">View the session flyer</a>
        <a class="aip-link" href="https://purdue.yul1.qualtrics.com/jfe/form/SV_9NvaqUBRjdm4pCK" target="_blank" rel="noopener">Propose or co-design a session</a>
      </div>
    </div>
  </section>

  <section class="aip-course" aria-labelledby="aip-course-title">
    <div class="aip-course__heading" data-reveal>
      <h2 id="aip-course-title">Inside the course</h2>
      <span class="aip-hand">four boards &rarr; one build path</span>
    </div>

    <div class="aip-course__grid">
      <figure data-reveal>
        <div class="aip-course__media">
          <video controls muted playsinline preload="metadata" poster="/assets/videos/ai-in-practice/session-01/course-walkthrough-poster.jpg" aria-label="A short walkthrough of the Session 01 learning website">
            <source src="/assets/videos/ai-in-practice/session-01/session-01-course-walkthrough.mp4" type="video/mp4">
          </video>
        </div>
        <figcaption class="aip-caption">A 15-second walkthrough of the Session 01 learning space.</figcaption>
      </figure>

      <aside data-reveal>
        <p class="aip-course__meta">Course sequence</p>
        <ol class="aip-board-list">
          <li>Get ready</li>
          <li>Study references</li>
          <li>Build the foundation</li>
          <li>Check &amp; save</li>
        </ol>
        <a class="aip-link" href="https://learn.beeelle.com/learn/session-1" target="_blank" rel="noopener">Explore the live course</a>
      </aside>
    </div>
  </section>

  <section class="aip-gallery-section" aria-labelledby="aip-gallery-title">
    <div class="aip-gallery-heading" data-reveal>
      <h2 id="aip-gallery-title">In the room</h2>
      <span class="aip-hand">building &gt; watching</span>
    </div>

    <div class="aip-gallery" aria-label="Purdue AI Lunch and Learn Session 01 photographs" data-reveal-group data-reveal-step="80">
      <figure data-reveal>
        <img src="/assets/images/ai-in-practice/lunch-learn/session-01/facilitating-groups.webp" alt="Belle Li talking with small groups during a hands-on personal website workshop" loading="lazy">
      </figure>
      <figure data-reveal>
        <img src="/assets/images/ai-in-practice/lunch-learn/session-01/facilitator-portrait.webp" alt="Belle Li presenting during Purdue AI Lunch and Learn Session 01" loading="lazy">
      </figure>
      <figure data-reveal>
        <img src="/assets/images/ai-in-practice/lunch-learn/session-01/workshop-in-action.webp" alt="Workshop participants building and reviewing personal websites with AI" loading="lazy">
      </figure>
    </div>
    <p class="aip-caption">Individual building moved into small-group feedback, shared examples, and live revision.</p>
  </section>

  <section class="aip-session-note" id="session-02" aria-labelledby="aip-session-02-title">
    <div data-reveal>
      <p class="aip-series-name">Session 02 &middot; Sep 24, 2026</p>
      <h2 id="aip-session-02-title">Beyond PowerPoint: Build Interactive Slides with AI</h2>
      <p class="aip-session-note__copy">Organized by Belle Li, with invited guest speaker <strong>Yi Wang</strong>.</p>
      <a class="aip-link" href="https://claude.ai/artifact/Pd3yU11SAuT2sxBVAfJ3Nn" target="_blank" rel="noopener">View session materials</a>
    </div>
    <div class="aip-session-note__photos" aria-label="Session 02 photographs" data-reveal>
      <figure>
        <a href="/assets/images/ai-in-practice/lunch-learn/session-02/guest-session.jpg" target="_blank" rel="noopener" aria-label="Open full photo of Session 02 with the remote guest speaker">
          <img src="/assets/images/ai-in-practice/lunch-learn/session-02/guest-session.jpg" alt="Purdue AI Lunch and Learn participants watching a projected presentation with a remote guest speaker" width="1707" height="1280" loading="lazy">
        </a>
        <figcaption class="aip-caption">Learning with a guest speaker.</figcaption>
      </figure>
      <figure>
        <a href="/assets/images/ai-in-practice/lunch-learn/session-02/hands-on-workshop.jpg" target="_blank" rel="noopener" aria-label="Open full photo of Session 02 participants working on their laptops">
          <img src="/assets/images/ai-in-practice/lunch-learn/session-02/hands-on-workshop.jpg" alt="Participants working on laptops during Beyond PowerPoint, the second Purdue AI Lunch and Learn session" width="1707" height="1280" loading="lazy">
        </a>
        <figcaption class="aip-caption">Trying it together.</figcaption>
      </figure>
    </div>
  </section>

  <section class="aip-initiatives" aria-labelledby="aip-connected-title">
    <div class="aip-initiatives__heading" data-reveal>
      <h2 id="aip-connected-title">Connected initiatives</h2>
      <span class="aip-hand">the practice keeps moving</span>
    </div>
    <p class="aip-initiatives__intro">The workshop series is one part of a broader practice connecting research, educator learning, public programs, and institutional resources.</p>

    <article class="aip-initiative" data-reveal>
      <span class="aip-initiative__index">02</span>
      <h3>AI P-12 Conference</h3>
      <p>Connecting educators, researchers, and practitioners around responsible uses of AI in P-12 learning.</p>
      <p class="aip-initiative__role">Presenter + organizing committee contributor &middot; 2024-2025</p>
    </article>

    <article class="aip-initiative" data-reveal>
      <span class="aip-initiative__index">03</span>
      <h3>AI &amp; Data Science Web Presence</h3>
      <p>Organizing Purdue College of Education initiatives, resources, and opportunities so they are easier to find and understand.</p>
      <p class="aip-initiative__role">Website updates + content organization + public communication</p>
    </article>

    <article class="aip-initiative" data-reveal>
      <span class="aip-initiative__index">04</span>
      <h3>Faculty Workshops &amp; Invited Sessions</h3>
      <p>Translating research on learner agency, self-directed learning, assessment, and AI into practical educator learning.</p>
      <p class="aip-initiative__role">Workshop design + facilitation + research translation</p>
    </article>
  </section>

  <aside class="aip-collaborate" data-reveal>
    <div class="aip-collaborate__copy">
      <h2>Have an idea for a future session?</h2>
      <p>I welcome collaborators who want to contribute expertise, propose a topic, or co-design a practical workshop.</p>
      <a class="aip-link" href="https://purdue.yul1.qualtrics.com/jfe/form/SV_9NvaqUBRjdm4pCK" target="_blank" rel="noopener">Share an idea</a>
      <span class="aip-hand">Purdue affiliation not required</span>
    </div>
    <img class="aip-collaborate__belle" src="/assets/images/exports/belle-flying-micro-wings-v6-preview.png" alt="Belle carrying a notebook toward the next workshop idea" loading="lazy">
  </aside>
</div>
