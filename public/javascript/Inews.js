window.onload=()=>{
    let upVoteButtons=document.querySelectorAll(".upvote");

    upVoteButtons.forEach((e)=>{
        let ifVoted=e.getAttribute("data-upvoted");
        if(ifVoted=="true"){
            // e.style.color="white";
            // e.style.backgroundColor="red"
            e.childNodes[1].style.color="red";
        }
    });
    let downVoteButtons=document.querySelectorAll(".downvote");

    downVoteButtons.forEach((e)=>{
        let ifVoted=e.getAttribute("data-downvoted");
        if(ifVoted=="true"){
            // e.style.color="white";
            // e.style.backgroundColor="red"
            e.childNodes[0].style.color="red";
        }
    });
};




let upVoteButtons=document.querySelectorAll(".upvote");
upVoteButtons.forEach((e)=>{
   e.addEventListener("click",async()=>{
         let result=await axios.get(`https://desolate-badlands-28322.herokuapp.com/vote/upvote?news=${e.getAttribute("data-news")}`);       
         let data=result.data;
         
         if(data=="you must be signed in first"){
            let loginButton=document.querySelector(".custom-login-toggler");
            loginButton.click();
         }
         else{
             if(data.action=="insert"){
            
               e.childNodes[1].style.color="red";
               e.childNodes[2].innerText=data.upvotes;
             }
             else{
                 if(data.action=="delete"){
                    e.childNodes[1].style.color="black";
                    e.childNodes[2].innerText=data.upvotes;
                 }
                 else{
                     if(data.action=="change"){
                        e.childNodes[1].style.color="red";
                        e.childNodes[2].innerText=data.upvotes;
                        e.nextElementSibling.childNodes[0].style.color="black";
                        e.nextElementSibling.childNodes[1].innerText=data.downvotes;
                     }
                 }
             }
         }
    }) 
});
let downVoteButtons=document.querySelectorAll(".downvote");
downVoteButtons.forEach((e)=>{
   e.addEventListener("click",async()=>{
         let result=await axios.get(`https://desolate-badlands-28322.herokuapp.com/vote/downvote?news=${e.getAttribute("data-news")}`);       
         let data=result.data;
         if(data=="you must be signed in first"){
            let loginButton=document.querySelector(".custom-login-toggler");
            loginButton.click();
         }
         else{
             if(data.action=="insert"){
            
               e.childNodes[0].style.color="red";
               e.childNodes[1].innerText=data.downvotes;
             }
             else{
                 if(data.action=="delete"){
                    e.childNodes[0].style.color="black";
                    e.childNodes[1].innerText=data.downvotes;
                 }
                 else{
                     if(data.action=="change"){
                         e.childNodes[0].style.color="red";
                         e.childNodes[1].innerText=data.downvotes;
                         e.previousElementSibling.childNodes[1].style.color="black";
                         e.previousElementSibling.childNodes[2].innerText=data.upvotes;


                     }
                 }
             }
         }
    }) 
})