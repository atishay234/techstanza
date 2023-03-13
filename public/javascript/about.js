var prevScrollpos = window.pageYOffset;
var prevScrollpos1 = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    setTimeout(() => {
      document.querySelector(".nav").style.top = "-60px";
    }, 100);
  }
  prevScrollpos = currentScrollPos;
  if (window.scrollY > 15) {
    document.querySelector(".nav").style.backgroundColor = "white";
    document.querySelector(".nav").style.borderBottom = "0.5px solid lightgrey";
    document.querySelector(".navigation ul").style.color = "black";
    document.querySelector(".home-nav a i").style.color = "black";
  } else {
    document.querySelector(".nav").style.backgroundColor = "transparent";
    document.querySelector(".nav").style.borderBottom = "none";
    document.querySelector(".navigation ul").style.color = "white";
    document.querySelector(".home-nav a i").style.color = "white";
  }
};

window.onload = () => {
  if (window.innerWidth <= 600) {
    document.querySelector(".our-team").classList.add("swiper-container");
    document.querySelector(".swiper-container").style.height = "fit-content";
    document.querySelector(".swiper-container").style.minHeight = "50vh";

    document.querySelector(".inner-team").classList.add("swiper-wrapper");
    document.querySelector(".inner-team").classList.remove("inner-team");

    document.querySelectorAll(".each-member").forEach((e) => {
      e.classList.add("swiper-slide");
      e.style.margin = 0;
    });

    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: 1.8,
      //   centeredSlides: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
    });
  }
};
