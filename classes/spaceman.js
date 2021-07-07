class Spaceman {
  constructor() {
    this.Xpos = 50;
    this.Ypos = 50;
    this.width = 20;
    this.height = 20;
    this.speed = 1;
    this.directionX = 1;
    this.directionY = 1;
  }
  // draw the spaceman
  drawSpaceMan = () => {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.rect(this.Xpos, this.Ypos, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  };

  // move the spaceman around the canvas
  moveSpaceMan = () => {
    this.Ypos += this.speed * this.directionY;
    this.Xpos += this.speed * this.directionX;
  };

  //COLLISIONS FOR SPACE MAN (WALL AND SPACESHIP)

  //1. Spaceman wall collisions
  spaceManWallCollision = () => {
    if (this.Xpos > canvas.width - this.width) {
      this.directionX = -1;
    }
    if (this.Ypos > canvas.height - this.height) {
      this.directionY = -1;
    }
    if (this.Xpos < 0) {
      this.directionX = 1;
    }
    if (this.Ypos < 0) {
      this.directionY = 1;
    }
  };

  //2. Spaceman spaceship collision (Does this go here or is it better in the spaceship class?)
}
