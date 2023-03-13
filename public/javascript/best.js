let indis = document.querySelectorAll(".indi");
// // let i = 0;
// // indis.forEach((e) => {
// //   e.childNodes[1].childNodes[1].childNodes[3].childNodes[3].addEventListener(
// //     "mouseover",
// //     () => {

// //     }
// //   );
// // });

let i = 0;

indis.forEach((e) => {
  e.style.zIndex = i--;
});
