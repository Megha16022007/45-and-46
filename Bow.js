class Bow{
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
      }
      display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
          this.angle += 0.02;
        }
    
        if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
          this.angle -= 0.02;
        }
    
        fill("#676e6a");
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.height);
        pop();
        arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);  //(x,y,w,h,180,360)
        noFill();
      }

  

      shoot() {
        //var velocity = p5.Vector.fromAngle(Bow.angle);  // 0.2  //0.25
        velocity.mult(20);  //0.2  X 20   0.25 X20
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
      }
}