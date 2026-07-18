(function () {
  function classifyLink(link) {
    var href = (link.getAttribute('href') || '').toLowerCase();
    var text = (link.textContent || '').trim().toLowerCase();

    if (href.indexOf('mailto:') === 0) return 'email_click';
    if (href.indexOf('scholar.google.com') !== -1) return 'google_scholar_click';
    if (href.indexOf('linkedin.com') !== -1) return 'linkedin_click';
    if (href.indexOf('app.box.com') !== -1 || text === 'cv') return 'cv_click';
    if (href.indexOf('doi.org/') !== -1) return 'doi_click';
    if (href.indexOf('/projects/') !== -1) return 'project_click';
    return null;
  }

  function track(name, props) {
    if (!name) return;
    var payload = props || {};

    window.dispatchEvent(new CustomEvent('site-reach-event', {
      detail: { name: name, props: payload }
    }));

    if (window.zaraz && typeof window.zaraz.track === 'function') {
      window.zaraz.track(name, payload);
    }
  }

  document.addEventListener('click', function (event) {
    var askBelle = event.target.closest && event.target.closest('[data-chatbot-open], .site-chatbot__button, .site-chatbot__launcher');
    if (askBelle) {
      track('ask_belle_click', { path: window.location.pathname });
      return;
    }

    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var eventName = classifyLink(link);
    if (!eventName) return;

    track(eventName, {
      path: window.location.pathname,
      href: link.getAttribute('href'),
      label: (link.textContent || '').trim().slice(0, 120)
    });
  }, { passive: true });
})();
