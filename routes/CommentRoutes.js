const express=require("express");
const router=express.Router({mergeParams:true});
const Comment=require("../models/comments");
const News=require("../models/news");
const {isLoggedIn}=require("../middleware");
router.post("/",isLoggedIn,async (req,res)=>{
  let {comment}=req.body;

  let newComment=new Comment({text:comment});
  newComment.author=req.user;
  let {id}=req.params;
  let foundNews=await News.findById(id).populate("comments");
  foundNews.comments.push(newComment);
  await newComment.save();
  await foundNews.save();
  console.log(foundNews);
  res.redirect(`/news/${id}`);

})




module.exports=router;