class Alien {
  constructor() {
    this.x = Math.floor(Math.random() * canvas.width + 1);
    this.width = 30;
    this.height = 30;
    this.speed = 1.5;
    this.y = 0 + this.height;
    this.image = new Image();
    this.image.src = "./images/alien.png";
    this.directionX = 1;
    this.directionY = 1;
    this.score = 5;
  }

  //draw the aliens
  drawAlien = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  //move aliens
  move = () => {
    this.y += this.speed * this.directionY;
    this.x += this.speed * this.directionX;
  };

  //collisions

  wallCollision = () => {
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
}
