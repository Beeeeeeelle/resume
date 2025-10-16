document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.page__content img');

  images.forEach((img) => {
    if (img.dataset.lightboxBound === 'true') return;

    img.dataset.lightboxBound = 'true';
    img.classList.add('img-lightbox-target');

    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'img-lightbox-overlay';

      const figure = document.createElement('figure');
      figure.className = 'img-lightbox-figure';

      const enlarged = img.cloneNode(true);
      enlarged.removeAttribute('width');
      enlarged.removeAttribute('height');
      enlarged.classList.add('img-lightbox-img');

      figure.appendChild(enlarged);

      if (img.alt) {
        const caption = document.createElement('figcaption');
        caption.className = 'img-lightbox-caption';
        caption.textContent = img.alt;
        figure.appendChild(caption);
      }

      overlay.appendChild(figure);
      document.body.appendChild(overlay);

      const removeOverlay = () => {
        overlay.classList.add('closing');
        setTimeout(() => overlay.remove(), 150);
      };

      overlay.addEventListener('click', removeOverlay);
      document.addEventListener(
        'keydown',
        (evt) => {
          if (evt.key === 'Escape') {
            removeOverlay();
          }
        },
        { once: true }
      );
    });
  });
});
