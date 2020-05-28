const navModule = (() => {
  'use strict';
  // ヘッダーナビをスクロールで変更
  const nav = document.getElementById('js-nav');
  const getScrolled = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : document.documentElement.scrollTop;
  };

  window.addEventListener(
    'scroll',
    () => {
      const windowHeight = window.innerHeight;
      getScrolled() > windowHeight
        ? nav.classList.add('add-scrolled')
        : nav.classList.remove('add-scrolled');
    },
    { passive: true }
  );

  // ドロワーメニュー開閉処理
  const hamburgerToggle = document.getElementById('js-drawerToggle');
  const drawerClose = document.getElementById('js-drawerClose');

  hamburgerToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const toggleBtn = e.currentTarget;
    if (toggleBtn.getAttribute('aria-expanded') == 'false') {
      toggleBtn.setAttribute('aria-expanded', 'true');
      const elements = document.querySelectorAll('.js-drawer, .js-overlay');
      Array.prototype.forEach.call(elements, (element) => {
        element.classList.add('is-drawerActive');
      });
    } else {
      toggleBtn.setAttribute('aria-expanded', 'false');
      const elements = document.querySelectorAll('.js-drawer, .js-overlay');
      Array.prototype.forEach.call(elements, (element) => {
        element.classList.remove('is-drawerActive');
      });
    }
  });

  drawerClose.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hamburgerToggle.getAttribute('aria-expanded') == 'true') {
      hamburgerToggle.setAttribute('aria-expanded', 'false');
      const elements = document.querySelectorAll('.js-drawer, .js-overlay');
      Array.prototype.forEach.call(elements, function (element) {
        element.classList.remove('is-drawerActive');
      });
    }
  });
})();
