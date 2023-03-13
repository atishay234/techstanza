let mongoose=require("mongoose");
const Schema=mongoose.Schema;
// const dbUrl=process.env.DB_URL;





// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true ,
//     useFindAndModify:false
// }
// mongoose.connect("mongodb+srv://Atishay:WMTU4NnUcnka5rm6@cluster0.upzac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })


let newsSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
     }
    ,category:{
         type:String,
         required:true
    },
    brand:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    mainNews:{
        type:String,
        required:true
    },
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }

    ],
    upVotes:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    downVotes:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ]




});


let News=mongoose.model("News",newsSchema);

module.exports=News;



// let seed=async ()=>{
   
//     let ne=new News({image:"https://cdn.pocket-lint.com/r/s/1200x/assets/images/153137-phones-news-feature-motorola-moto-g9-plus-release-date-specs-price-and-features-image1-edjr5dpsai.jpg",date:Date.now(),category:"mobile",brand:"motorola",heading:"motorola going to pass updates to their  2020 line up soon",mainNews:"motorolians !! you are going to sonn have new updates from motorola as they have announced ont heir official twitter handle "})
//     let ne1=new News({image:"https://www.91-cdn.com/hub/wp-content/uploads/2021/04/samsung-galaxy-a22-image-featured.jpeg",date:Date.now(),category:"mobile",brand:"samsung",heading:"redmi going to launch new phone in their mid range",mainNews:"samsung just slipped out their new 168MP camera technology,seems like this tech is coming in their s22 ultra series"})
//     let ne2=new News({image:"https://images.hindustantimes.com/tech/img/2021/01/09/960x540/image_-_2021-01-09T133720.661_1610179640928_1610179646136.jpg",date:Date.now(),category:"mobile",brand:"redmi",heading:"redmi going to launch new phone in their mid range",mainNews:"redmi actually recently on their site announced that they are going to launch their new mobile in the mid range segment"})
//     let ne3=new News({image:"https://fdn.gsmarena.com/imgroot/news/21/04/iphone-13-product-red-renders/-1200/gsmarena_002.jpg",date:Date.now(),category:"mobile",brand:"apple",heading:"apples CEO tim cook anounced yesterday that they are going to enhance features",mainNews:"apple is always quite serious about security features in thier whole gamet of products whether it is smartphone,laptops,pc or any other wireless devices"})
//     let ne4=new News({image:"https://images.firstpost.com/wp-content/uploads/2020/09/realme-7-7pro.jpg",date:Date.now(),category:"mobile",brand:"realme",heading:"realme juat taunted their biggest competitor redmi today morning",mainNews:"they shared a glance of the comparison b/n the other 108 MP cameras and their own 108 mp camera ,seems very funny competition"});
    
//     await ne.save();
//     await ne1.save();
//     await ne2.save();
//     await ne3.save();
//     await ne4.save();


// }

// seed();