let start = document.querySelector(".start");
let gameArea = document.querySelector(".gameArea");
let score = document.querySelector("#score");


start.addEventListener("click", startGame);

function startGame() {
    console.log('game started');
}


document.addEventListener("keydown", keyOn);
document.addEventListener("keyup",keyOff);


function keyOn(event) {
    event.preventDefault();
    console.log(event.key);
}

function keyOff(event) {
    event.preventDefault();
    console.log(event.key);
}