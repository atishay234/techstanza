let filter = (
  brand,
  mcamera,
  displaySize,
  features,
  networkT,
  ram,
  min,
  max,
  mobiles
) => {
  let result = []; //this is final filtered mobile array

  let brands = [];
  let camera = [],
    minPixel;
  let rams = [];
  let sizes = [];
  let network = [];
  let NFC = features["nfc"];
  console.log(features);
  let audioJack = features["audio"];
  let IR = features["IR"];
  console.log(NFC, audioJack, IR);

  brands = pushValues(brand, brands);
  rams = pushValues(ram, rams);
  camera = pushValues(mcamera, camera);
  minPixel = Math.min(...camera);
  sizes = pushValues(displaySize, sizes);
  network = pushValues(networkT, network);
  console.log(network);
  if (camera.length == 0) minPixel = 0;
  if (rams.length == 0) ifWholeEmpty(ram, rams);
  if (brands.length == 0) ifWholeEmpty(brand, brands);
  if (network.length == 0) ifWholeEmpty(networkT, network);

  result = fillInResult(
    result,
    rams,
    sizes,
    camera,
    brands,
    min,
    max,
    mobiles,
    NFC,
    audioJack,
    IR,
    network
  );

  return result;
};

let pushValues = (object, array) => {
  for (let property in object) {
    if (object[property] == true) {
      array.push(property);
    }
  }

  console.log("i am in the pushValues");

  return array;
};

let fillInResult = (
  result,
  rams,
  sizes,
  mcamera,
  brands,
  min,
  max,
  mobiles,
  NFC,
  audioJack,
  IR,
  network
) => {
  for (mobile of mobiles) {
    console.log(mobile.brand);
    if (
      mobile.price > min &&
      mobile.price < max &&
      brands.includes(mobile.brand.toLowerCase().trim()) &&
      rams.includes(mobile.memory.ram) &&
      network.includes(mobile.network.category)
    ) {
      if (sizes.length != 0) {
        if (sizesFilter(mobile, sizes)) result.push(mobile);
      } else {
        result.push(mobile);
      }
    }
  }
  if (NFC == true) {
    console.log(result);
    result = result.filter((mobile) => {
      if (mobile.network.nfc == "yes") return mobile;
    });
  }
  if (IR == true) {
    result = result.filter((mobile) => {
      if (mobile.network.infrared == "yes") return mobile;
    });
  }
  if (audioJack == true) {
    result = result.filter((mobile) => {
      if (
        mobile.network.audioJack == "yes" ||
        mobile.network.audioJack == "3.5mm"
      )
        return mobile;
    });
  }

  return result;
};

let ifWholeEmpty = (object, array) => {
  for (let property in object) array.push(property);

  console.log("i am in the ifWholeEmpty");

  return array;
};

let sizesFilter = (mobile, sizes) => {
  for (size of sizes) {
    console.log(size);
    if (mobile.Display.size <= size && mobile.Display.size > size - 0.25)
      return true;
  }
};

module.exports = filter;
