(function () {
  var LANG_KEY = 'bl-lang';

  function getLang() {
    try { return localStorage.getItem(LANG_KEY) || 'en'; } catch (e) { return 'en'; }
  }

  function applyLang(lang) {
    var isZh = lang === 'zh';
    document.querySelectorAll('.lang-en').forEach(function (el) { el.hidden = isZh; });
    document.querySelectorAll('.lang-zh').forEach(function (el) { el.hidden = !isZh; });
    document.documentElement.lang = isZh ? 'zh-CN' : 'en';
    document.dispatchEvent(new CustomEvent('bl-lang-change', { detail: { lang: lang } }));
  }

  function updateBtn(lang) {
    var btn = document.getElementById('bl-lang-toggle');
    if (!btn) return;
    if (lang === 'zh') {
      btn.textContent = 'EN';
      btn.setAttribute('aria-label', 'Switch to English');
    } else {
      btn.textContent = '中';
      btn.setAttribute('aria-label', '切换为中文');
    }
  }

  function setLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang(lang);
    updateBtn(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('bl-lang-toggle');
    if (!btn) return;

    var saved = getLang();
    if (saved === 'zh') applyLang('zh');
    updateBtn(saved);

    btn.addEventListener('click', function () {
      setLang(getLang() === 'zh' ? 'en' : 'zh');
    });
  });

  window.blLang = { get: getLang, set: setLang };
}());
