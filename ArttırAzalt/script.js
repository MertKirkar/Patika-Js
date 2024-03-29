let sayi=0;
const arttir=document.querySelector("#arttir")
const azalt=document.querySelector("#azalt")
const sayiDOM=document.querySelector("#sayi")


// arttir.addEventListener("click",clickArttir)
// azalt.addEventListener("click",clickAzalt)

// sayiDOM.innerHTML=(sayi)
// function clickArttir(){
//     sayiDOM.innerHTML=(sayi+=1)
// }
// function clickAzalt(){
//     sayiDOM.innerHTML=(sayi-=1)
// }

sayiDOM.innerHTML=(sayi)

arttir.addEventListener("click",e=>{
    sayiDOM.innerHTML=(sayi+=1)
})
azalt.addEventListener("click",e=>{
    sayiDOM.innerHTML=(sayi-=1)
})