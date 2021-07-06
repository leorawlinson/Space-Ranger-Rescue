class Game {
    constructor() {
        this.bg;
        this.spaceMan;
        this.spaceship = new Spaceship();
        this.aliensArr;
        
    }

    clearEverything = () => {}

    moveEverything = () => {
        console.log("moving everything")
    }

    drawEverything = ()  => {
        this.spaceship.drawSpaceship()
    }

    gameLoop = () => {

    //THIS IS VERY  IMPORTANT!! RECOGNIZE THE PATTERNS AND ADD ALL THE INFOMRATION TO THE GAMELOOP IN THIS WAY. ALL MOVEMENT METHODS IN ONE METHOD. ALL DRAW IN ON METHOD
    this.clearEverything()
    this.moveEverything()
    this.drawEverything()  
    requestAnimationFrame(this.gameLoop) 
 }
}


