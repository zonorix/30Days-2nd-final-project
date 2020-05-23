(function () {
  "use strict";

  // ヘッダーナビをスクロールで変更
  const nav = document.getElementById("js-nav");

  const getScrolled = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : document.documentElement.scrollTop;
  };

  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    getScrolled() > windowHeight
      ? nav.classList.add("add-scrolled")
      : nav.classList.remove("add-scrolled");
  });

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

  // スムーススクロールリンク処理(moveTo使用)
  const headerHeight = () => {
    return window.innerWidth > 767 ? 80 : 68;
  };
  const moveTo = new MoveTo({
    tolerance: headerHeight(),
    duration: 800,
    easing: "easeOutQuart",
    container: window,
  });

  const triggers = document.querySelectorAll(".js-smooth-scroll");
  console.log(triggers);
  Array.prototype.forEach.call(triggers, function (trigger) {
    moveTo.registerTrigger(trigger);
  });

  // トップへ戻るボタン表示非表示
  const toTopBtn = document.getElementById("js-toTop");

  window.addEventListener("scroll", () => {
    getScrolled() > 500
      ? toTopBtn.classList.add("is-active")
      : toTopBtn.classList.remove("is-active");
  });

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
