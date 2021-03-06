class Game {
  constructor(frameRate) {
    this.bg = new Image();
    this.bg.src = "./images/space-ranger-rescue-bg.jpg";

    this.fps = {
      rate: frameRate,
      ratio: 144 / frameRate,
    };
    this.frameRate = 1000 / frameRate;

    this.spaceMan = new Spaceman(this.fps);
    this.spaceShip = new Spaceship(this.fps);
    this.aliensArr = [new Alien(this.fps)];
    this.laserArr = [];
    this.alienCreationSpeed = 8000;
    this.levelUpSpeed = 25000;
    this.laserSide = "left";
    this.score = 0;
    this.gameEndingScore = 100;
    this.isGameover = false;
  }
  //RESTART THE GAME LOOP

  resetFromBeginning = () => {
    this.spaceShip.x = canvas.width / 2;
    this.spaceShip.y = canvas.height - 60;
    this.spaceShip.accelerationX = 0;
    this.spaceShip.accelerationY = 0;

    this.wins = 0;

    this.spaceMan = new Spaceman(this.fps);

    this.aliensArr = [];
    this.alienCreationSpeed = 8000;
    this.levelUpSpeed = 25000;
    this.score = 0;
    this.gameEndingScore = 100;

    this.isGameover = false;
    this.controlledGameLoop();
  };

  playAgain = () => {
    this.spaceShip.x = canvas.width / 2;
    this.spaceShip.y = canvas.height - 60;
    this.spaceShip.accelerationX = 0;
    this.spaceShip.accelerationY = 0;

    this.spaceMan = new Spaceman(this.fps);

    this.aliensArr = [];
    this.alienCreationSpeed = 8000;
    this.levelUpSpeed = 25000;
    this.score = 0;

    this.gameEndingScore += 10;

    this.isGameover = false;
    this.controlledGameLoop();
  };
  //COLLISIONS

  checkLaserAlienCollision = (laser, alien) => {
    return (
      laser.x < alien.x + alien.width &&
      laser.x + laser.width > alien.x &&
      laser.y < alien.y + alien.height &&
      laser.y + laser.height > alien.y
    );
  };

  checkAlienSpaceshipCollision = (alien) => {
    return (
      this.spaceShip.x < alien.x + alien.width &&
      this.spaceShip.x + this.spaceShip.width > alien.x &&
      this.spaceShip.y < alien.y + alien.height &&
      this.spaceShip.y + this.spaceShip.height > alien.y
    );
  };

  checkSpacemanSpaceshipCollision = () => {
    return (
      this.spaceShip.x < this.spaceMan.x + this.spaceMan.width &&
      this.spaceShip.x + this.spaceShip.width > this.spaceMan.x &&
      this.spaceShip.y < this.spaceMan.y + this.spaceMan.height &&
      this.spaceShip.y + this.spaceShip.height > this.spaceMan.y
    );
  };

  collisionLasersAliens = () => {
    this.laserArr.forEach((laser) => {
      this.aliensArr.forEach((alien) => {
        if (this.checkLaserAlienCollision(laser, alien)) {
          // remove the alien
          const shotDownAlienIndex = this.aliensArr.indexOf(alien);
          this.aliensArr.splice(shotDownAlienIndex, 1);
          //Increase the score
          this.score += alien.score;
        }
      });
    });
  };

  collisionAlienSpaceship = () => {
    this.aliensArr.forEach((alien) => {
      if (this.checkAlienSpaceshipCollision(alien)) {
        //Stop the game
        this.isGameover = true;
        //remove the canvas
        canvas.style.display = "none";
        //display the gameover screen
        gameoverScreen.style.display = "flex";
      }
    });
  };

  collisionSpacemanSpaceship = () => {
    if (
      this.checkSpacemanSpaceshipCollision() &&
      this.score >= this.gameEndingScore
    ) {
      //stop the game
      this.isGameover = true;
      //remove the canvas
      canvas.style.display = "none";
      //display the game over screen
      youWinScreen.style.display = "flex";
    } else if (this.checkSpacemanSpaceshipCollision()) {
      this.isGameover = true;
      //remove the canvas
      canvas.style.display = "none";
      //display the game over screen
      gameoverScreen.style.display = "flex";
    }
  };

  checkAllCollisions = () => {
    this.collisionLasersAliens();
    this.collisionAlienSpaceship();
    this.collisionSpacemanSpaceship();
  };

  //SPAWNING OBJECTS
  spawnAlien = () => {
    this.aliensArr.push(new Alien(this.fps));
  };

  createLaser = () => {
    this.laserArr.push(new Laser(this.spaceShip, this.laserSide, this.fps));
    if (this.laserSide === "left") {
      this.laserSide = "right";
    } else {
      this.laserSide = "left";
    }
  };

  //MOVEMENT FOR SPACESHIP
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

  stopX = () => {
    this.spaceShip.stopX();
  };

  stopY = () => {
    this.spaceShip.stopY();
  };

  moveLasers = () => {
    this.laserArr.forEach((laser) => laser.moveLaser());
  };

  //DRAWING FUNCTIONS
  drawLasers = () => {
    this.laserArr.forEach((laser) => laser.drawLaser());
  };

  drawAliens = () => {
    this.aliensArr.forEach((alien) => alien.drawAlien());
  };

  drawScore = () => {
    ctx.fillStyle = "white";
    ctx.font = "48px serif";
    ctx.fillText(this.score, 10, 50);
    ctx.font = "14px serif";
    ctx.fillText(`target score: ${this.gameEndingScore}`, 10, 65);
  };

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  //CLEAR EVERYTHING
  clearEverything = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //MOVE EVERYTHING
  moveEverything = () => {
    this.spaceShip.move();
    this.spaceMan.moveSpaceMan();
    this.spaceMan.spaceManWallCollision();
    this.aliensArr.forEach((eachAlien) => {
      eachAlien.move();
      eachAlien.wallCollision();
    });
    this.moveLasers();
  };

  //DRAW EVERYTHING
  drawEverything = () => {
    this.drawBackground();
    this.spaceShip.drawSpaceship();
    this.spaceMan.drawSpaceMan();
    this.drawAliens();
    this.drawLasers();
    this.drawScore();
  };

  gameLoop = () => {
    //1. Clear the canvas
    this.clearEverything();

    //2. Run actions
    this.moveEverything();

    //Check collisions
    this.checkAllCollisions();

    //3.Draw elements
    this.drawEverything();
  };

  controlledGameLoop = (
    alienCreationTimestamp = 0,
    levelUpTimestamp = 0,
    frameRateStamp = 0
  ) => {
    requestAnimationFrame((timestamp) => {
      //4. Request animation frame
      if (!this.isGameover) {
        if (timestamp - frameRateStamp > this.frameRate) {
          this.gameLoop();
          frameRateStamp = timestamp;
        }
        if (timestamp - alienCreationTimestamp > this.alienCreationSpeed) {
          this.spawnAlien();
          alienCreationTimestamp = timestamp;
        }
        if (timestamp - levelUpTimestamp > this.levelUpSpeed) {
          this.alienCreationSpeed *= 0.5;
          levelUpTimestamp = timestamp;
        }
        this.controlledGameLoop(
          alienCreationTimestamp,
          levelUpTimestamp,
          frameRateStamp
        );
      }
    });
  };
}
