const buttonBlack=document.querySelector("#black")
const buttonYellow=document.querySelector("#yellow")
const buttonRed=document.querySelector("#red")
const buttonBlue=document.querySelector("#blue")
const div=document.querySelector(".div")
const reset=document.querySelector("#reset")

buttonBlack.addEventListener("click",e=>{
    div.classList.toggle("black")
    div.classList.remove("yellow")
    div.classList.remove("red")
    div.classList.remove("blue")
    div.innerHTML=` <p style="color:white;font-weight:600;"> Arka Plan Siyah Eklendi </p> `
})

buttonYellow.addEventListener("click",e=>{
    div.classList.toggle("yellow")
    div.classList.remove("black")
    div.classList.remove("red")
    div.classList.remove("blue")
    div.innerHTML=` <p style="color:red;font-weight:600;"> Arka Plan Sarı Eklendi </p> `
})
buttonBlue.addEventListener("click",e=>{
    div.classList.toggle("blue")
    div.classList.remove("black")
    div.classList.remove("yellow")
    div.classList.remove("red")
    div.innerHTML=` <p style="color:white;font-weight:600;"> Arka Plan Mavi Eklendi </p> `
})
buttonRed.addEventListener("click",e=>{
    div.classList.toggle("red")
    div.classList.remove("black")
    div.classList.remove("yellow")
    div.classList.remove("blue")
    div.innerHTML=` <p style="color:white;font-weight:600;"> Arka Plan Kırmızı Eklendi </p> `
    
})

reset.addEventListener("click",e=>{
    div.classList.remove("red","black","yellow","blue")
    div.innerHTML=` <p style="text-align:center;font-weight:600;">Background Resetlendi</p> `
   
})


