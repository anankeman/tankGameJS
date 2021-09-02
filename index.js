// coment
import Bullet from './Bullet.js';
import Enemy from './Enemy.js';
import Tank from './Tank.js';



// Set ground, tank and ID's counter
let ground = document.getElementById('container');
let tanky = new Tank(ground.offsetHeight);
let limit = ground.offsetHeight - tanky.box.offsetHeight;
let counterID = 1;
console.log(limit);

// Set score
let score = document.getElementById('score');
let scoreVal = 0;
score.innerHTML = `<div>Score: ${scoreVal}</div>`;

//Set instructions
let text = document.getElementById('text');
text.innerHTML = '<p>Para cambiar la direccion del tanque presione las flechas del teclado. Para disparar presione ESPACIO</p><p>To move the tank, press arrow key directions. To shot press SPACE</p>';

// Helper functions
const shoot = ()=>{ 
    let middleX = tanky.x + Math.floor(tanky.box.offsetHeight/2);
    let middleY = tanky.y + Math.floor(tanky.box.offsetWidth/2);
    console.log(middleX);
    let boom = new Bullet(middleX, middleY, tanky.direction, counterID);
    counterID = boom.id;

    boom.t = setInterval(
        boom.fire(colony)//.bind(boom)
    , 33);
}; 

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const enemyInvasion = (numEnemies) => {
    let base = [];
    for(let i=0; i< numEnemies;i++){
        let xe = getRndInteger(0, limit);
        let ye = getRndInteger(ground.offsetHeight/2, limit);
        let size = getRndInteger(10, 40);
        base[i] = new Enemy(xe, ye, size, counterID);
        counterID = base[i].id;
    }
    return base;
}

//Start game
let colony = enemyInvasion(5);


// Keyboard actions
document.addEventListener('keydown', (event)=>{
    let name = event.key;
    let code = event.code;
    if (name == 'ArrowRight'){
        clearInterval(tanky.t);
        tanky.t = setInterval(
            tanky.moveRight.bind(tanky), 33);
    } else if (name == 'ArrowLeft'){
        clearInterval(tanky.t);
        tanky.t = setInterval(
            tanky.moveLeft.bind(tanky), 33);
    } else if (name == 'ArrowDown'){
        clearInterval(tanky.t);
        tanky.t = setInterval(
            tanky.moveDown.bind(tanky), 33);
    } else if (name == 'ArrowUp'){
        clearInterval(tanky.t);
        tanky.t = setInterval(
            tanky.moveUp.bind(tanky), 33);
    } else if (code == 'Space'){
        shoot();
    }
}, true);

