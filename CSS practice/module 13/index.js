let start = document.querySelector(".start");
let gameArea = document.querySelector(".gameArea");
let score = document.querySelector("#score");


start.addEventListener("click", startGame);


let player = {};

function startGame() {

    start.classList.toggle("hide");
    gameArea.classList.toggle("hide");

    console.log('game started');
    player.ready = true;
    console.log(player);
    window.requestAnimationFrame(playGame);
    let car = document.createElement("div");
    car.innerHTML = "Car go Zoooom !!"
    gameArea.append(car);
}

function playGame() {
    console.log("inplay");
    if(player.ready){
    window.requestAnimationFrame(playGame);
}}

document.addEventListener("keydown", keyOn);
document.addEventListener("keyup",keyOff);

let keys = {ArrowUp : false,
    ArrowDown : false,
    ArrowLeft : false,
    ArrowRight : false}

function keyOn(event) {
    event.preventDefault();
    keys[event.key] = true;
    console.log(keys);
}

function keyOff(event) {
    event.preventDefault();
    keys[event.key] = false;
    console.log(keys);
}

