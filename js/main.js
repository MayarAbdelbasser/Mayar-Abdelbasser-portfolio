let nav = document.querySelector("nav");
let navToggle = document.querySelector(".nav__toggle");
let navMenu = document.querySelector(".nav__menu");
let navMenuShow = false;

//toggle nav menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
  navMenuShow = !navMenuShow;
});
//close when click outside or on a nav link
document.addEventListener("click", (e) => {
  if (!e.target.closest("nav") || e.target.matches("nav ul li a ")) {
    if ((navMenuShow = true)) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  }
});
//add box shadow to nav
window.addEventListener("scroll", () => {
  nav.classList.add("box-shadow");
  if (nav.offsetTop == 0) {
    nav.classList.remove("box-shadow");
  }
});
