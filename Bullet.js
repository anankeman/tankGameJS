class Bullet {
    constructor(x1, y1, direct) {
        this.x = x1;
        this.y = y1;
        this.direction = direct; 
        counterID += 1;
        this.id = counterID;
        this.node = document.createElement('div');
        this.node.id = this.id
        this.node.className = 'bullet'
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

        if(this.x > ground.offsetHeight || this.x < 0 || this.y > ground.offsetHeight || this.y < 0){
            this.kaboom();
            clearInterval(tray); 
        }
        for(let i of colony){
            if(i.insideArea(this.x,this.y)){
                this.kaboom();
                 scoreVal += 1;
                 score.innerHTML = `<div>Score: ${scoreVal}</div>`;
                 i.die();
            }
         }
        
    }; 

    kaboom(){
        let element = document.getElementById(this.id);
        element.parentNode.removeChild(element);

        console.log(this.id + " deleted");
    }
};

