document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initReveal(prefersReducedMotion);
  initPageNav(prefersReducedMotion);
  window.setTimeout(initRouteHighlights, 160);
  window.addEventListener('load', initRouteHighlights, { once: true });
  window.addEventListener('hashchange', initRouteHighlights);
  initNewsFilters();
  initPublicationsSpotlight();
  initBeyondCvGallery(prefersReducedMotion);
});

function animateNumericScroll(store, key, from, to, duration, apply) {
  if (store[key]) {
    window.clearTimeout(store[key]);
  }

  const start = window.performance.now();
  const distance = to - from;

  if (Math.abs(distance) < 1) {
    apply(to);
    delete store[key];
    return;
  }

  const step = () => {
    const elapsed = window.performance.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    apply(from + distance * eased);

    if (progress < 1) {
      store[key] = window.setTimeout(step, 16);
      return;
    }

    apply(to);
    delete store[key];
  };

  store[key] = window.setTimeout(step, 16);
}

function smoothScrollWindowTo(top, prefersReducedMotion) {
  const maxTop = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
  const targetTop = Math.min(Math.max(top, 0), maxTop);

  if (prefersReducedMotion) {
    window.scrollTo({ top: targetTop, behavior: 'auto' });
    return;
  }

  animateNumericScroll(
    document.documentElement,
    '__pageScrollAnimation',
    window.scrollY,
    targetTop,
    520,
    (value) => window.scrollTo({ top: value, behavior: 'auto' })
  );
}

function smoothScrollElementTo(element, left, prefersReducedMotion) {
  const maxLeft = Math.max(element.scrollWidth - element.clientWidth, 0);
  const targetLeft = Math.min(Math.max(left, 0), maxLeft);

  if (prefersReducedMotion) {
    element.scrollLeft = targetLeft;
    return;
  }

  animateNumericScroll(
    element,
    '__elementScrollAnimation',
    element.scrollLeft,
    targetLeft,
    420,
    (value) => {
      element.scrollLeft = value;
    }
  );
}

function initReveal(prefersReducedMotion) {
  const groups = document.querySelectorAll('[data-reveal-group]');

  groups.forEach((group) => {
    const step = Number(group.getAttribute('data-reveal-step') || 70);
    [...group.querySelectorAll('[data-reveal]')].forEach((item, index) => {
      if (!item.style.getPropertyValue('--reveal-delay')) {
        item.style.setProperty('--reveal-delay', `${index * step}ms`);
      }
    });
  });

  const items = [...document.querySelectorAll('[data-reveal]')];
  if (!items.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
    }
  );

  items.forEach((item) => observer.observe(item));
}

function initPageNav(prefersReducedMotion) {
  const navs = document.querySelectorAll('[data-page-nav]');
  if (!navs.length) return;

  navs.forEach((nav) => {
    const wrapper = nav.closest('.page-with-rail-nav');
    const items = [...nav.querySelectorAll('.page-section-nav__link')]
      .map((link) => {
        const hash = link.getAttribute('href');
        if (!hash || !hash.startsWith('#')) return null;
        const target = document.querySelector(hash);
        if (!target) return null;
        return { link, target };
      })
      .filter(Boolean);

    if (!items.length) return;

    let activeId = '';

    const setActive = (activeItem) => {
      const nextId = activeItem ? activeItem.target.id : '';
      if (activeId === nextId) return;

      activeId = nextId;
      items.forEach(({ link }) => link.classList.remove('is-active'));
      if (!activeItem) return;
      activeItem.link.classList.add('is-active');
      activeItem.link.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'center',
      });
    };

    const getScrollTop = (target) => {
      const offset = window.innerWidth < 769 ? 98 : 116;
      return window.scrollY + target.getBoundingClientRect().top - offset;
    };

    items.forEach(({ link, target }) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        smoothScrollWindowTo(getScrollTop(target), prefersReducedMotion);

        if (target.id) {
          window.history.replaceState(null, '', `#${target.id}`);
        }

        flashTarget(target);
        setActive({ link, target });
      });
    });

    let updateTimer = null;
    const getRevealThreshold = () => {
      const anchor = wrapper || items[0].target;
      const anchorTop = window.scrollY + anchor.getBoundingClientRect().top;
      return anchorTop + (window.innerWidth >= 1152 ? 120 : 72);
    };

    const updateVisibility = () => {
      const shouldShow = Boolean(window.location.hash) || window.scrollY > getRevealThreshold();
      nav.classList.toggle('is-nav-visible', shouldShow);
    };

    const updateActive = () => {
      const offset = window.innerWidth < 769 ? 108 : 132;
      let active = items[0];

      items.forEach((item) => {
        if (item.target.getBoundingClientRect().top - offset <= 0) {
          active = item;
        }
      });

      setActive(active);
    };

    const updateState = () => {
      updateVisibility();
      updateActive();
    };

    const requestUpdate = () => {
      if (updateTimer) return;
      updateTimer = window.setTimeout(() => {
        updateTimer = null;
        updateState();
      }, 16);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateState();
  });
}

function initRouteHighlights() {
  if (!window.location.hash) return;

  const target = document.querySelector(window.location.hash);
  if (!target) return;

  window.setTimeout(() => flashTarget(target), 180);
}

function flashTarget(target) {
  if (!target || !target.classList.contains('supports-target-highlight')) return;

  target.classList.remove('section-targeted');
  void target.offsetWidth;
  target.classList.add('section-targeted');

  if (target.__flashTimer) {
    window.clearTimeout(target.__flashTimer);
  }

  target.__flashTimer = window.setTimeout(() => {
    target.classList.remove('section-targeted');
  }, 1800);
}

function initNewsFilters() {
  const root = document.querySelector('[data-news-filters]');
  if (!root) return;

  const items = [...document.querySelectorAll('.news-item')];
  if (!items.length) return;

  const typeGroup = root.querySelector('[data-news-type-group]');
  const yearGroup = root.querySelector('[data-news-year-group]');
  if (!typeGroup || !yearGroup) return;

  const typeLabels = {
    all: 'All',
    paper: 'Papers',
    talk: 'Talks',
    award: 'Awards',
    grant: 'Grants',
    media: 'Media',
    event: 'Events',
  };

  const preferredTypeOrder = ['paper', 'talk', 'award', 'grant', 'media', 'event'];
  const uniqueTypes = [...new Set(items.map((item) => item.dataset.newsType).filter(Boolean))].sort((a, b) => {
    const aIndex = preferredTypeOrder.indexOf(a);
    const bIndex = preferredTypeOrder.indexOf(b);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });
  const uniqueYears = [...new Set(items.map((item) => item.dataset.newsYear).filter(Boolean))].sort((a, b) => Number(b) - Number(a));

  const state = { type: 'all', year: 'all' };

  const buildButtons = (group, kind, values) => {
    values.forEach((value) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'news-filter';
      button.dataset.filterKind = kind;
      button.dataset.filterValue = value;
      if (kind === 'type') {
        button.textContent = typeLabels[value] || value;
      } else {
        button.textContent = value === 'all' ? 'All years' : value;
      }
      if (value === 'all') button.classList.add('is-active');

      button.addEventListener('click', () => {
        state[kind] = value;
        render();
      });

      group.appendChild(button);
    });
  };

  buildButtons(typeGroup, 'type', ['all', ...uniqueTypes]);
  buildButtons(yearGroup, 'year', ['all', ...uniqueYears]);

  const render = () => {
    items.forEach((item) => {
      const matchesType = state.type === 'all' || item.dataset.newsType === state.type;
      const matchesYear = state.year === 'all' || item.dataset.newsYear === state.year;
      const visible = matchesType && matchesYear;

      item.hidden = !visible;
      item.classList.toggle('is-hidden', !visible);
    });

    root.querySelectorAll('.news-filter').forEach((button) => {
      const kind = button.dataset.filterKind;
      button.classList.toggle('is-active', state[kind] === button.dataset.filterValue);
    });
  };

  render();
}

function initPublicationsSpotlight() {
  const sections = document.querySelectorAll('.pub-section');
  if (!sections.length) return;

  sections.forEach((section) => {
    const items = [...section.querySelectorAll('.bl-pcard, .pub-entry')];
    if (items.length < 2) return;

    const clear = () => {
      section.classList.remove('is-spotlight');
      items.forEach((item) => item.classList.remove('is-active'));
    };

    items.forEach((item) => {
      item.classList.add('pub-focus-item');

      item.addEventListener('pointerenter', () => {
        section.classList.add('is-spotlight');
        items.forEach((entry) => entry.classList.remove('is-active'));
        item.classList.add('is-active');
      });

      item.addEventListener('focusin', () => {
        section.classList.add('is-spotlight');
        items.forEach((entry) => entry.classList.remove('is-active'));
        item.classList.add('is-active');
      });
    });

    section.addEventListener('pointerleave', clear);
    section.addEventListener('focusout', () => {
      window.setTimeout(() => {
        if (!section.contains(document.activeElement)) clear();
      }, 0);
    });
  });
}

function initBeyondCvGallery(prefersReducedMotion) {
  const galleries = document.querySelectorAll('[data-bcv]');
  if (!galleries.length) return;

  galleries.forEach((gallery) => {
    const viewport = gallery.querySelector('[data-bcv-viewport]');
    const prev = gallery.querySelector('[data-bcv-prev]');
    const next = gallery.querySelector('[data-bcv-next]');
    if (!viewport) return;

    const scrollAmount = () => Math.max(viewport.clientWidth * 0.82, 280);
    const updateControls = () => {
      const maxLeft = Math.max(viewport.scrollWidth - viewport.clientWidth, 0);
      const left = viewport.scrollLeft;
      const atStart = left <= 8;
      const atEnd = left >= maxLeft - 8;

      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd;
    };

    const scrollViewport = (direction) => {
      smoothScrollElementTo(viewport, viewport.scrollLeft + direction * scrollAmount(), prefersReducedMotion);
      window.setTimeout(updateControls, prefersReducedMotion ? 0 : 460);
    };

    prev && prev.addEventListener('click', () => scrollViewport(-1));
    next && next.addEventListener('click', () => scrollViewport(1));

    viewport.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollViewport(-1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollViewport(1);
      }
    });

    let pointerId = null;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    const endDrag = (event) => {
      if (pointerId === null || event.pointerId !== pointerId) return;

      if (viewport.hasPointerCapture(pointerId)) {
        viewport.releasePointerCapture(pointerId);
      }

      viewport.classList.remove('is-dragging');
      pointerId = null;

      if (moved) {
        viewport.dataset.dragMoved = 'true';
        window.setTimeout(() => {
          delete viewport.dataset.dragMoved;
        }, 50);
      }
    };

    viewport.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'touch') return;
      if (event.pointerType === 'mouse' && event.button !== 0) return;

      if (viewport.__elementScrollAnimation) {
        window.clearTimeout(viewport.__elementScrollAnimation);
        delete viewport.__elementScrollAnimation;
      }

      pointerId = event.pointerId;
      startX = event.clientX;
      startScrollLeft = viewport.scrollLeft;
      moved = false;

      viewport.classList.add('is-dragging');
      viewport.setPointerCapture(pointerId);
    });

    viewport.addEventListener('pointermove', (event) => {
      if (pointerId === null || event.pointerId !== pointerId) return;

      const delta = event.clientX - startX;
      if (Math.abs(delta) > 6) moved = true;

      viewport.scrollLeft = startScrollLeft - delta;
    });

    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);

    viewport.addEventListener(
      'click',
      (event) => {
        if (viewport.dataset.dragMoved !== 'true') return;
        event.preventDefault();
        event.stopPropagation();
      },
      true
    );

    updateControls();
  });
}
