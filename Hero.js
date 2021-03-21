class Hero {
    constructor(x,y,r){
        var options = { 
        density: 1, 
        frictionAir: 1
      };

        this.body=Bodies.circle(x,y,r, options)
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("superhero.png");
        World.add(world, this.body);
  
      }
      display(){    
        push()
        translate(this.body.position.x, this.body.position.y-100);
        rectMode(CENTER)
        fill('orange')
        imageMode(CENTER);
        image(this.image, 0,0,this.r+150, this.r)
        pop()
              
      }
  }