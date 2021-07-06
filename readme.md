# SpaceMan Rescue
### Description

SpaceMan Rescue is a game where the player controlls a spaceship. The ship can move in four directions on a 2D canvas. The aim of the game is to rescue an astronaut that is floating through space. However, there are aliens spawning and attacking the ship. The player must shoot a certain amount of aliens before collecting the astronaut. If you try to  save him before you have stopped the alien attack you lose. 

## MVP
* One spaceship that moves vertically and horizontally. 
* The ship must also be able to shoot lasers.
* An astronaut that floats around the canvas and bounces off the sides. 
* Aliens that spawn from the top of the canvas and float down. 
* Collisions between the spaceship and aliens (Results in losing the game)
* Collisions between the astronaut and spaceship. (One before shooting the enough aliens and one after enough aleins have been defeated)

### Backlog
* Add a scoreboard
* Increasing levels of difficulty
* Power-ups for the spaceship

## Data Structure
### main.js
* buildSplashScreen () {}
* buildGameScreen () {}
* buildGameOverScreen () {}

### game.js
* Game () {}
* startLoop () {}
* checkCollisions () {}
* addAliens () {}
* clearCanvas () {}
* drawCanvas () {}
* gameOver () {}

### spaceship.js
* Spaceship () {}
* draw () {}
* move () {}
* shoot () {}
* shipCollisions () {}

### aliens
* Alien () {}
* draw () {}
* move () {}
* alienCollisions () {}

### spaceman.js
* Spaceman () {}
* draw () {}
* move () {}
* spacemanCollisions () {}

## States y States Transitions
* splashScreen
* gameScreen
* gameOverScreen 

#### Tasks
* main-buildDom
* main-buildSplashScreen
* main-addEventListener
* main-buildGameScreen
* main-buildGameOverScreen
* game-startLoop
* game-buildCanvas
* game-clearCanvas
* game-drawCanvas
* alien-draw
* alien-move
* game-addAlien
* ship-draw
* ship-move
* ship-shoot
* game-addShip
* spaceman-draw
* spaceman-move
* game-addSpaceman
* game-checkCollision
* game-GameOver
* game-addEventListener

## Links
