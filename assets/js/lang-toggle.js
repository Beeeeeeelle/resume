(function () {
  var LANG_KEY = 'bl-lang';
  var MOBILE_LANG_TOUCHED_KEY = 'bl-lang-mobile-touched';

  function isMobileViewport() {
    try {
      return !!(window.matchMedia && window.matchMedia('(max-width: 48em)').matches);
    } catch (e) {
      return false;
    }
  }

  function getDefaultLang() {
    if (isMobileViewport()) return 'zh';
    return 'en';
  }

  function getLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      var mobileTouched = localStorage.getItem(MOBILE_LANG_TOUCHED_KEY);
      if (isMobileViewport() && !mobileTouched) return 'zh';
      return saved || getDefaultLang();
    } catch (e) {
      return getDefaultLang();
    }
  }

  function applyLang(lang) {
    var isZh = lang === 'zh';
    document.querySelectorAll('.lang-en').forEach(function (el) { el.hidden = isZh; });
    document.querySelectorAll('.lang-zh').forEach(function (el) { el.hidden = !isZh; });
    document.documentElement.lang = isZh ? 'zh-CN' : 'en';
    document.dispatchEvent(new CustomEvent('bl-lang-change', { detail: { lang: lang } }));
  }

  function updateBtn(lang) {
    var buttons = document.querySelectorAll('.bl-lang-toggle');
    if (!buttons.length) return;
    var label;
    if (lang === 'zh') {
      label = 'EN';
      buttons.forEach(function (btn) {
        btn.textContent = label;
        btn.setAttribute('aria-label', 'Switch to English');
      });
    } else {
      label = '中';
      buttons.forEach(function (btn) {
        btn.textContent = label;
        btn.setAttribute('aria-label', '切换为中文');
      });
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
      if (isMobileViewport()) localStorage.setItem(MOBILE_LANG_TOUCHED_KEY, 'true');
    } catch (e) {}
    applyLang(lang);
    updateBtn(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.bl-lang-toggle');
    if (!buttons.length) return;

    var saved = getLang();
    applyLang(saved);
    updateBtn(saved);

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(getLang() === 'zh' ? 'en' : 'zh');
      });
    });
  });

  window.blLang = { get: getLang, set: setLang };
}());
