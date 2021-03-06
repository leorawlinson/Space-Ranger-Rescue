class Spaceship {
  constructor(fps) {
    this.x = canvas.width / 2;
    this.y = canvas.height - 60;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./images/Xwing-2.png";
    this.speed = 2 * (fps.rate === 60 ? fps.ratio : 1);
    this.accelerationX = 0;
    this.accelerationY = 0;
  }
  //draw the spaceship (add global variables for this)

  drawSpaceship = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  checkWallCollisionOne = () => {
    return canvas.width < this.x + this.width || 0 > this.x;
  };

  checkWallCollisionTwo = () => {
    return canvas.height < this.y + this.height || 0 > this.y;
  };

  move = () => {
    if (this.checkWallCollisionOne()) {
      this.accelerationX *= -1;
    }
    if (this.checkWallCollisionTwo()) {
      this.accelerationY *= -1;
    }
    this.x = this.x + this.speed * this.accelerationX;
    this.y = this.y + this.speed * this.accelerationY;
  };
  //movement for spaceship
  moveLeft = () => {
    this.accelerationX = -1.1;
  };

  moveRight = () => {
    this.accelerationX = 1.1;
  };
  stopX = () => {
    this.accelerationX = 0;
  };

  moveUp = () => {
    this.accelerationY = -1.1;
  };

  moveDown = () => {
    this.accelerationY = 1.1;
  };

  stopY = () => {
    this.accelerationY = 0;
  };
}
