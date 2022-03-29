
let sum = 0
let firstCard
let secondCard
let card
let cards = []


let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function newCard() {
        card = getRandomCard()
        cards.push(card)
}

function renderGame() {
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
        sumEl.textContent = "Sum: " + sum

    


     if (sum > 21) {
        messageEl.textContent ="You are out"
}    else if (sum === 21) {
        messageEl.textContent = "blackjack"
}    else {
        messageEl.textContent = "Draw a new Card?"
}
}


function startGame() {
        cards = []
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame()
        console.log(cards)


}

function getRandomCard() {

        let randomNumber = Math.floor(Math.random()*13) + 1

        return randomNumber
}

console.log(cards)
