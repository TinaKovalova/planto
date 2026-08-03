document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burgerButton = document.querySelector(".burger-button");
  const navigation = document.querySelector(".navigation");
  const fraction = document.querySelector(".our-best__fraction");
  const fractionActive = fraction.querySelector(".our-best__fraction-active");
    const fractionCount = fraction.querySelector(".our-best__fraction-count");

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

  const heroSwiper = new Swiper(".hero__swiper.swiper", {
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
  const reviewsSwiper = new Swiper(".customer-review__slider.swiper", {
    slidesPerView: "auto",
    centerInsufficientSlides: true,
    freeMode: true,
    grabCursor: true,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      468: {
        spaceBetween: 20,
        centeredSlides: false,
      },
      992: {
        spaceBetween: 33,
      },
    },
  });

  const bestSlidesCount = document.querySelectorAll(".our-best__slider.swiper .swiper-slide").length;

  const swiper = new Swiper(".our-best__slider.swiper", {
    loop: true,
    navigation: {
      nextEl: ".our-best__button-next",
      prevEl: ".our-best__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: (e) => {
        fractionActive.textContent = e.realIndex<9 ? `0${e.realIndex + 1}/` :`${e.realIndex + 1}/` ;
        fractionCount.textContent = bestSlidesCount<10 ? `0${bestSlidesCount}` : `${bestSlidesCount}`;
      },
    },
  });
})