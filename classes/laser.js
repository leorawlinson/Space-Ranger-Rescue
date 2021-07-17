class Laser {
  constructor(spaceship, laserSide, fps) {
    this.x = laserSide === "left" ? spaceship.x : spaceship.x + spaceship.width;
    this.y = spaceship.y;
    this.width = 4;
    this.height = 10;
    this.speed = 5 * (fps.rate === 60 ? fps.ratio : 1);
  }

  drawLaser = () => {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  moveLaser = () => {
    this.y -= this.speed;
  };
}
