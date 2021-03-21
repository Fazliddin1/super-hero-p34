class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 450,
      };
  
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
  
  
    display() {
      if (this.rope.bodyA) {
        push();
        stroke('black');
        strokeWeight(1);
        line(this.pointB.x, this.pointB.y, this.rope.bodyA.position.x, this.rope.bodyA.position.y);
        pop();
      }
    }
  }
