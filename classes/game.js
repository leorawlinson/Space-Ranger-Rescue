class Game {
  constructor() {
    this.bg;
    this.spaceMan = new Spaceman();
    this.spaceShip = new Spaceship();
    this.aliensArr = [new Alien()];
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
  spawnAliens = () => {
    if (!this.aliensArr.length) {
      //Create an alien
      let alien = new Alien();

      //Add the aliens to the array
      this.aliensArr.push(alien);
    }
  };

  gameLoop = () => {
    //THIS IS VERY  IMPORTANT!! RECOGNIZE THE PATTERNS AND ADD ALL THE INFOMRATION TO THE GAMELOOP IN THIS WAY. ALL MOVEMENT METHODS IN ONE METHOD. ALL DRAW IN ONE METHOD

    //1. Clear the canvas
    this.clearEverything();

    //2. Run actions
    this.moveEverything();

    //3.Draw elements
    this.drawEverything();

    //4. Request animation fram
    requestAnimationFrame(this.gameLoop);
  };
}
