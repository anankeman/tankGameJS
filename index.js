// coment
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
score.style.padding= "8px";
score.style.backgroundColor = "Black";
score.style.color = "white";
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

class Bullet {
    constructor(x1, y1, direct) {
        this.x = x1;
        this.y = y1;
        this.direction = direct; 
        counterID += 1;
        this.id = counterID;
        this.node = document.createElement('div');
        this.node.id = this.id
        this.node.className = 'b'
        ground.appendChild(this.node) //`<div class="b" id="${this.id}"></div>`;
        this.node.style.top = y1 +'px';
        this.node.style.left = x1 + 'px';
    }

    fire(){
        let power = 5;
        if (this.direction =='up'){
            this.y -= power;
            this.node.style.top = this.y +'px';
        } else if (this.direction == 'down'){
            this.y += power;
            this.node.style.top = this.y +'px';
        } else if (this.direction == 'right'){
            this.x += power;
            this.node.style.left = this.x +'px';
        } else if (this.direction == 'left'){
            this.x -= power;
            this.node.style.left = this.x +'px';
        };

        if(this.x > limit || this.x < 0 || this.y > limit || this.y < 0){
            this.kaboom();
            scoreVal += 1;
            score.innerHTML = `<div>Score: ${scoreVal}</div>`;
        }
    }; 

    kaboom(){
        let element = document.getElementById(this.id);
        element.parentNode.removeChild(element);
        console.log(this.id + " deleted");
    }
};

const shoot = ()=>{ 

    middleX = x + Math.floor(box.offsetHeight/2);
    middleY = y + Math.floor(box.offsetWidth/2);
    console.log(middleX);
    boom = new Bullet(middleX, middleY, direction);

    let tray = setInterval(function(){
        boom.fire();
    }, 40);

};

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

