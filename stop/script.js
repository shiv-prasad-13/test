let mm=document.querySelector(".mm")
let secounds=document.querySelector(".sec")
let minutes=document.querySelector(".mins")



let start=document.querySelector(".start")
let pause=document.querySelector(".pause")
let reset=document.querySelector(".reset")

start.addEventListener("click",function(){
    inter= setInterval(settimer,10)
 })
 pause.addEventListener("click",function(){
     clearInterval(inter)
 })
 reset.addEventListener("click",function(){
     
     mm.innerHTML=`<h2>00</h2>`
     secounds.innerHTML=`<h2>00</h2>`
     minutes.innerHTML=`<h2>00</h2>`
     clearInterval(inter)
 
 
 })

let ml=0;
let sec=0;
let min=0;
let inter;
// console.log(ml)
function settimer(){
    ml++;
    if(ml<=9){
        mm.innerHTML='0'+ml
    }
     if(ml>9){
        interval=ml
        mm.innerHTML=`<h2>${ml}</h2>`
    }
    if(ml>90){
        sec++;
        secounds.innerHTML=`<h2>${sec}</h2>`
        ml=0;
    }
   else if(sec>=60){
        minutes++;
        minutes.innerHTML=`<h2>${minutes}</h2>`
        
    }
}




// setInterval(settimer,10)

