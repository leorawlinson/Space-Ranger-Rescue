class Game {
  constructor() {
    this.bg;
    this.spaceMan = new Spaceman();
    this.spaceShip = new Spaceship();
    this.aliensArr = [];
  }

  //Clear the canvas for each iteration of the gameloop
  clearEverything = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //Holds all the movement functions for every moving thing in the gameloop
  moveEverything = () => {
    this.spaceMan.moveSpaceMan();
    this.spaceMan.spaceManWallCollision();
  };

  //Draws all the elements on the canvas
  drawEverything = () => {
    this.spaceShip.drawSpaceship();
    this.spaceMan.drawSpaceMan();
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

  //Is this seperate to moveEverything() or is it also considered a movement?
  spawnAliens = () => {
    if (!this.aliensArr.length) {
      let alien = new Alien();
    }
  };

  gameLoop = () => {
    //THIS IS VERY  IMPORTANT!! RECOGNIZE THE PATTERNS AND ADD ALL THE INFOMRATION TO THE GAMELOOP IN THIS WAY. ALL MOVEMENT METHODS IN ONE METHOD. ALL DRAW IN ONE METHOD

    //1. Clear the canvas
    this.clearEverything();

    //2. Run actions
    this.moveEverything();

    this.spawnAliens(); //Is this seperate to moveEverything() or is it also considered a movement?

    //3.Draw elements
    this.drawEverything();

    //4. Request animation fram
    requestAnimationFrame(this.gameLoop);
  };
}
