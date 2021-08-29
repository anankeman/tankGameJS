class Tank{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.speed = 3;
        this.direction = 'left';
        this.box = document.getElementById('box');
    }

    moveRight(){
        this.x += this.speed;
        if (this.x>= limit){
            clearInterval(t);
        }
        this.box.style.left = this.x +"px";
        this.box.style.transform = "rotate(90deg) scaleY(-1)";
        this.direction = "right";
    }

    moveLeft(){
        this.x -= this.speed;
        if (this.x<=0){
            clearInterval(t);
        }
        this.box.style.left = this.x + "px";
        this.box.style.transform = "rotate(90deg)";
        this.direction = "left";
    }

    moveDown() {
        this.y += this.speed;
        if (this.y>=limit){
            clearInterval(t);
        } 
        this.box.style.top = this.y + "px";
        this.box.style.transform = "rotate(0deg)";
        this.direction = "down";
    }
    
    moveUp() {
        this.y -= this.speed;
        if (this.y<=0){
            clearInterval(t);
        }
        this.box.style.top = this.y + "px";
        this.box.style.transform = "rotate(180deg) scaleX(-1)";
        this.direction = "up";
    }  

}