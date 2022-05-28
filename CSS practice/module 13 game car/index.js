
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

    for (let x=0; x<20; x++) {
        let line = document.createElement("div");
        line.setAttribute("class", "line");
        line.y = x*40;
        line.style.top = (x*40) +'px';
        gameArea.appendChild(line);

    }
    


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
    window.requestAnimationFrame(playGame);

}
    

function playGame() {
    // console.log("inplay");
    let userCar = document.querySelector(".car");

    let road = gameArea.getBoundingClientRect();
    // console.log(road);
    let lines = document.querySelectorAll(".line");
   
    lines.forEach(function(item){
    // {   console.log(item.y);
        if (item.y > 120){
            item.y-=200;
        }
        item.y += player.speed;
        item.style.top += item.y +'px';
        console.log(item.style.top);
    
    });    

    
    
    if(player.ready){
        if(keys.ArrowUp && player.y > road.y) {player.y -=player.speed};
        console.log(player);
        if(keys.ArrowDown && player.y < road.height-75) {player.y +=player.speed};
        if(keys.ArrowLeft && player.x > 0) {player.x -=player.speed};
        if(keys.ArrowRight && player.x < road.width-50) {player.x +=player.speed};

        userCar.style.top= player.y + "px";
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
