const accordians=document.querySelectorAll(".accordian");

accordians.forEach((acc)=>{
const ans=acc.querySelector(".ans");
const icon=acc.querySelector(".icon");




acc.addEventListener("click",()=>{
   
    if(icon.classList.contains('active')){
        icon.classList.remove('active');
        ans.style.maxHeight=null;
    }else{
        icon.classList.add('active');
        ans.style.maxHeight=ans.scrollHeight + 'px';
    }
})
})


const ham=document.querySelector(".menu");
const coll=document.querySelector(".collapse");

if(screen.width<767){
    ham.addEventListener("click",()=>{
        coll.classList.toggle("hide");
    })
}