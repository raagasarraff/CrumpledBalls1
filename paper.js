class Paper{

    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r=r
        World.add(world, this.body);
        //this.image = loadImage("paper1.png");
    }

    display(){

        //image(this.image, 200, 70);
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0, this.r, this.r);
        //imageMode(CENTER);

     // image(this.image, 0,0, this.width, this.height);
      pop();



    }
}