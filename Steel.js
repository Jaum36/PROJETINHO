class Steel{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 3,
            density: 30
        }
    
        this.body = Bodies.rectangle(x, y, 50,50,options);
        this.width = 60;
        this.height = 100;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        strokeWeight(3);
        stroke('black');
        fill('white');
        rectMode(CENTER);
        rect(0, 0,this.width, this.height);
    }
}