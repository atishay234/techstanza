const express=require("express");
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/Expresserror');
const Mobile=require("../models/mobileaman");
const filter=require("../utils/filter");

router.post("/",async (req,res)=>{
    const mobiles=await Mobile.find();
    console.log(mobiles);
    const result=[];
    for(mobile of mobiles){
        if(mobile.price >=req.body.min && mobile.price <=req.body.max){
            result.push(mobile);
        }
    }
    let {min,max}=req.body;
    result.sort((a,b)=>{
        return a.price-b.price;
    })
    res.render("range",{result,min,max,home:1});
});

router.post("/filter",catchAsync(async (req,res)=>{
    let result=[];
    let {brand,ram,displaySize,networkT,features,min,max,mcamera}=req.body;
    console.log(brand);
    console.log(displaySize);
    let mobiles=await Mobile.find({});
    result=filter(brand,mcamera,displaySize,features,networkT,ram,min,max,mobiles);
    res.json(result);
}));




module.exports=router;