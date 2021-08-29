// coment


// Set ground, tank and ID's counter
let ground = document.getElementById('container');
let tanky = new Tank();
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
    middleX = tanky.x + Math.floor(tanky.box.offsetHeight/2);
    middleY = tanky.y + Math.floor(tanky.box.offsetWidth/2);
    console.log(middleX);
    boom = new Bullet(middleX, middleY, tanky.direction);

    var tray = setInterval(function(){
        boom.fire();
    }, 33);
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
        base[i] = new Enemy(xe, ye, size);
    }
    return base;
}

//Start game
let colony = enemyInvasion(5);
let t = setInterval(function(){
    tanky.moveLeft();
    }, 33);


// Keyboard actions
document.addEventListener('keydown', (event)=>{
    let name = event.key;
    let code = event.code;
    if (name == 'ArrowRight'){
        clearInterval(t);
        t = setInterval(function(){
            tanky.moveRight();
        }, 33);
    } else if (name == 'ArrowLeft'){
        clearInterval(t);
        t = setInterval(function(){
            tanky.moveLeft();
        }, 33);
    } else if (name == 'ArrowDown'){
        clearInterval(t);
        t = setInterval(function(){
            tanky.moveDown();
        }, 33);
    } else if (name == 'ArrowUp'){
        clearInterval(t);
        t = setInterval(function(){
            tanky.moveUp();
        }, 33);
    } else if (code == 'Space'){
        shoot();
    }
}, true);

