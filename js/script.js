/*****************
df website homepage
******************/

"use strict";

var bgScale = .99;
var headScale;
var bgImg;
var closedImg;
var openImg;
var pressed = 0;
var xStart;
var yStart;
var tx;
var ty;
var dustinX;
var dustinY;
var headSpeedX = 3;
var headSpeedY = 2;

function preload() {
  bgImg = loadImage('assets/images/background.jpg');
  closedImg = loadImage('assets/images/eyesClosed2.png');
  openImg = loadImage('assets/images/eyesOpen2.png');
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

  //preset values for head placement + movement
  tx = random(-width / 2, width / 2);
  ty = random(-height / 2, height / 2);
  dustinX = width / 2;
  dustinY = height / 2;
}

function draw() {
  headScale = bgScale * .055;
  if (pressed === 0 || pressed === 1) {
    image(closedImg, dustinX, dustinY, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
  } else {
    image(openImg, dustinX + 33, dustinY - 18, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
  }
  if (frameCount > 100 && pressed > 0) {
    // Calculate the distance between dustin's Head and the mouse
    var distX = mouseX - dustinX - (bgImg.width * .07);
    var distY = mouseY - dustinY + (bgImg.height * .05);
    // Add 1/10th of that distance to the dustin's location
    dustinX = distX / 10 + dustinX;
    dustinY = distY / 10 + dustinY;
  }
}

function mousePressed() {
  if (pressed === 0 || pressed === 2) {
    pressed = 1;
  } else {
    pressed = 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  image(bgImg, width / 2, height / 2, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
}