let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
