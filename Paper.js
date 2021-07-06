class Paper {

    constructor(x,y,radius){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius
        this.image = loadImage("paper.png");
        
        World.add(world,this.body)
  }

  display(){

    var paperpos = this.body.position;
    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER)
    strokeWeight(4);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r)
   // ellipse(0,0,this.r,this.r);
    pop()
    
  }
}