
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


  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hero-swiper-button-next",
    prevEl: ".hero-swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});