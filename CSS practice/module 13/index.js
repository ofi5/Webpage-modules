
let start = document.querySelector(".start");
const gameArea = document.querySelector(".gameArea");
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
    car.setAttribute("class","car");
     car.innerHTML = "Car go Zoom !!"
    console.log(player);
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    console.log(player);
    let road = gameArea.getBoundingClientRect();
    console.log(car.getBoundingClientRect());
    console.log(road);

}
    

function playGame() {
    console.log("inplay");
    let userCar = document.querySelector(".car");

    let road = gameArea.getBoundingClientRect();
    console.log(road);
    
    
    if(player.ready){
        if(keys.ArrowUp && player.y < road.bottom-75) {player.y +=player.speed};
        console.log(player);
        if(keys.ArrowDown && player.y > road.top) {player.y -=player.speed};
        if(keys.ArrowLeft && player.x > 0) {player.x -=player.speed};
        if(keys.ArrowRight && player.x < 190) {player.x +=player.speed};

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
