let btn = document.querySelector("#btn")
let body = document.querySelector("body")
let mode = 'light';

btn.addEventListener("click",()=>{
    if(mode==='light'){
        mode = 'dark';
        body.style.backgroundColor = "black";
        btn.style.backgroundColor ="white";
        btn.style.color ="black";
    }
    else{
        mode ='light';
        body.style.backgroundColor = "white";
        btn.style.backgroundColor ="black";
        btn.style.color ="white";
    }
})