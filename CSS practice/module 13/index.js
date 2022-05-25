
let start = document.querySelector(".start");
let gameArea = document.querySelector(".gameArea");
let score = document.querySelector("#score");


start.addEventListener("click", startGame);


let player = {speed:5};

function startGame() {

    start.classList.toggle("hide");
    gameArea.classList.toggle("hide");

    console.log('game started');
    player.ready = true;
    console.log(player);
    window.requestAnimationFrame(playGame);
    let car = document.createElement("div");
    car.classList.add("class","car");
    car.innerHTML = "Car go Zoooom !!"
    console.log(player);
    gameArea.append(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    console.log(player);
}

function playGame() {
    console.log("inplay");
    let userCar = document.querySelector(".car");

    if(player.ready){
        if(keys.ArrowUp) {player.y +=player.speed};
        if(keys.ArrowDown) {player.y -=player.speed};
        if(keys.ArrowLeft) {player.x -=player.speed};
        if(keys.ArrowRight) {player.x +=player.speed};

        userCar.style.bottom= player.y + "px";
        userCar.style.left = player.x + "px";
    window.requestAnimationFrame(playGame);
}
}

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

