export default class Bullet {
    constructor(x1, y1, direction, counterID, colony) {
        this.x = x1;
        this.y = y1;
        this.direction = direction; 
        counterID += 1;
        this.id = counterID;
        this.node = document.createElement('div');
        this.node.id = this.id;
        this.node.className = 'bullet';
        this.ground = document.getElementById('container')
        this.ground.appendChild(this.node);
        this.node.style.top = y1 +'px';
        this.node.style.left = x1 + 'px';
        this.colony = colony;
        this.t;// = setInterval(this.fire.bind(this), 50);
        
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

        //hit a border
        if(this.x > this.ground.offsetHeight || this.x < 0 || this.y > this.ground.offsetHeight || this.y < 0){
            this.kaboom(); 
        }
        //hit an enemy
        for(let i of this.colony){
            if(i.insideArea(this.x,this.y)){
                this.kaboom();
                let score = document.getElementById('score');
                let scoreVal = parseInt(score.innerText.split(':')[1],10);
                score.innerText = `Score: ${scoreVal + 1}`;
                i.die();
            }
         }
        
    }; 

    kaboom(){
        let element = document.getElementById(this.id);
        element.parentNode.removeChild(element);
        clearInterval(this.t);
        console.log(this.id + " deleted");
    }
};

