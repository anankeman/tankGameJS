class Enemy {
    constructor(xe,ye,size){
        this.x =xe;
        this.y = ye;
        this.size = size;
        //ground = document.getElementById('container');
        counterID += 1;
        this.id = counterID;
        this.node = document.createElement('div');
        this.node.id = this.id
        this.node.className = 'enemy'
        ground.appendChild(this.node) 
        this.node.style.top = ye +'px';
        this.node.style.left = xe + 'px';
        this.node.style.width = size + 'px';
        this.node.style.height = size + 'px';

    }

    insideArea(x,y){
        
        // poly dimension [xmin, xmax, ymin, ymax]
       
        let xmin = this.x;
        let xmax = this.x + this.size;
        let ymin = this.y;
        let ymax = this.y + this.size;
        let inside = false;

        if (x > xmin && x <= xmax){
            if (y > ymin && y <= ymax){
                inside = true;
            }         
        }
        return inside;
    }
    die(){
        let element = document.getElementById(this.id);
        element.parentNode.removeChild(element);

        console.log(this.id + " enemy deleted");
    }
	
	
};