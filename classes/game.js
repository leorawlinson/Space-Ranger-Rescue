class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/space-ranger-rescue-bg.jpg";
    this.spaceMan = new Spaceman();
    this.spaceShip = new Spaceship();
    this.aliensArr = [new Alien()];
    this.laserArr = [];
    this.alienCreationSpeed = 8000;
    this.levelUpSpeed = 25000;
    this.laserSide = "left";
    this.score = 0;
    this.gameEndingScore = 10;
    this.isGameover = false;
  }

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

  //THIS IS BROKEN

  // collisionSpacemanSpaceship = () => {
  //   if (
  //     this.checkSpacemanSpaceshipCollision &&
  //     this.score >= this.gameEndingScore
  //   ) {
  //     //stop the game
  //     this.isGameover = true;
  //     //remove the canvas
  //     canvas.getElementsByClassName.display = "none";
  //   }
  // };

  checkAllCollisions = () => {
    this.collisionLasersAliens();
    this.collisionAlienSpaceship();
    // this.checkAlienSpaceshipCollision();
  };

  //SPAWNING OBJECTS
  spawnAlien = () => {
    this.aliensArr.push(new Alien());
  };

  createLaser = () => {
    this.laserArr.push(new Laser(this.spaceShip, this.laserSide));
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
    ctx.font = "48px serif";
    ctx.fillText(this.score, 10, 50);
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
    this.spaceShip.drawSpaceship();
    this.spaceMan.drawSpaceMan();
    this.drawAliens();
    this.drawLasers();
    this.drawScore();
  };

  gameLoop = (alienCreationTimestamp = 0, levelUpTimestamp = 0) => {
    //1. Clear the canvas
    this.clearEverything();

    //2. Run actions
    this.moveEverything();

    //Check collisions
    this.checkAllCollisions();

    //3.Draw elements
    this.drawEverything();

    //4. Request animation frame
    if (!this.isGameover) {
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
    }
  };
}
