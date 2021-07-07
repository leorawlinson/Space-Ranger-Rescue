class Game {
  constructor() {
    this.bg;
    this.spaceMan = new Spaceman();
    this.spaceShip = new Spaceship();
    this.aliensArr;
  }

  clearEverything = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  moveEverything = () => {
    this.spaceMan.moveSpaceMan();
    this.spaceMan.spaceManWallCollision();
  };

  drawEverything = () => {
    this.spaceShip.drawSpaceship();
    this.spaceMan.drawSpaceMan();
  };

  spawnAliens = () => {};

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
