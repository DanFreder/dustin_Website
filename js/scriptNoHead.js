/*****************
df website homepage
******************/

"use strict";

var bgScale = .9999999999;
var bgImg;
var closedImg;
var openImg;
var pressed = 0;
var growScale = .013;
var activeImg;

function preload() {
  bgImg = loadImage('assets/images/backgroundMin.jpeg');
  closedImg = loadImage('assets/images/eyesClosed.png');
  openImg = loadImage('assets/images/eyesOpen.png');
  activeImg = openImg;
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

function draw() {}

function mousePressed() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  image(bgImg, width / 2, height / 2, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
}