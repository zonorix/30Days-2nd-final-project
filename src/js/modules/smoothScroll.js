'use strict';

import MoveTo from 'moveto';

// スムーススクロールリンク処理(moveTo使用)
function headerHeight() {
  return window.innerWidth > 767 ? 80 : 68;
}
const moveTo = new MoveTo({
  tolerance: headerHeight(),
  duration: 800,
  easing: 'easeOutQuart',
  container: window,
});

const triggers = document.querySelectorAll('.js-smooth-scroll');
Array.prototype.forEach.call(triggers, (trigger) => {
  moveTo.registerTrigger(trigger);
});

// トップへ戻るボタン表示非表示
const toTopBtn = document.getElementById('js-toTop');
const getScrolled = () => {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : document.documentElement.scrollTop;
};

window.addEventListener(
  'scroll',
  () => {
    getScrolled() > 500
      ? toTopBtn.classList.add('is-active')
      : toTopBtn.classList.remove('is-active');
  },
  { passive: true }
);
