// coment
console.log('Hola mundo');

let x = 0;
let y = 0;
let box = document.getElementById('box');
let ground = document.getElementById('container');
let limit = ground.offsetHeight - box.offsetHeight;
let speed = 3;
console.log(limit);

function moveRight(){
    x += speed;
    if (x>= limit){
        clearInterval(t);
    }
    box.style.left = x +"px";
    box.style.transform = "rotate(90deg) scaleY(-1)";
}

function moveLeft() {
    x -= speed;
    if (x<=0){
        clearInterval(t);
    }
    box.style.left = x + "px";
    box.style.transform = "rotate(90deg)";
}

function moveDown() {
    y += speed;
    if (y>=limit){
        clearInterval(t);
    } 
    box.style.top = y + "px";
    box.style.transform = "rotate(0deg)";
}

function moveUp() {
    y -= speed;
    if (y<=0){
        clearInterval(t);
    }
    box.style.top = y + "px";
    box.style.transform = "rotate(180deg) scaleX(-1)";
}

let t = setInterval(moveLeft, 33);

document.addEventListener('keydown', (event)=>{
    let name = event.key;
    let code = event.code;
    if (name == 'ArrowRight'){
        //moveRight();
        clearInterval(t);
        t = setInterval(moveRight, 33);
    } else if (name == 'ArrowLeft'){
        //moveLeft();
        clearInterval(t);
        t = setInterval(moveLeft, 33)
    } else if (name == 'ArrowDown'){
        clearInterval(t);
        t = setInterval(moveDown, 33)
    } else if (name == 'ArrowUp'){
        clearInterval(t);
        t = setInterval(moveUp, 33)
    }
}, true);

