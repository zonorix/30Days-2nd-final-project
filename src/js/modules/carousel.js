const carouselModule = (() => {
  'use strict';

  // swiperオプション
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 28,
    width: 422,
    height: 368,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      767: {
        width: 276.45,
      },
    },
  });
})();
