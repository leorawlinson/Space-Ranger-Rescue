class Spaceman {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.speed = 1;
  }
  // draw the spaceman
  drawSpaceMan = () => {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  };

  // move the spaceman around the canvas

  //collisions for the spaceman
}
