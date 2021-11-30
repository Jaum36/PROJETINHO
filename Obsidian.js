class Obs{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 12,
            density: 100,
        }

        this.body = Bodies.rectangle(x, y, this,50, 50, options);
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
        fill(48, 25, 52);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
    }
}