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
  border-bottom: 2px solid #eee;
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
.pub-first-note {
  font-size: 13px;
  color: #666;
  margin-bottom: 0;
  align-self: center;
}
.pub-first-note span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #e05a2b;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
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
  margin-bottom: 28px;
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
.pub-card {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 18px;
  margin-bottom: 24px;
  align-items: start;
}
@media (max-width: 600px) {
  .pub-card { grid-template-columns: 1fr; }
  .pub-card__thumb { max-height: 160px; }
}
.pub-card__thumb {
  width: 160px;
  border-radius: 5px;
  object-fit: cover;
  border: 1px solid #e8e8e8;
  display: block;
}
.pub-card__thumb--gif {
  width: 160px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
}
.pub-card__body {}
.pub-card__title {
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin: 0 0 5px;
  line-height: 1.45;
}
.pub-card__authors {
  font-size: 13px;
  color: #555;
  margin: 0 0 4px;
}
.pub-card__venue {
  font-size: 12.5px;
  color: #777;
  font-style: italic;
  margin: 0 0 10px;
}
.pub-card__me {
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
  width: 10px;
  height: 10px;
  background: #e05a2b;
  border-radius: 50%;
  margin-top: 5px;
}
.pub-entry__dot--empty {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  margin-top: 5px;
}
.pub-entry__body {
  font-size: 13.5px;
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
  <p class="pub-first-note"><span></span> First / corresponding author</p>
</div>

<!-- ══════════════════════════════════════════════════════════ -->
<!--  PEER-REVIEWED JOURNAL ARTICLES                          -->
<!-- ══════════════════════════════════════════════════════════ -->
<section class="pub-section">
<h2>Peer-Reviewed Journal Articles</h2>

<p class="pub-year">2025</p>

<!-- PA-SDA Scale — with thumbnail -->
<div class="pub-card">
  <img class="pub-card__thumb" src="/assets/images/publications/PA-SDA Scale.png" alt="PA-SDA Scale validation figure">
  <div class="pub-card__body">
    <p class="pub-card__title">Development and Validation of the PA-SDA Scale: Measuring Personal Attributes in AI-Integrated Self-Directed Learning</p>
    <p class="pub-card__authors"><span class="pub-card__me">Li, B.</span>, Zhang, Z., Lowell, V., Wang, C., &amp; Bonk, C. J.</p>
    <p class="pub-card__venue">System, 133, 103793 · 2025</p>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.system.2025.103793" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- Two years of innovation — with thumbnail -->
<div class="pub-card">
  <img class="pub-card__thumb" src="/assets/images/publications/CAEAI 2025_1.png" alt="Two years of generative AI research systematic review">
  <div class="pub-card__body">
    <p class="pub-card__title">Two Years of Innovation: A Systematic Review of Empirical Generative AI Research in Education</p>
    <p class="pub-card__authors"><span class="pub-card__me">Li, B.</span>, Tan, L. Y., Wang, C., &amp; Lowell, V.</p>
    <p class="pub-card__venue">Computers &amp; Education: Artificial Intelligence, 9, 100445 · 2025</p>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.caeai.2025.100445" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- CPS × Intel — with thumbnail -->
<div class="pub-card">
  <img class="pub-card__thumb" src="/assets/images/publications/CPS × Intel_1.jpg" alt="Collaborative problem solving in AI-mediated environments">
  <div class="pub-card__body">
    <p class="pub-card__title">An Early Investigation of Collaborative Problem Solving in Conversational AI-Mediated Learning Environments</p>
    <p class="pub-card__authors">Aslan, S., Alyuz, N., <span class="pub-card__me">Li, B.</span>, Durham, L. M., Shi, M., Sharma, S., &amp; Nachman, L.</p>
    <p class="pub-card__venue">Computers &amp; Education: Artificial Intelligence, 100, 100393 · 2025</p>
    <div class="pub-tags">
      <a class="pub-tag pub-tag--doi" href="https://doi.org/10.1016/j.caeai.2025.100393" target="_blank" rel="noopener">DOI</a>
    </div>
  </div>
</div>

<!-- BJET 2025 — with thumbnail -->
<div class="pub-card">
  <img class="pub-card__thumb" src="/assets/images/publications/BJET 2025_1.png" alt="Nontraditional students ChatGPT BJET 2025">
  <div class="pub-card__body">
    <p class="pub-card__title">Analysing Nontraditional Students' ChatGPT Interaction, Engagement, Self-Efficacy, and Performance: A Mixed-Methods Approach</p>
    <p class="pub-card__authors">Yang, M., Jiang, S., <span class="pub-card__me">Li, B.</span>, Herman, K., Luo, T., Moots, S. C., &amp; Lovett, N.</p>
    <p class="pub-card__venue">British Journal of Educational Technology · Advance online publication · 2025</p>
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
<div class="pub-card">
  <img class="pub-card__thumb" src="/assets/images/publications/IEEE TLT 2024.png" alt="AI-Integrated SDL Framework (IEEE TLT 2024)">
  <div class="pub-card__body">
    <p class="pub-card__title">Reconceptualizing Self-Directed Learning in the Era of Generative AI: An Exploratory Analysis</p>
    <p class="pub-card__authors"><span class="pub-card__me">Li, B.</span>, Bonk, C. J., Wang, C., &amp; Kou, X.</p>
    <p class="pub-card__venue">IEEE Transactions on Learning Technologies, 17(3), 1515–1529 · 2024</p>
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

<!-- TicApp — with animated gif thumbnail + project page link -->
<div class="pub-card">
  <img class="pub-card__thumb pub-card__thumb--gif" src="/assets/images/publications/ticapp.gif" alt="TicApp mobile app demo">
  <div class="pub-card__body">
    <p class="pub-card__title">Implementing Design Thinking: A Mobile Application for Diverse Learners to Overcome Challenges in Character Learning</p>
    <p class="pub-card__authors"><span class="pub-card__me">Li, B.</span>, &amp; Lowell, V. L.</p>
    <p class="pub-card__venue">In M. Schmidt et al. (Eds.), <em>Transdisciplinary Learning Experience Design</em>. Springer · 2024</p>
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
    <strong>Li, B.</strong>, &amp; Lowell, V. AI-generation literacy. In L. McCallum &amp; D. Tafazoli (Eds.), <em>The Palgrave Encyclopedia of Computer-Assisted Language Learning</em>. <span class="pub-status">Third-round revision</span>
  </div>
</div>

<div class="pub-entry">
  <span class="pub-entry__dot"></span>
  <div class="pub-entry__body">
    <strong>Li, B.</strong>, Lowell, V., &amp; Hou, Z. Design precedents to design innovation: Developing an advanced AI monitoring system for writing assessment. <em>Journal of Computing in Higher Education</em>. <span class="pub-status">Proposal accepted</span>
  </div>
</div>
</section>
