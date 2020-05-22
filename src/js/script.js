(function () {
  // ドロワーメニュー開閉処理
  const hamburgerToggle = document.getElementById("js-drawerToggle");
  const drawerClose = document.getElementById("js-drawerClose");

  hamburgerToggle.addEventListener("click", function () {
    if (this.getAttribute("aria-expanded") == "false") {
      this.setAttribute("aria-expanded", "true");
      const elements = document.querySelectorAll(".js-drawer, .js-overlay");
      Array.prototype.forEach.call(elements, function (element) {
        element.classList.add("is-drawerActive");
      });
    } else {
      this.setAttribute("aria-expanded", "false");
      const elements = document.querySelectorAll(".js-drawer, .js-overlay");
      Array.prototype.forEach.call(elements, function (element) {
        element.classList.remove("is-drawerActive");
      });
    }
  });

  drawerClose.addEventListener("click", function () {
    if (hamburgerToggle.getAttribute("aria-expanded") == "true") {
      hamburgerToggle.setAttribute("aria-expanded", "false");
      const elements = document.querySelectorAll(".js-drawer, .js-overlay");
      Array.prototype.forEach.call(elements, function (element) {
        element.classList.remove("is-drawerActive");
      });
    }
  });

  // アコーディオン開閉処理
  const faqToggles = document.querySelectorAll(".js-accordionToggle");

  Array.prototype.forEach.call(faqToggles, function (faqToggle) {
    faqToggle.addEventListener("click", function () {
      const answer = faqToggle.nextElementSibling;
      const faqToggleBtn = this.childNodes[3];
      if (this.classList.contains("is-active")) {
        this.classList.remove("is-active");
        answer.classList.remove("is-open");
        faqToggleBtn.setAttribute("aria-expanded", "false");
      } else {
        this.classList.add("is-active");
        answer.classList.add("is-open");
        faqToggleBtn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ページトップへ戻る処理
  const toTopBtn = document.getElementById("js-toTop");

  function getScrolled() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : document.documentElement.scrollTop;
  }
  window.addEventListener("scroll", function () {
    getScrolled() > 500
      ? toTopBtn.classList.add("is-active")
      : toTopBtn.classList.remove("is-active");
  });

  function toTop(duration) {
    toTopBtn.addEventListener(
      "click",
      function () {
        const begin = new Date() - 0;
        const yOffset = window.pageYOffset;
        const timer = setInterval(function () {
          let current = new Date() - begin;
          if (current > duration) {
            clearInterval(timer);
            current = duration;
          }
          window.scrollTo(0, yOffset * (1 - current / duration));
        }, 10);
      },
      { passive: true }
    );
  }
  toTop(300);

  // swiperオプション
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 28,
    width: 422,
    height: 368,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      767: {
        width: 276.45,
      },
    },
  });
})();
