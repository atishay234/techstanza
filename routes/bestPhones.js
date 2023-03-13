const express=require("express");
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/Expresserror');
const Mobile=require("../models/mobileaman");



router.get("/",async (req,res)=>{
    let mobiles=await Mobile.find({});
    mobiles.length=10;
    let {under}=req.query;


    
    res.render("best",{mobiles,under});
});


module.exports=router;