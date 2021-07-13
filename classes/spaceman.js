class Spaceman {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.width = 20;
    this.height = 20;
    this.image = new Image();
    this.image.src = "./images/space-ranger.jpg";
    this.speed = 1;
    this.directionX = 1;
    this.directionY = 1;
  }
  // draw the spaceman
  drawSpaceMan = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  // move the spaceman around the canvas
  moveSpaceMan = () => {
    this.y += this.speed * this.directionY;
    this.x += this.speed * this.directionX;
  };

  //COLLISIONS FOR SPACE MAN (WALL AND SPACESHIP)

  //1. Spaceman wall collisions
  spaceManWallCollision = () => {
    if (this.x > canvas.width - this.width) {
      this.directionX = -1;
    }
    if (this.y > canvas.height - this.height) {
      this.directionY = -1;
    }
    if (this.x < 0) {
      this.directionX = 1;
    }
    if (this.y < 0) {
      this.directionY = 1;
    }
  };

  //2. Spaceman spaceship collision (Does this go here or is it better in the spaceship class?)
}
