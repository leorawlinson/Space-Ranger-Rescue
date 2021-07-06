// main.js => Managing DOM elements & event listeners

// GLOBAL VARIABLES

//DOM elements
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
// canvas setup
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// main game global variable
let gameObj
// ADD EVENT LISTENERS
startButton.addEventListener("click", () => {
//show canvas DOM element
    canvas.style.display = "block";
//hide the splash screen DOM element
    splashScreen.style.display = "none";
//here we need to create the game 
gameObj = new Game();
//here we need to start the game 
gameObj.gameLoop();

});

//here I need to ad the controls for the spaceship

    
restartButton.addEventListener("click", () => {
    canvas.style.display = "block";
    gameoverScreen.style.display = "none";
  });
