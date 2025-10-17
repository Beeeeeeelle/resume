document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.greedy-nav');
  const toggleButton = document.querySelector('.greedy-nav__toggle');
  const visibleLinks = document.querySelector('.greedy-nav .visible-links');

  if (!nav || !toggleButton || !visibleLinks) return;

  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    nav.classList.toggle('is-open');
  });

  visibleLinks.querySelectorAll('.masthead__menu-item.has-submenu').forEach((item) => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('.masthead__submenu');

    if (!link || !submenu) return;

    let toggle = item.querySelector('.masthead__submenu-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'masthead__submenu-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Toggle submenu');
      link.after(toggle);
    }

    toggle.addEventListener('click', (evt) => {
      evt.preventDefault();
      item.classList.toggle('open');
    });
  });
});
