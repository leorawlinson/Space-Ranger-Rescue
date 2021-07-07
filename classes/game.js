class Game {
  constructor() {
    this.bg;
    this.spaceMan = new Spaceman();
    this.spaceShip = new Spaceship();
    this.aliensArr;
  }

  clearEverything = () => {};

  moveEverything = () => {
    console.log("moving everything");
  };

  drawEverything = () => {
    this.spaceShip.drawSpaceship();
    this.spaceMan.drawSpaceMan();
  };

  spawnAliens = () => {
    console.log("Spawning Aliens");
  };

  gameLoop = () => {
    //THIS IS VERY  IMPORTANT!! RECOGNIZE THE PATTERNS AND ADD ALL THE INFOMRATION TO THE GAMELOOP IN THIS WAY. ALL MOVEMENT METHODS IN ONE METHOD. ALL DRAW IN ON METHOD
    this.clearEverything();
    this.moveEverything();
    this.drawEverything();
    this.spawnAliens();
    requestAnimationFrame(this.gameLoop);
  };
}
