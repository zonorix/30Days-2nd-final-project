(function () {
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
