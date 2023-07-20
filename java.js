

let cards = []
let sum = 0
let hasblack = false
let isalive = false
let messageel= document.getElementById("message_el")
let message = " "
let sumel = document.getElementById("sumel")
let cardel= document.getElementById("cardel")

let player ={
    name : "STAKE:  ",
    money:"#5000"
}
let Playa= document.getElementById("player")
Playa.textContent= player.name + player.money



console.log(cards);


function startgame() {
    isalive= true
    let firstchild = getrandom()
    let secondchild = getrandom()
    cards = [firstchild,secondchild]
    sum = firstchild+ secondchild
    rendergame()
}


function getrandom() {
    let random =  Math.floor(Math.random()*13)+1
    if (random>10) {
        return  0
    }else if (random===1){
        return 11
    }else {
       return random
    }
   
}

function rendergame() {
    for (let i = 0; i < cards.length; i++) {
        cardel.textContent="Cards:"+cards
    }
    sumel.textContent="Sum: " + sum
    if (sum <20) {
        message= "you are still in the game, click another card to continue?"
    } else if(sum===21){
        message="you've got Blackjack"
        hasblack=true
    } else{
        message= "you're out of the game!"
        isalive=false
    }
    messageel.textContent=message
}

function newcard() {
    if (isalive===true && hasblack===false) {
        message="you cant get another card cause u are out of the game"
        let card=  getrandom()
        console.log("hdydvyddj");
        sum+=card
        cards.push(card)
       
        rendergame()
    }
}



// let fruits= ["apple","orange","apple","apple", "orange",]
// let appleshelf=document.getElementById("apple-shelf")
// let orangeshelf=document.getElementById("orange-shelf")

// function arrange() {
//     for (let index = 0; index < fruits.length; index++) {
//         if (fruits[index]==="apple") {
//             appleshelf.textContent += "apple "
           
//         }else if( fruits[index]==="orange"){
//             orangeshelf.textContent+="orange "
     
//         }
//     }
     
// }
// arrange()





