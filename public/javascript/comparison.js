let upperStrip = document.querySelector(".upper-strip");
let comparison = document.querySelector(".comparison");

document.addEventListener("scroll", () => {
  if (comparison.getBoundingClientRect().top <= 0) {
    upperStrip.style.position = "fixed";
    upperStrip.style.top = 0;
  } else {
    upperStrip.style.position = "static";
  }
});

let searchDivision = document.querySelectorAll(".searchResult");
let fake = document.querySelector(".fake");
let inputs = document.querySelectorAll(".mobileInput");
let mobiles = [];

let linkAxios1 = "http://localhost:3000/axiosMobiles";
let linkAxios2 = "https://desolate-badlands-28322.herokuapp.com/axiosMobiles";
let getmobiles = async () => {
  let res = await axios.get(linkAxios1);
  let data = res.data;

  for (mobile of data) {
    mobiles.push(mobile);
  }
};
getmobiles();

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    fillUp(input);
  });
});

function fillUp(input) {
  let divi = input.nextElementSibling;
  divi.style.display = "flex";
  divi.style.flexDirection = "column";
  let keys = diffkeys(input.value.toLowerCase());
  // console.log(keys)

  let response = getrelated(keys);
  response = removeInitial(response);
  deleteChild(divi);
  // console.log(response);
  for (mobile of response) {
    let newMobile = fake.cloneNode(true);
    newMobile.childNodes[1].src = mobile.image;
    newMobile.childNodes[3].childNodes[1].innerText = mobile.name;

    newMobile.classList.add("dynamicClass");
    newMobile.classList.remove("fake");
    divi.append(newMobile);
  }
  let mobimage = input.parentNode.parentNode.childNodes[3].childNodes[1];
  let className = input.parentElement.parentElement.classList[0];
  let addButtons = input.nextElementSibling.childNodes;
  // document.querySelectorAll(`.${className} .addButton`);
  // console.log(addButtons);
  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let mob = getMobile(button);
      mobimage.src = mob.image;
      fillDown(className, mob);
      // console.log(mobimage);
      addNamesInUpperStrip(className, mob);
    });
  });
}

function getrelated(keys) {
  let response = [];
  let keywords = diffnames(mobiles);
  for (mobile of mobiles) {
    for (key of keys) {
      // console.log(mobile.name);
      if (
        mobile.name.toLowerCase() == key ||
        mobile.name.toLowerCase().split(" ").includes(key)
      ) {
        if (!response.includes(mobile)) response.push(mobile);
      }
    }
  }

  return response;
}

function removeInitial(response) {
  let fMobile = document.querySelector(".firstMobUpper").innerText;
  let sMobile = document.querySelector(".secondMobUpper").innerText;
  let tMobile = document.querySelector(".thirdMobUpper").innerText;
  for (mobile of response) {
    if (
      mobile.name == fMobile ||
      mobile.name == sMobile ||
      mobile.name == tMobile
    ) {
      response = arrayRemove(response, mobile);
    }
  }

  return response;
}
function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

function getMobile(btn) {
  let mobname = btn.childNodes[3].childNodes[1].innerText;
  // let thismob;
  for (mobile of mobiles) {
    if (mobile.name === mobname) {
      // console.log(mobile)
      return mobile;
    }
  }
}

function deleteChild(e) {
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

function diffkeys(query) {
  return query.split(" ");
}

function diffnames(mobiles) {
  let diffnames = [];
  for (mobile of mobiles) {
    let respo = diffkeys(mobile.name);
    for (resp of respo) {
      diffnames.push(resp);
    }
  }
  return diffnames;
}

let mainSection = document.querySelector(".mainSection");

mainSection.addEventListener("click", () => {
  searchDivision[0].style.display = "none";
  searchDivision[1].style.display = "none";
  searchDivision[2].style.display = "none";
});
let all = document.querySelectorAll(".searchResult div");

all.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

let j = 0;
function fillDown(className, mob) {
  let whole = document.querySelector(`.${className} .indiDetails`);
  whole.style.opacity = 1;
  let frontcamera = document.querySelectorAll(`.${className} .frontcamera td`);
  let maincamera = document.querySelectorAll(`.${className} .frontcamera td`);
  let display = document.querySelectorAll(`.${className} .display td`);
  let performance = document.querySelectorAll(`.${className} .performance td`);
  let memory = document.querySelectorAll(`.${className} .memory td`);
  let battery = document.querySelectorAll(`.${className} .battery td`);
  let network = document.querySelectorAll(`.${className} .network td`);
  let dimensions = document.querySelectorAll(`.${className} .dimensions td`);
  let ui = document.querySelectorAll(`.${className} .userInterface td`);
  let others = document.querySelectorAll(`.${className} .others td`);
  if (className == "firstMobile") {
    frontcamera[0].innerHTML =
      "<strong>pixel</strong> " + mob.frontCamera.pixels[0].pixel + "MP";
    frontcamera[2].innerHTML =
      "<strong>description</strong> " + mob.frontCamera.pixels[0].description;
    display[0].innerHTML = "<strong>size</strong> " + mob.Display.size;
    display[1].innerHTML =
      "<strong>resolution</strong> " + mob.Display.resolution;
    display[2].innerHTML = "<strong>category</strong> " + mob.Display.category;

    display[3].innerHTML =
      "<strong>refresh rate</strong> " + `${mob.refreshrate}` + "Hz";
    performance[0].innerHTML =
      "<strong>category</strong> " + mob.processor.category;
    performance[1].innerHTML = "<strong>Core</strong> " + mob.processor.Core;
    performance[2].innerHTML =
      "<strong>clock speed</strong> " + mob.processor.clockSpeed;
    battery[0].innerHTML =
      "<strong>Battery Capacity</strong> " + mob.BatteryCapacity + "Mah";
    network[0].innerHTML = "<strong>category</strong> " + mob.network.category;
    network[1].innerHTML =
      "<strong>Bluetooth Version</strong> " + mob.network.bluetoothVersion;
    network[2].innerHTML = "<strong>Nfc</strong> " + mob.network.nfc;
    memory[0].innerHTML =
      "<strong>Internal storage</strong> " + mob.memory.internalStorage;
    memory[1].innerHTML = "<strong>Ram</strong> " + mob.memory.ram;
    memory[2].innerHTML =
      "<strong>expandable storage</strong> " + mob.memory.expandableStorage;
    ui[0].innerHTML = "<strong>UI</strong> " + mob.userInterface;
    ui[1].innerHTML = "<strong>OS</strong> " + mob.processor.operatingSystem;
    ui[2].innerHTML = "<strong>GPU</strong> " + mob.Display.GPU;
    dimensions[0].innerHTML = "<strong>width</strong> " + mob.Dimensions.width;
    dimensions[1].innerHTML =
      "<strong>height</strong> " + mob.Dimensions.height;
    dimensions[2].innerHTML =
      "<strong>weight</strong> " + mob.Dimensions.weight;
    others[0].innerHTML = "<strong>sound</strong> " + "sound " + mob.sound;
    others[1].innerHTML = "<strong>sim Type</strong> " + mob.simType;
    others[2].innerHTML = "<strong>Infrared</strong> " + mob.network.infrared;
    others[3].innerHTML =
      "<strong>Audio Jack</strong> " + mob.network.audioJack;
    others[4].innerHTML = "<strong>In Box</strong> " + mob.Box;
  } else {
    frontcamera[0].innerHTML = mob.frontCamera.pixels[0].pixel + "MP";
    frontcamera[2].innerHTML = mob.frontCamera.pixels[0].description;
    display[0].innerHTML = mob.Display.size;
    display[1].innerHTML = mob.Display.resolution;
    display[2].innerHTML = mob.Display.category;

    display[3].innerHTML = `${mob.refreshrate}` + "Hz";
    performance[0].innerHTML = mob.processor.category;
    performance[1].innerHTML = mob.processor.Core;
    performance[2].innerHTML = mob.processor.clockSpeed;
    battery[0].innerHTML = mob.BatteryCapacity + "Mah";
    network[0].innerHTML = mob.network.category;
    network[1].innerHTML = mob.network.bluetoothVersion;
    network[2].innerHTML = mob.network.nfc;
    memory[0].innerHTML = mob.memory.internalStorage;
    memory[1].innerHTML = mob.memory.ram;
    memory[2].innerHTML = mob.memory.expandableStorage;
    ui[0].innerHTML = mob.userInterface;
    ui[1].innerHTML = mob.processor.operatingSystem;
    ui[2].innerHTML = mob.Display.GPU;
    dimensions[0].innerHTML = mob.Dimensions.width;
    dimensions[1].innerHTML = mob.Dimensions.height;
    dimensions[2].innerHTML = mob.Dimensions.weight;
    others[0].innerHTML = mob.sound;
    others[1].innerHTML = mob.simType;
    others[2].innerHTML = mob.network.infrared;
    others[3].innerHTML = mob.network.audioJack;
    others[4].innerHTML = mob.Box;
  }
}

let buttons = document.querySelectorAll(".customButton");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let className = button.parentElement.parentElement.classList[0];
    removeDown(className);
    removeNamesInUpperStrip(className);
  });
});

function removeDown(className) {
  let whole = document.querySelector(`.${className} .indiDetails`);
  whole.style.opacity = 0.2;
  let imageSection = document.querySelector(`.${className} .originalImage`);
  imageSection.src = "";
  let frontcamera = document.querySelectorAll(`.${className} .frontcamera td`);
  let display = document.querySelectorAll(`.${className} .display td`);
  let performance = document.querySelectorAll(`.${className} .performance td`);
  frontcamera[0].innerText = "";
  frontcamera[2].innerText = "";
}

function addNamesInUpperStrip(classname, mob) {
  let selector;
  //    console.log(classname);
  if (classname == "firstMobile") selector = ".firstMobUpper";
  if (classname == "secondMobile") selector = ".secondMobUpper";
  if (classname == "thirdMobile") selector = ".thirdMobUpper";

  let spaniore = document.querySelector(selector);
  spaniore.innerText = mob.name;
}
function removeNamesInUpperStrip(classname) {
  let selector;
  // console.log(classname);s
  if (classname == "firstMobile") selector = ".firstMobUpper";
  if (classname == "secondMobile") selector = ".secondMobUpper";
  if (classname == "thirdMobile") selector = ".thirdMobUpper";

  let spaniore = document.querySelector(selector);
  spaniore.innerText = "Add Mobile";
}

let topcomparisonsButton = document.querySelectorAll(".set-text button");
let classNames = ["first", "second", "third"];

topcomparisonsButton.forEach((e) => {
  e.addEventListener("click", () => {
    let classToAdd = "-";
    for (let name of classNames) {
      let NameInUpperStrip = document.querySelector(`.${name} span`).innerText;
      if (NameInUpperStrip == "Add Mobile") {
        classToAdd = `${name}Mobile`;
        break;
      }
    }

    if (classToAdd === "-") {
      throw new Error("Please remove one mobile from down");
    } else {
      let mob = e.parentElement.childNodes[1].innerText;
      mob = mobiles.filter((e) => e.name == mob);

      addNamesInUpperStrip(classToAdd, mob[0]);
      document.querySelector(`.${classToAdd}`).childNodes[3].childNodes[1].src =
        mob[0].image;

      fillDown(classToAdd, mob[0]);
    }
  });
});
