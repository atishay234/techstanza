const mongoose=require("mongoose");


let subscriberSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
});

let Subscriber=mongoose.model("Subscriber",subscriberSchema);



module.exports=Subscriber;