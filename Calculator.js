const Input=document.querySelector("#Input");
const button=document.querySelectorAll("button");
const buttons=Array.from(button);
let string="";
 buttons.forEach((btn)=>{
    btn.addEventListener("Click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }
         else if(e.target.innerHTML=="AC")
        {
            string="";
            input.value=string;
            

        }
        else if(e.target.innerHTML=="Del"){
            string=string.substring(0,string.length-1);
            input.value=string;

        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
 })

