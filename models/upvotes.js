const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const  upVoteSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});


const Upvote=mongoose.model("Upvote",upVoteSchema);

module.exports=Upvote;
