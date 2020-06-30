/*****************
df website contact page
******************/

"use strict";

let pressed = 0;
let dustinWall;
var aX = -400;
var aY = -344;
var bX = 0;
var bY = 348.84;
var cX = 400;
var cY = -344;
var spin = 0;

function preload() {
  dustinWall = loadImage('assets/images/DF_dustin.jpg');
}

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  // Canvas stays fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");
  imageMode(CENTER);
  background(0);
}

function draw() {
  background(0);
  translate(windowWidth / 2, windowHeight / 2);
  push();
  var scaleMouseX = map(mouseX, 0, width, -50, 50);
  var scaleMouseY = map(mouseY, 0, height, -30, 30);
  for (var i = 0; i < 5; i++) {
    dustinWall.resize(640, 0);
    image(dustinWall, 0, 0);
    translate(scaleMouseX, scaleMouseY);
  }
  pop();
}

function mousePressed() {
  if (pressed === 0) {
    pressed = 1;
  } else {
    pressed = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  boxWall.resize(720, 0);
  image(boxWall, 0, 0);
}