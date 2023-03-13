const express=require("express");
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/Expresserror');
const Mobile=require("../models/mobileaman");



router.get("/",async (req,res)=>{
    let {feature}=req.query;
    console.log(feature);
    let mobiles=await Mobile.find({});
     console.log(mobiles);
    res.render("specific",{feature,mobiles});
});



module.exports=router;