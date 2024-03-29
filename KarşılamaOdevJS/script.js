const isim=document.querySelector("#isim");
const saat=document.querySelector("#saat");
let isimPrompt=prompt("Lütfen İsminizi Giriniz...");

function getTime(){
    var now= new Date()
    var hour= now.getHours()
    var minute=now.getMinutes()
    var second=now.getSeconds()
    var date=now.getDay()

    document.getElementById("saat").innerText=hour
    document.getElementById("dakika").innerText=minute
    document.getElementById("saniye").innerText=second
    document.getElementById("gun").innerText=date
    if(date==1){
        gun.innerHTML=(`<span>Pazartesi</span>`)
    }
    if(date==2){
        gun.innerHTML=(`<span>Salı</span>`)
    }
    if(date==3){
        gun.innerHTML=(`<span>Çarşamba</span>`)
    }
    if(date==4){
        gun.innerHTML=(`<span>Perşembe</span>`)
    }
    if(date==5){
        gun.innerHTML=(`<span>Cuma</span>`)
    }
    if(date==6){
        gun.innerHTML=(`<span>Cumartesi</span>`)
    }
    if(date==7){
        gun.innerHTML=(`<span>Pazar</span>`)
    }
    
}

setInterval(function(){
getTime();
},1000)





isim.innerHTML=(`<span>${isimPrompt}</span>`)
saat.innerHTML=(`<span>${getTime()}</span>`)
dakika.innerHTML=(`<span>${getTime()}</span>`)
saniye.innerHTML=(`<span>${getTime()}</span>`)





