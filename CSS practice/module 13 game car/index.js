
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
    
    for (let i=0; i<5; i++) {
        let enemyCar = document.createElement("div");
        enemyCar.setAttribute("class","enemyCar");
        enemyCar.y = -1*(i*200);
        enemyCar.style.top = enemyCar.y + 'px';
        enemyCar.x= 10;
        enemyCar.style.left = Math.floor(Math.random()*190)+'px';    
        gameArea.append(enemyCar);
    }

    let car = document.createElement("div");
    car.setAttribute("class","car");
    car.innerHTML = "Car go Zoom !!"
   
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    
    let road = gameArea.getBoundingClientRect();
    console.log(car.getBoundingClientRect());
   
    window.requestAnimationFrame(playGame);

}

function moveEnemy(){
    let enemy = document.querySelectorAll(".enemyCar");
    
    enemy.forEach(function(item){
        // console.log(item);
            if (item.y>1000){
                
                item.y-=1000;
                item.style.left = Math.floor(Math.random()*190)+'px';
                
            }
           
            
            item.y +=3;

            

            item.style.top = item.y +'px';
            
            
            

    });
}

function playGame() {
    // console.log("inplay");
    let userCar = document.querySelector(".car");

    let road = gameArea.getBoundingClientRect();
    // console.log(road);
    let lines = document.querySelectorAll(".line");
//    console.log(lines);
    lines.forEach(function(item){
        // console.log(item.y);
         if(item.y>760){
             item.y -= 760;
         }
        item.y+=8;
        item.style.top = item.y +'px';
        // console.log(item.style.top);
    });    

      moveEnemy();
    
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
