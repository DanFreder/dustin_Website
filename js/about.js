/*****************
df website about page
******************/

"use strict";

function preload() {}

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
}