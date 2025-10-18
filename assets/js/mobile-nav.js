document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.greedy-nav');
  const toggle = nav ? nav.querySelector('.greedy-nav__toggle') : null;
  const visible = nav ? nav.querySelector('.visible-links') : null;

  if (!nav || !toggle || !visible) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    nav.classList.toggle('is-open', !expanded);
  });
});
