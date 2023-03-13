const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const  downVoteSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});


const Downvote=mongoose.model("Downvote",upVoteSchema);

module.exports=Upvote;
