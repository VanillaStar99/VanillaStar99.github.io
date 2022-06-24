const fadeItems = document.querySelectorAll(".fade");

const fadeinOption = {
  rootMargin: "0px 0px -100px 0px"
};

const fadeinScroll = new IntersectionObserver(function (items, fadeinScroll) {
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