firstCard = 10
secondCard = 11
sum = firstCard + secondCard


function renderGame() {
    
     if (sum > 21) {
        console.log("You are out")
}    else if (sum === 21) {
        console.log("blackjack")
}    else {
        console.log("Draw a new Card?")
}
}


