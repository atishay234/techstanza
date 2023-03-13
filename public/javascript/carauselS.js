// let divisions=document.querySelectorAll(".outer>div");
// let j = 0;
// divisions[0].style.display="flex";
// let prevImg1 = document.querySelector(".prevImg");
// let nextImg1 = document.querySelector(".nextImg");
// let middleSlideres=document.querySelector(".middleSlideres");
// let newDivision=middleSlideres.cloneNode(true);
// newDivision.classList.remove("d-none");
// prevImg1.addEventListener("click", () => {
//      prevFunction();
   
// })
// nextImg1.addEventListener("click", () => {

//     nextFunction();
// })


// setInterval(() => {
//   nextFunction();    
// }, 6000);


// let prevFunction=()=>{
//     divisions=document.querySelectorAll(".outer>div");
//     let k;
//     for (k = 0; k < divisions.length; k++) {
//         divisions[k].style.display = "none";
//     }
//     if (j < 1) {
//         j = divisions.length - 1;
//         divisions[j].style.display = "flex";
//     }
//     else {
//         j--;
//         divisions[j].style.display = "flex";

//     }
// }
// let nextFunction=()=>{
//     divisions=document.querySelectorAll(".outer>div");
//     let k;
//     for (k = 0; k < divisions.length; k++) {
//         divisions[k].style.display = "none";
//     }
//     if (j >= (divisions.length - 1)) {
//         j = 0;
//         divisions[0].style.display = "flex";
//     }
//     else {
//         j++;
//         divisions[j].style.display = "flex"
//     }
// }



// window.onresize=function(){
//     if(window.innerWidth<=600){
//         setSlides();
//     }
//     else{
//         removeMiddleChild();
//     }
// };
// window.onload=function(){
//     if(window.innerWidth<=600){
//         setSlides();
//     }
//     else{
//         removeMiddleChild();
//     }
// };


// let setSlides=()=>{
//     let outer=document.querySelector(".outer");
//     let lastslide=document.querySelector(".secondSlide");
//     outer.insertBefore(newDivision,lastslide);
//     let firstSlide=document.querySelectorAll(".firstSlide>div");
//     firstSlide[2].classList.add("d-none")
//     let secondSlide=document.querySelectorAll(".secondSlide>div");
//     secondSlide[0].classList.add("d-none");

// }



// let removeMiddleChild=()=>{
//     let outer1=document.querySelector(".outer");
//     outer1.removeChild(newDivision);
//     let firstSlide=document.querySelectorAll(".firstSlide>div");
//     firstSlide[2].classList.remove("d-none")
//     let secondSlide=document.querySelectorAll(".secondSlide>div");
//     secondSlide[0].classList.remove("d-none");
// }


