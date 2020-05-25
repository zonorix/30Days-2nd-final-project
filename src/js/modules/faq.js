const faqModule = (() => {
  "use strict";

  // アコーディオン開閉処理
  const faqToggles = document.querySelectorAll(".js-accordionToggle");

  Array.prototype.forEach.call(faqToggles, (faqToggle) => {
    faqToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const toggleBtn = e.currentTarget;
      const answer = faqToggle.nextElementSibling;
      const faqToggleBtn = toggleBtn.childNodes[3];
      if (toggleBtn.classList.contains("is-active")) {
        toggleBtn.classList.remove("is-active");
        answer.classList.remove("is-open");
        faqToggleBtn.setAttribute("aria-expanded", "false");
      } else {
        toggleBtn.classList.add("is-active");
        answer.classList.add("is-open");
        faqToggleBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
