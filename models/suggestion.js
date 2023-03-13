const mongoose=require("mongoose");


let suggestionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true  
    },
    suggestion:{
        type:String,
        required:true
    } 

})


const Suggestion=mongoose.model("Suggestion",suggestionSchema);


module.exports=Suggestion;