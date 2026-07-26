
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