/*****************
df website homepage
******************/

"use strict";

var bgScale = .9999999999;
var headScale;
var bgImg;
var closedImg;
var openImg;
var pressed = 0;
var growScale = 0;

function preload() {
  bgImg = loadImage('assets/images/backgroundMin.jpeg');
  closedImg = loadImage('assets/images/eyesClosed.png');
  openImg = loadImage('assets/images/eyesOpen.png');
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
  // background image scale + display
  imageMode(CENTER);
  image(bgImg, width / 2, height / 2, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
}

function draw() {
  if (mouseIsPressed) {
    if (pressed === 1) {
      growScale += 1;
      image(closedImg, mouseX, mouseY, growScale, growScale);
      pressed = 0;
    } else {
      growScale += 1;
      image(openImg, mouseX, mouseY, growScale, growScale);
      pressed = 1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  image(bgImg, width / 2, height / 2, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
}