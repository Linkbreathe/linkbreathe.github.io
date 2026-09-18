/* main.js — tiny progressive enhancement, no dependencies */
(function () {
  // 1. header hairline on scroll
  var head = document.querySelector('.site-head');
  if (head) {
    var onScroll = function () { head.classList.toggle('is-scrolled', window.scrollY > 12); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 2. topic filter on research.html (works without JS: all entries visible)
  var chips = document.querySelectorAll('.chip[data-topic]');
  var entries = document.querySelectorAll('.entry[data-topic]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var topic = chip.dataset.topic;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      entries.forEach(function (e) {
        e.hidden = !(topic === 'all' || e.dataset.topic === topic);
      });
    });
  });

  // 3. current year in footers
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // 4. click-to-enlarge for images in project detail pages
  var zoomImages = document.querySelectorAll('main img.project-img, main img.project-media');
  if (zoomImages.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Enlarged project image');
    lightbox.innerHTML = '<button class="image-lightbox__close" type="button" aria-label="Close enlarged image">&times;</button>' +
      '<div class="image-lightbox__frame"><img class="image-lightbox__img" alt="" /><p class="image-lightbox__caption"></p></div>';
    document.body.appendChild(lightbox);

    var lightboxImage = lightbox.querySelector('.image-lightbox__img');
    var lightboxCaption = lightbox.querySelector('.image-lightbox__caption');
    var closeButton = lightbox.querySelector('.image-lightbox__close');
    var lastFocusedImage = null;

    var closeLightbox = function () {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('has-lightbox');
      lightboxImage.removeAttribute('src');
      if (lastFocusedImage) lastFocusedImage.focus();
    };

    var openLightbox = function (image) {
      lastFocusedImage = image;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || 'Enlarged project image';
      var figureCaption = image.closest('figure')?.querySelector('figcaption');
      lightboxCaption.textContent = figureCaption ? figureCaption.textContent.trim() : image.alt;
      lightbox.classList.add('is-open');
      document.body.classList.add('has-lightbox');
      closeButton.focus();
    };

    zoomImages.forEach(function (image) {
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', (image.alt || 'Project image') + '. Click to enlarge.');
      image.addEventListener('click', function () { openLightbox(image); });
      image.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(image);
        }
      });
    });

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }
})();
