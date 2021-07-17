// main.js => Managing DOM elements & event listeners

// GLOBAL VARIABLES

//DOM elements
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let youWinScreen = document.querySelector("#you-win-screen");
let startButton60 = document.querySelector("#start-btn-60");
let startButton144 = document.querySelector("#start-btn-144");
let restartButton = document.querySelector("#restart-btn");
let playAgainButton = document.querySelector("#play-btn");

// canvas setup
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// main game global variable
let gameObj;
// ADD EVENT LISTENERS
startButton60.addEventListener("click", () => {
  //show canvas DOM element
  canvas.style.display = "block";
  //hide the splash screen DOM element
  splashScreen.style.display = "none";
  gameoverScreen.style.display = "none";
  youWinScreen.style.display = "none";
  //here we need to create the game
  gameObj = new Game(60);
  //here we need to start the game
  gameObj.controlledGameLoop();
});

startButton144.addEventListener("click", () => {
  //show canvas DOM element
  canvas.style.display = "block";
  //hide the splash screen DOM element
  splashScreen.style.display = "none";
  gameoverScreen.style.display = "none";
  youWinScreen.style.display = "none";
  //here we need to create the game
  gameObj = new Game(144);
  //here we need to start the game
  gameObj.controlledGameLoop();
});

//here I need to ad the controls for the spaceship
window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyA":
      gameObj.moveLeft();
      break;
    case "KeyD":
      gameObj.moveRight();
      break;
    case "ArrowRight":
      gameObj.moveRight();
      break;
    case "ArrowLeft":
      gameObj.moveLeft();
      break;
    case "ArrowUp":
      gameObj.moveUp();
      break;
    case "ArrowDown":
      gameObj.moveDown();
      break;
    case "KeyW":
      gameObj.moveUp();
      break;
    case "KeyS":
      gameObj.moveDown();
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "Space":
      gameObj.createLaser();
      break;
    case "ArrowLeft":
      gameObj.stopX();
      break;
    case "ArrowRight":
      gameObj.stopX();
      break;
    case "ArrowUp":
      gameObj.stopY();
      break;
    case "ArrowDown":
      gameObj.stopY();
  }
});

restartButton.addEventListener("click", () => {
  canvas.style.display = "block";
  gameoverScreen.style.display = "none";
  gameObj.resetFromBeginning();
});

playAgainButton.addEventListener("click", () => {
  canvas.style.display = "block";
  youWinScreen.style.display = "none";
  gameObj.playAgain();
});
