class Bob {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        };
        this.body = Bodies.circle(x, y, 20, options);
        
        this.radius = 50;
       // this.image = loadImage("paper.png");
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
         fill("pink");
        circle(pos.x,pos.y,40);
        // push();
        //translate(pos.x,pos.y);
       // imageMode(CENTER);
        //image(this.image, pos.x, pos.y, this.radius, this.radius);


        // pop();
    }
}
