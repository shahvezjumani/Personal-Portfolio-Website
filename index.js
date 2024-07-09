var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    autoplay: {
        // delay: 2500,
        disableOnInteraction: true,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });