// jshint esversion:8
//

const mongoose = require("mongoose");
//
//
// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// };
// mongoose.connect("mongodb+srv://Atishay:WMTU4NnUcnka5rm6@cluster0.upzac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",connectionParams)
//     .then( () => {
//         console.log('Connected to database ');
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     });

const mobileSchema = new mongoose.Schema({
  name: {
    type: String,
    //required:true
  },
  price: {
    type: Number,
    //required:true
  },
  mainCamera: {
    noOfCameras: {
      type: Number,
      //required:true
    },
    pixels: Array,
  },
  frontCamera: {
    noOfCameras: {
      type: Number,
      //required:true
    },
    pixels: Array,
  },
  brand: {
    type: String,
    //required:true
  },
  image: {
    type: String,
    //required:true
  },
  launchDate: {
    type: Date,
    //required:true
  },
  sound: {
    type: String,
  },
  simType: {
    type: String,
  },
  Display: {
    size: String,
    resolution: String,
    GPU: String,
    category: String,
    other: String,
  },
  processor: {
    operatingSystem: String, //Android 10
    category: String, //mediatek dimensity 800U
    Core: String, //octa core
    clockSpeed: String, //2.4GHz
  },
  memory: {
    internalStorage: String,
    ram: String,
    expandableStorage: String,
  },
  network: {
    category: String,
    bluetoothVersion: String,
    nfc: String,
    infrared: String,
    audioJack: String,
  },
  BatteryCapacity: String,
  Dimensions: {
    width: Number,
    height: Number,
    weight: Number,
  },
  warrantyPeriod: Number,
  userInterface: String,
  box: String,
  colorVariants: String,
  bodyType: String,
  review: String,
  ourOpinion: String,
});
const Mobile = mongoose.model("Mobile", mobileSchema);
module.exports = Mobile;
