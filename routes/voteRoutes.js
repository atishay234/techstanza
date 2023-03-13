const express=require("express");

const router=express.Router();
const {isLoggedIn}=require("../middleware");
const News=require("../models/news");

router.get("/upvote",isLoggedIn,async(req,res)=>{
  let {news}=req.query;
  let foundNews=await News.findById(news);
  for(let i=0;i<foundNews.downVotes.length;i++){
    if(foundNews.downVotes[i]==req.user.id){
      foundNews.downVotes.splice(i,1);
      foundNews.upVotes.push(req.user.id);
      await foundNews.save();
      let data={"downvotes":foundNews.downVotes.length,"upvotes":foundNews.upVotes.length,"action":"change"}
      return res.json(data);
    }
  }
  for(let i=0;i<foundNews.upVotes.length;i++){
   if(foundNews.upVotes[i]==req.user.id){
      foundNews.upVotes.splice(i,1);
      await foundNews.save();
      let data={"upvotes":foundNews.upVotes.length,"downvotes":foundNews.downVotes.length,"action":"delete"}      
      return res.json(data);
    }
  }
  foundNews.upVotes.push(req.user.id);
  await foundNews.save();
  let data={"upvotes":foundNews.upVotes.length,"downvotes":foundNews.downVotes.length,"action":"insert"}
  return res.json(data);
});   



router.get("/downvote",isLoggedIn,async(req,res)=>{
  let {news}=req.query;
  let foundNews=await News.findById(news);
  for(let i=0;i<foundNews.upVotes.length;i++){
    if(foundNews.upVotes[i]==req.user.id){
       foundNews.upVotes.splice(i,1);
       foundNews.downVotes.push(req.user.id);
       await foundNews.save();
       let data={"upvotes":foundNews.upVotes.length,"downvotes":foundNews.downVotes.length,"action":"change"}
       return res.json(data);
     }
   }
  for(let i=0;i<foundNews.downVotes.length;i++){
    if(foundNews.downVotes[i]==req.user.id){
      foundNews.downVotes.splice(i,1);
      await foundNews.save();
      let data={"upvotes":foundNews.upVotes.length,"downvotes":foundNews.downVotes.length,"action":"delete"}
      return res.json(data);
    }
  }
  foundNews.downVotes.push(req.user.id);

  await foundNews.save();
  let data={"upvotes":foundNews.upVotes.length,"downvotes":foundNews.downVotes.length,"action":"insert"}
  res.json(data);
})   






module.exports=router;