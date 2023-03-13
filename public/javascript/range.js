let rangeinputmax = document.querySelector(".maxprice");
let filterSection = document.querySelector(".filtervalues");
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");
var inputLeftModal = document.getElementById("input-left-offcanvas");
var inputRightModal = document.getElementById("input-right-offcanvas");

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
let actualFormModal = document.querySelector(".range-form-modal");

function setLeftValue1() {
  var _this = inputLeftModal,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue1();

function setRightValue1() {
  var _this = inputRightModal,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue1();
actualFormModal.min.value = inputLeftModal.value;
actualFormModal.max.value = inputRightModal.value;
inputLeftModal.addEventListener("input", () => {
  setLeftValue1();

  actualFormModal.min.value = inputLeftModal.value;
  if (
    parseInt(actualFormModal.min.value) > parseInt(actualFormModal.max.value)
  ) {
    actualFormModal.min.style.border = "1px solid red";
  } else {
    actualFormModal.min.style.border = "none";
    actualFormModal.max.style.border = "none";
  }
});
inputRightModal.addEventListener("input", () => {
  setRightValue1();
  if (
    parseInt(actualFormModal.min.value) > parseInt(actualFormModal.max.value)
  ) {
    actualFormModal.min.style.border = "1px solid red";
  } else {
    actualFormModal.min.style.border = "none";
    actualFormModal.max.style.border = "none";
  }

  actualFormModal.max.value = inputRightModal.value;
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
inputLeftModal.addEventListener("mouseover", () => {
  thumbLeft.classList.add("hover");
});
inputLeftModal.addEventListener("mouseout", () => {
  thumbLeft.classList.remove("hover");
});
inputLeftModal.addEventListener("mousedown", () => {
  thumbLeft.classList.add("active");
});
inputLeftModal.addEventListener("mouseup", () => {
  thumbLeft.classList.remove("active");
});

inputRightModal.addEventListener("mouseover", () => {
  thumbRight.classList.add("hover");
});
inputRightModal.addEventListener("mouseout", () => {
  thumbRight.classList.remove("hover");
});
inputRightModal.addEventListener("mousedown", () => {
  thumbRight.classList.add("active");
});
inputRightModal.addEventListener("mouseup", () => {
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
  try {
    bar.animate(0.7, { duration: 1500 });
  } catch (e) {
    console.log(e.message);
  }
});

let inputs = [];
let filteredResult = document.querySelector(".filteredresult");
let fake = document.querySelector(".fake");
let allinputs = document.querySelectorAll(".filtervalues input");
let brandSection = {
  redmi: false,
  "one plus": false,
  realme: false,
  apple: false,
  vivo: false,
  xiaomi: false,
  oppo: false,
  motorola: false,
  asus: false,
  huawei: false,
  samsumg: false,
};
let ramSection = { 3: false, 4: false, 6: false, 8: false, 12: false };
let mcamera = {
  30: false,
  25: false,
  20: false,
  15: false,
  10: false,
  5: false,
};
let displaySize = {
  7.5: false,
  7: false,
  6.75: false,
  6.5: false,
  6.25: false,
  6: false,
  5.75: false,
  5.5: false,
};
let features = { nfc: false, IR: false, audio: false, fm: false };
let networkT = { "5G": false, "4G": false, "3G": false };

let cameData = [];
allinputs.forEach((input) => {
  input.addEventListener("input", () => {
    manipulate(input);
    sendData();

    setTimeout(() => {
      filteredResult.classList.add("animate");
    }, 100);

    filteredResult.classList.remove("animate");
  });
});

let manipulate = (input) => {
  if (input.classList[0] == "brand") {
    brandSection[input.id] = input.checked;
  }
  if (input.classList[0] == "ram") {
    ramSection[input.id] = input.checked;
  }
  if (input.classList[0] == "mcamera") {
    mcamera[input.id] = input.checked;
  }
  if (input.classList[0] == "screensize") {
    displaySize[input.id] = input.checked;
  }
  if (input.classList[0] == "features") {
    features[input.id] = input.checked;
  }
  if (input.classList[0] == "networkT") {
    networkT[input.id] = input.checked;
  }
  // console.log(mcamera);
  // console.log(brandSection);
  // console.log(ramSection);
  // console.log(features);
};
let mobiles;
let sendData = async () => {
  let res = await axios.post("http://localhost:3000/range/filter", {
    brand: brandSection,
    ram: ramSection,
    mcamera: mcamera,
    features: features,
    displaySize: displaySize,
    networkT: networkT,
    min: actualForm.min.value,
    max: actualForm.max.value,
  });

  let camedata = res.data;
  fillData(camedata);
  console.log(camedata);
  mobiles = [...camedata];
};

let fillData = (cameData) => {
  showAppliedFilters();
  document.querySelector(
    ".results-no"
  ).innerHTML = `Total Results:<span style="color:blue;">${cameData.length}</span>`;
  deleteChild(filteredResult);
  for (let i = 0; i < cameData.length; i++) {
    let newMobile = fake.cloneNode(true);
    newMobile.classList.remove("d-none");

    newMobile.childNodes[1].childNodes[1].src = cameData[i].image;
    newMobile.childNodes[3].childNodes[1].childNodes[1].innerText =
      cameData[i].name;
    newMobile.childNodes[3].childNodes[1].childNodes[3].innerHTML = `&#8377 ${cameData[i].price}`;
    filteredResult.append(newMobile);
  }
};

function deleteChild(e) {
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

let allSpans = document.querySelectorAll(".push>span");
allSpans.forEach((e) => {
  e.parentElement.childNodes[3].style.display = "none";

  e.addEventListener("click", () => {
    let toggle = e.parentElement.childNodes[3];

    if (toggle.classList.contains("animation-block")) {
      toggle.classList.remove("animation-block");
      e.childNodes[1].style.transform = "rotate(0deg)";
    } else {
      toggle.classList.add("animation-block");

      e.childNodes[1].style.transform = "rotate(90deg)";
    }
  });
});
const evt = new Event("input");
document.querySelector(".clear-filter").addEventListener("click", () => {
  allinputs.forEach((e) => {
    e.checked = false;
    e.dispatchEvent(evt);
  });
});

function showAppliedFilters() {
  let filterArray = CheckFiltered();
  console.log(filterArray);

  let filter = document.querySelector(".filter");
  let applied = document.querySelector(".applied");
  deleteChild(applied);
  let newspan = document.createElement("span");
  newspan.innerHTML = "filters";
  applied.append(newspan);
  for (let i = 0; i < filterArray.length; i++) {
    let newFilter = filter.cloneNode(true);
    newFilter.classList.remove("d-none");
    newFilter.childNodes[1].innerText = filterArray[i];
    applied.append(newFilter);
  }
  addClearFilterCloseEventListener();
}

function CheckFiltered() {
  let filtered = [];
  allinputs.forEach((e) => {
    if (e.checked == true) {
      if (!filtered.includes(e.classList[0])) {
        filtered.push(e.classList[0]);
      }
    }
  });
  return filtered;
}

let addClearFilterCloseEventListener = () => {
  let filterClearButtons = document.querySelectorAll(".indi-filter-clear");
  let applied = document.querySelector(".applied");
  filterClearButtons.forEach((e) => {
    e.addEventListener("click", () => {
      let classInput = e.previousElementSibling.innerText;
      let inputs = document.querySelectorAll(`input.${classInput}`);
      inputs.forEach((e) => {
        e.checked = false;
        e.dispatchEvent(evt);
      });

      applied.removeChild(e.parentElement);
    });
  });
};

document.querySelectorAll(".color").forEach((e) => {
  let color = e.childNodes[3].innerHTML;

  e.childNodes[1].setAttribute("style", `background-color:${color}`);
  if (color == "white") {
    e.childNodes[1].setAttribute(
      "style",
      "background-color:white;border: 1px solid black"
    );
  }
});

function openNav1() {
  document.getElementById("mySidenav1").style.width = "100%";
}
function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
}

window.scrollBy(0, 0.5);
