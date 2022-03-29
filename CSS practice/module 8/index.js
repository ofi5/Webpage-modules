
let sum = 0
let firstCard
let secondCard
let card
let cards = []
isAlive = false
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function newCard() {

        if (isAlive) {      
        card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
}}

function renderGame() {
        cardsEl.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++) {
                cardsEl.textContent += cards[i]  + " " 
        }
        sumEl.textContent = "Sum: " + sum

     if (sum > 21) {
        messageEl.textContent ="You are out"
        isAlive = false
}    else if (sum === 21) {
        messageEl.textContent = "blackjack"
        isAlive = false
}    else {
        messageEl.textContent = "Draw a new Card?"
        isAlive = true
}
}


function startGame() {
        cards=[]

        firstCard = getRandomCard()
        secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame()
        


}

function getRandomCard() {

        let randomNumber = Math.floor(Math.random()*13) + 1

        if (randomNumber > 10) {
                randomNumber = 10
        }else if (randomNumber === 1) {
                randomNumber = 11
        } 

        return randomNumber
}


