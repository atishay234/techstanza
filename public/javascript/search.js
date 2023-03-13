document.querySelectorAll(".color").forEach((e) => {
  let color = e.childNodes[3].innerHTML;
  console.log(e.childNodes[3].innerText);
  e.childNodes[1].setAttribute("style", `background-color:${color}`);
  if (color == "white") {
    e.childNodes[1].setAttribute(
      "style",
      "background-color:white;border: 1px solid black"
    );
  }
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
  });
});

let cards = document.querySelectorAll(".card-c");

cards.forEach((e) => {
  let link = e.childNodes[1].innerText;
  e.addEventListener("click", () => {
    window.location.href = `/${link}`;
  });
});

window.onload = () => {
  window.scrollTo(0, 2);
};
