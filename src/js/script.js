(function () {
  // ドロワーメニュー開閉処理
  document.getElementById("js-hamburgerToggle").onclick = function () {
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
  };

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
