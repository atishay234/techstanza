// **********image change on hover*********

let images = document.querySelectorAll(".images-inner img");
let image = document.querySelector(".image-div img");
images[0].style.border = "2px solid blue";
images.forEach((i) => {
  i.addEventListener("mouseover", () => {
    images.forEach((im) => {
      im.style.border = "none";
    });

    setTimeout(() => {
      image.src = i.src;
    }, 200);

    i.style.border = "2px solid blue";
  });
});

// ********share Button functionality**********
// let shareBox = document.querySelector(".share-button");
// let shareSpan = document.querySelector(".share-button span");
// let str = window.location.href;

// shareBox.addEventListener("click", () => {
//   const el = document.createElement("textarea");
//   el.value = str;
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand("copy");
//   document.body.removeChild(el);
//   shareSpan.innerText = "copied!";
//   shareSpan.style.color = "white";
//   shareSpan.parentElement.style.backgroundColor = "green";
// });

// **********animation Part*********
AOS.init();

gsap.to(".sunflower", {
  translateX: "0",
  opacity: 1,
  duration: 2,
  ease: Power1.easeInOut,
  //   stagger: {
  //     opacity: 1,
  //     from: "end",
  //     amount: 1.5,
  //   },
});

let animationForMore = gsap.to(".more", {
  duration: 1,
  opacity: 1,
  height: "1000px",
  stagger: {
    from: "end",
    amount: 1,
  },
});

animationForMore.pause();

//the more button functionality
let more = document.querySelector(".more");
let spanButton = document.querySelector(".moreButton");
function expand() {
  if (more.style.display == "flex") {
    more.style.display = "none";
    spanButton.innerText = "more";
  } else {
    animationForMore.restart();
    //    animationForMore.pause();
    more.style.display = "flex";

    spanButton.innerText = "close";
  }
}

//  *********canvas drawing********?

//

let ratings = document.querySelectorAll(".rating");

ratings.forEach(async (e) => {
  var bar = new ProgressBar.Circle(e, {
    color: "#4D61FC",
    trailColor: "#dee2e6",
    trailWidth: 10,
    duration: 1400,
    easing: "easeInOut",
    strokeWidth: 10,
    from: { color: "#8DA5FD", a: 0 },
    to: { color: "#4D61FC", a: 1 },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
    },
  });
  bar.animate(0.7, { duration: 1500 });
});
