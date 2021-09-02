export default class Tank{
    constructor(groundHeight){
        this.x = 0;
        this.y = 0;
        this.speed = 3;
        this.direction = 'left';
        this.box = document.getElementById('box');
        this.limit = groundHeight - this.box.offsetHeight;
        this.box.style.left = 0;
        this.box.style.top = 0;
        this.t = setInterval(this.moveLeft.bind(this), 33);
        
    }

    moveRight(){
        if (this.x>= this.limit){
            clearInterval(this.t);
        } else {
            this.x += this.speed;
        }
        this.box.style.left = this.x +"px";
        this.box.style.transform = "rotate(90deg) scaleY(-1)";
        this.direction = "right";
    }

    moveLeft(){
        if (this.x<=0){
            clearInterval(this.t);
        } else {
            this.x -= this.speed;
        }
        this.box.style.left = this.x + "px";
        this.box.style.transform = "rotate(90deg)";
        this.direction = "left";
    }

    moveDown() { 
        if (this.y>=this.limit){
            clearInterval(this.t);
        } else {
            this.y += this.speed;
        }
        this.box.style.top = this.y + "px";
        this.box.style.transform = "rotate(0deg)";
        this.direction = "down";
    }
    
    moveUp() {
        if (this.y<=0){
            clearInterval(this.t);
        } else {
            this.y -= this.speed;
        }
        this.box.style.top = this.y + "px";
        this.box.style.transform = "rotate(180deg) scaleX(-1)";
        this.direction = "up";
    }


}