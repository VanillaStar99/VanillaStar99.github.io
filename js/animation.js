var fadeItems = document.querySelectorAll(".fade");
var header = document.querySelector("header");
var toTop = document.querySelector(".to-top")

const fadeinOption = {
  rootMargin: "0px 0px -100px 0px"
};

const fadeinScroll = new IntersectionObserver(function (items) {
  items.forEach(item => {
    if (!item.isIntersecting) {
      return;
    } else {
      item.target.classList.add("fadein");
    }
  });
}, fadeinOption);

fadeItems.forEach(fadeItem => {
  fadeinScroll.observe(fadeItem);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 120) {
    header.classList.add("header-colour");
    toTop.classList.add("to-top-show");
  } else {
    header.classList.remove("header-colour");
    toTop.classList.remove("to-top-show");
  }
})