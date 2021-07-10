class Game {
  constructor() {
    this.bg;
    this.spaceMan = new Spaceman();
    this.spaceShip = new Spaceship();
    this.aliensArr = [new Alien()];
    //this.aliensDestroyed?
    this.alienCreationSpeed = 10000;
    this.levelUpSpeed = 30000;
  }

  //Clear the canvas for each iteration of the gameloop
  clearEverything = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //Holds all the movement functions for every moving thing in the gameloop
  moveEverything = () => {
    this.spaceMan.moveSpaceMan();
    this.spaceMan.spaceManWallCollision();
    this.aliensArr.forEach((eachAlien) => {
      eachAlien.move();
      eachAlien.wallCollision();
    });
  };

  drawAliens = () => {
    this.aliensArr.forEach((alien) => alien.drawAlien());
  };

  //Draws all the elements on the canvas
  drawEverything = () => {
    this.spaceShip.drawSpaceship();
    this.spaceMan.drawSpaceMan();
    this.drawAliens();
  };

  //movement for spaceship
  moveLeft = () => {
    this.spaceShip.moveLeft();
  };

  moveRight = () => {
    this.spaceShip.moveRight();
  };

  moveUp = () => {
    this.spaceShip.moveUp();
  };

  moveDown = () => {
    this.spaceShip.moveDown();
  };

  //Spawn the aliens
  //Spawn aliens every few seconds (where do I add the max number of aliens spawned? is there a max number of aliens spawned?)
  spawnAlien = () => {
    //Create an alien
    //Add the aliens to the array
    this.aliensArr.push(new Alien());
  };

  gameLoop = (alienCreationTimestamp = 0, levelUpTimestamp = 0) => {
    //1. Clear the canvas
    this.clearEverything();

    //2. Run actions
    this.moveEverything();

    //3.Draw elements
    this.drawEverything();

    //4. Request animation fram
    requestAnimationFrame((timestamp) => {
      if (timestamp - alienCreationTimestamp > this.alienCreationSpeed) {
        this.spawnAlien();
        alienCreationTimestamp = timestamp;
      }
      if (timestamp - levelUpTimestamp > this.levelUpSpeed) {
        this.alienCreationSpeed *= 0.5;
        levelUpTimestamp = timestamp;
      }
      this.gameLoop(alienCreationTimestamp, levelUpTimestamp);
    });
  };
}
