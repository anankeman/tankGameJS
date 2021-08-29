// coment

//import Bullet from './Bullet';

let x = 0;
let y = 0;
let box = document.getElementById('box');
let ground = document.getElementById('container');
let limit = ground.offsetHeight - box.offsetHeight;
let speed = 3;
let counterID = 1;
console.log(limit);
let direction = "left";

let score = document.getElementById('score');
let scoreVal = 0;
score.innerHTML = `<div>Score: ${scoreVal}</div>`;

let text = document.getElementById('text');
text.innerHTML = '<p>Para cambiar la direccion del tanque presione las flechas del teclado. Para disparar presione ESPACIO</p><p>To move the tank, press arrow key directions. To shot press SPACE</p>';

function moveRight(){
    x += speed;
    if (x>= limit){
        clearInterval(t);
    }
    box.style.left = x +"px";
    box.style.transform = "rotate(90deg) scaleY(-1)";
    direction = "right";
}

function moveLeft() {
    x -= speed;
    if (x<=0){
        clearInterval(t);
    }
    box.style.left = x + "px";
    box.style.transform = "rotate(90deg)";
    direction = "left";
}

function moveDown() {
    y += speed;
    if (y>=limit){
        clearInterval(t);
    } 
    box.style.top = y + "px";
    box.style.transform = "rotate(0deg)";
    direction = "down";
}

function moveUp() {
    y -= speed;
    if (y<=0){
        clearInterval(t);
    }
    box.style.top = y + "px";
    box.style.transform = "rotate(180deg) scaleX(-1)";
    direction = "up";
}


const shoot = ()=>{ 

    middleX = x + Math.floor(box.offsetHeight/2);
    middleY = y + Math.floor(box.offsetWidth/2);
    console.log(middleX);
    boom = new Bullet(middleX, middleY, direction);

    var tray = setInterval(function(){
        boom.fire();
    }, 33);

    if(boom.x > ground.offsetHeight || boom.x < 0 || boom.y > ground.offsetHeight || boom.y < 0){
        boom.kaboom();
        clearInterval(tray); 
    }
 
    for(let i of colony){
       if(i.insideArea(boom.x,boom.y)){
            boom.kaboom();
            scoreVal += 1;
            score.innerHTML = `<div>Score: ${scoreVal}</div>`;
       }
    }
};

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const enemyInvasion = () => {
    let base = [];
    for(let i=0; i< 5;i++){
        let xe = getRndInteger(0, limit);
        let ye = getRndInteger(ground.offsetHeight/2, limit);
        let size = getRndInteger(10, 40);
        //let badGuy = new Enemy(xe, ye, size);
        base[i] = new Enemy(xe, ye, size);
    }
    return base;
}
let colony = enemyInvasion();


let t = setInterval(moveLeft, 33);



document.addEventListener('keydown', (event)=>{
    let name = event.key;
    let code = event.code;
    if (name == 'ArrowRight'){
        clearInterval(t);
        t = setInterval(moveRight, 33);
    } else if (name == 'ArrowLeft'){
        clearInterval(t);
        t = setInterval(moveLeft, 33);
    } else if (name == 'ArrowDown'){
        clearInterval(t);
        t = setInterval(moveDown, 33);
    } else if (name == 'ArrowUp'){
        clearInterval(t);
        t = setInterval(moveUp, 33);
    } else if (code == 'Space'){
        shoot();
    }
}, true);

