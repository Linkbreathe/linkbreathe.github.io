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
})();
