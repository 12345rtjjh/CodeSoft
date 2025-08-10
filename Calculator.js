const Input=document.querySelector("Input");
const button=document.querySelectorAll("button");
const buttons=Array.from(button);
let string="";
 buttons.forEach((btn)=>{
    btn.addEventListener("Click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }
        
    })
 })

