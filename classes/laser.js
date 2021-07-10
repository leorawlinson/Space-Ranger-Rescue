class Laser {
  constructor(spaceship, laserSide) {
    this.x = laserSide === "left" ? spaceship.x : spaceship.x + spaceship.width;
    this.y = spaceship.y;
    this.width = 2;
    this.height = 10;
    this.speed = 5;
  }

  drawLaser = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  moveLaser = () => {
    this.y -= this.speed;
  };
}
