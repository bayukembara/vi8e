var swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: -30,
  slidesPerGroup: 3,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

AOS.init();
