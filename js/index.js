document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burgerButton = document.querySelector(".burger-button");
  const navigation = document.querySelector(".navigation");

  header.addEventListener("click", (e) => {

    const target = e.target;
    if (target.classList.contains("burger-button")) {
      navigation?.classList.toggle("active");
    }
    if (target.classList.contains("navigation__link") && navigation?.classList.contains("active")) {
      console.log("nav")
      navigation?.classList.remove("active");
    }

  });

  const swiper = new Swiper(".hero__swiper.swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".hero-swiper-button-next",
      prevEl: ".hero-swiper-button-prev",
    },
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   992: {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     effect: "fade",
    //     fadeEffect: {
    //       crossFade: true,
    //     },
    //   },
    // },
  });
})