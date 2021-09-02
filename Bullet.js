export default class Bullet {
    constructor(x1, y1, direct, counterID) {
        this.x = x1;
        this.y = y1;
        this.direction = direct; 
        counterID += 1;
        this.id = counterID;
        this.node = document.createElement('div');
        this.node.id = this.id;
        this.node.className = 'bullet';
        this.ground = document.getElementById('container')
        this.ground.appendChild(this.node);
        this.node.style.top = y1 +'px';
        this.node.style.left = x1 + 'px';
        this.t;// = setInterval(this.fire.bind(this), 50);
        
    }

    fire(colony){
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


        if(this.x > this.ground.offsetHeight || this.x < 0 || this.y > this.ground.offsetHeight || this.y < 0){
            this.kaboom();
            clearInterval(tray); 
        }
        for(let i of colony){
            if(i.insideArea(this.x,this.y)){
                this.kaboom();
                scoreVal += 1;
                score = getElementById('score');
                score.innerHTML = `<div>Score: ${scoreVal}</div>`;
                i.die();
                clearInterval(tray); 
            }
         }
        
    }; 

    kaboom(){
        let element = document.getElementById(this.id);
        element.parentNode.removeChild(element);

        console.log(this.id + " deleted");
    }
};

