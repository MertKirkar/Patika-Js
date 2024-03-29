// let world=document.querySelector("#app")


// world.innerHTML=("Deneme")

// console.log(world.innerHTML)

// body.style.backgroundColor("Red")

// let adSoyad=prompt("Lütfen Adınızı Soyadınızı Giriniz:");
// let greeting=document.querySelector("#app")


// greeting.innerHTML=adSoyad

// let n="12"

// if(N%2 ===1){
//     console.log("Weird")
// }else if( N%2 ===0 && n >=2 && n<= 5){
//     console.log("Not Weird")
// }else if( N%2 ===0 && n>=6 && n<=20){
//     console.log("Weird")
// }else if(N%2 ===0 && n>20){
 
//  console.log("Not Weird")   
// }



// if(n %2 === 0){
//     console.log("siktir git")
// }


function getLetter(s) {
    let letter;
    // Write your code here
    letter="adfgt"
    if(letter[0] === "a" ||" e" || "i" || "o" || "u"){
        console.log("A")
    }else if(letter[0] === "b" || "c" || "d" || "f" || "g"){
        console.log("B")
    }
    else if(letter[0] === "h"||"j"||"k"||"l"||"m"){
        console.log("C")
    }
    else if(letter[0] ===  "n"||"p"||"q"||"r"||"s"||"t"||"v"||"w"||"x"||"y"||"z") {
        console.log("D")
    }
    return letter;
}

getLetter()