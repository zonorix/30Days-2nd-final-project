'use strict';

import Swiper from 'swiper';

// swiperオプション
const mySwiper = new Swiper('.swiper-container', { // eslint-disable-line
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
