class Alien {
  constructor(xPos) {
    this.x = xPos;
    this.y = 0 - this.height;
    this.width = 30;
    this.height = 30;
    this.speed = 40;
  }

  //draw the aliens
  drawAliens = () => {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  };

  //move aliens
  alienMove = () => {
    this.y -= this.speed;
  };
  //collisions
}
