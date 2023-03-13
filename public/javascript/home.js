var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue();

inputLeft.addEventListener("input", () => {
  setLeftValue();

  actualForm.min.value = inputLeft.value;
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.min.style.border = "1px solid red";
  } else {
    actualForm.min.style.border = "none";
    actualForm.max.style.border = "none";
  }
});
inputRight.addEventListener("input", () => {
  setRightValue();
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.min.style.border = "1px solid red";
  } else {
    actualForm.min.style.border = "none";
    actualForm.max.style.border = "none";
  }

  actualForm.max.value = inputRight.value;
});

inputLeft.addEventListener("mouseover", () => {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", () => {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", () => {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", () => {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", () => {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", () => {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", () => {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", () => {
  thumbRight.classList.remove("active");
});

let actualForm = document.querySelector(".range-form");

actualForm.min.value = inputLeft.value;
actualForm.max.value = inputRight.value;

actualForm.min.addEventListener("input", (e) => {
  inputLeft.value = actualForm.min.value;
  setLeftValue();

  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.min.style.border = "1px solid red";
  } else {
    actualForm.min.style.border = "none";
  }
});
actualForm.max.addEventListener("input", () => {
  inputRight.value = actualForm.max.value;
  setRightValue();
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.max.style.border = "1px solid red";
  } else {
    actualForm.max.style.border = "none";
  }
});

const validateMyForm = () => {
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    return false;
  }
};

const swiper = new Swiper(".swiper-container-landing", {
  slidesPerView: 1.2,
  spaceBetween: 5,
  centeredSlides: true,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination-landing",
  },
  breakpoints: {
    600: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const rSwiper = new Swiper(".swiper-container-recent", {
  slidesPerView: 2,
  spaceBetween: 10,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let ratings = document.querySelectorAll(".rating");

ratings.forEach(async (e) => {
  let i = 0;
  window.addEventListener("scroll", () => {
    if (e.getBoundingClientRect().top <= 750) {
      if (i == 0) {
        var bar = new ProgressBar.Circle(e, {
          color: "#000",
          trailColor: "#dfeeea",
          trailWidth: 10,
          duration: 1400,
          easing: "easeInOut",
          strokeWidth: 10,
          from: { color: "#FFEA82", a: 0 },
          to: { color: "#289672", a: 1 },

          step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
          },
        });
        bar.animate(0.7, { duration: 1500 });
        i++;
      }
    }

    if (
      document.querySelector(".subscribe").getBoundingClientRect().top <= 600
    ) {
      document.querySelector(".dynamic-mail").classList.add("mail-anim");
    }
  });
});

gsap.from(".subscribe-message", {
  scrollTrigger: ".subscribe",
  x: 1000,
  opacity: 0,
  duration: 2,
});

gsap.from("#feature-illu", {
  scrollTrigger: "#feature-illu",
  opacity: 0,
  scale: 1.3,
  duration: 2,
});
gsap.from("#saving_money", {
  scrollTrigger: {
    trigger: ".phone-finder",
  },
  scale: 1.3,
  opacity: 0,
  duration: 1,
});

gsap.from(".each", {
  scrollTrigger: {
    trigger: ".each",
    start: "top bottom",
  },

  opacity: 0,
  transform: "scale(1.2)",

  duration: 1,
});

let swiper1;
let swiperElements = document.querySelectorAll(".news-card");
window.onload = () => {
  if (window.innerWidth <= 600) {
    let swiperWrapper = createSwiper(swiperElements);

    document.querySelector(".recent-section").classList.add("swiper-container");
    let swiperContainer = document.querySelector(".recent-section");
    swiperContainer.append(swiperWrapper);

    swiper1 = new Swiper(swiperContainer, {
      slidesPerView: 1.5,
      spaceBetween: 10,

      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });
    swiperElements.forEach((e) => {
      swiperContainer.removeChild(e);
    });
  } else {
    gsap.from(".news-card", {
      scrollTrigger: ".news-card",
      scale: 1.1,
      opacity: 0,
      duration: 1,
    });
  }
};

window.onresize = () => {
  if (window.innerWidth > 600) {
    if (swiper1) {
      swiper1.destroy(true, true);
      let swiperContainer = document.querySelector(".recent-section");
      swiperContainer.childNodes.forEach((element) => {
        swiperContainer.removeChild(element);
      });
      swiperContainer.classList.remove("swiper-container");
      swiperContainer.append(...swiperElements);
    }
  } else {
    swiperContainer = document.querySelector(".recent-section");
    document.querySelectorAll(".recent-section>.news-card").forEach((e) => {
      swiperContainer.removeChild(e);
    });

    if (!swiperContainer.classList.contains("swiper-container")) {
      let swiperWrapper = createSwiper(swiperElements);

      document
        .querySelector(".recent-section")
        .classList.add("swiper-container");

      swiperContainer.append(swiperWrapper);

      swiper1 = new Swiper(swiperContainer, {
        slidesPerView: 1.5,
        spaceBetween: 10,

        direction: "horizontal",
        loop: true,
        autoplay: {
          delay: 3000,
        },
      });
    }
  }
};

let createSwiper = (es) => {
  let swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");
  for (let e of es) {
    let newCard = e.cloneNode(true);
    newCard.classList.add("swiper-slide");
    swiperWrapper.append(newCard);
  }

  return swiperWrapper;
};
// async function registerServiceWorker() {
//   // console.log("registering service worker");
//   await navigator.serviceWorker.register("/service-worker.js");
//   await navigator.serviceWorker.ready;
//   // console.log("registration success");
//   askPermisssion();
// }
// let data = registerServiceWorker();

// async function askPermisssion() {
//   try {
//     // console.log("asking user to permit");
//     const permissionResult = await Notification.requestPermission();
//     // console.log("asked user to permit");
//     subscribe();
//   } catch (e) {
//     console.log(e);
//   }
// }

// function subscribeUserToPush() {
//   return navigator.serviceWorker
//     .register("/service-worker.js")
//     .then(function (registration) {
//       // console.log("i am in the subscribe user to push first thenable");
//       const subscribeOptions = {
//         userVisibleOnly: true,
//         applicationServerKey: urlBase64ToUint8Array(
//           "BIFVnHK8JB5cl1HM56AbR1Vexx9K-7fS3wTShqGpAPX-1Lc8GKEH0ueFSRaarUpu2tCtMe8DmxC39nUEK1iqpME"
//         ),
//       };

//       return registration.pushManager.subscribe(subscribeOptions);
//     })
//     .then(function (pushSubscription) {
//       // console.log(
//       // "returned the subscription",
//       // "i am in the subscribe user to push second thenable"
//       // );
//       return JSON.stringify(pushSubscription);
//     });
// }

// function urlBase64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// async function subscribe() {
//   // console.log("subscribing user to push.....");
//   let pushSubscription = await subscribeUserToPush();
//   sendDataToServer(pushSubscription);

//   // console.log("sending the data to server....");
// }

// async function sendDataToServer(UserData) {
//   let parsedData = JSON.parse(UserData);

//   const link1 =
//     "https://desolate-badlands-28322.herokuapp.com/form/saveSubscription";
//   const link2 = "http://localhost:3000/form/saveSubscription";

//   let result = await axios.post(link1, {
//     endpoint: `${parsedData.endpoint}`,
//     auth: `${parsedData.keys.auth}`,
//     p256dh: `${parsedData.keys.p256dh}`,
//   });

//   // console.log("sent data to the sevrer");
// }

// // let buyLinks = document.querySelectorAll(".buy-hover");
// // let i = 0;
// // buyLinks.forEach((e) => {
// //   e.addEventListener("mouseover", () => {
// //     document.querySelector(".each:last-of-type").style.zIndex = -1;

// //     console.log("mouseover");
// //   });
// //   e.addEventListener("mouseout", () => {
// //     document.querySelector(".each:last-of-type").style.zIndex = 1;
// //     console.log("mouse out");
// //   });
// // });

document.querySelectorAll(".each-r").forEach((e) => {
  e.addEventListener("click", () => {
    window.location.href = e.childNodes[1].innerText;
  });
});
