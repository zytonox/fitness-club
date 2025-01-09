const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  initialSlide: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    60: {
      slidesPerView: 1,
    },
    461: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1153: {
      slidesPerView: 4,
    },
    1537: {
      slidesPerView: 5,
    },
  },
});
