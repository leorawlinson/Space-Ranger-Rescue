class Laser {
  constructor() {
    this.x;
    this.y;
    this.width = 2;
    this.height = 4;
    this.speed = 1;
  }
  
  drawLaser = () => {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "black";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  };

  shootLaser () => {

  }

  moveLaser () => {
      this.y = + 40
  }
}
