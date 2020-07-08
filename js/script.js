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
var xStart;
var yStart;
var tx;
var ty;
var dustinX;
var dustinY;
var dustinX2;
var dustinY2;
var headSpeed = 1;
var xNoiseVal = 1.5;
var yNoiseVal = 1.25;

function preload() {
  bgImg = loadImage('assets/images/backgroundMin.jpeg');
  closedImg = loadImage('assets/images/eyesClosedMin.png');
  openImg = loadImage('assets/images/eyesOpenMin.png');
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
  dustinX = width / 2;
  dustinY = height / 2;
  tx = random(0, width);
  ty = random(0, height);
}

function draw() {
  if (pressed === 0 || pressed === 1) {
    image(closedImg, dustinX, dustinY, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
  } else {
    image(openImg, dustinX + 33, dustinY - 18, bgScale * width, bgScale * bgImg.height * width / bgImg.width);
  }
  if (frameCount > 100 && frameCount < 250) {
    dustinX -= xNoiseVal * noise(tx);
    dustinY -= yNoiseVal * noise(ty);
  } else if (frameCount > 250 && frameCount < 350) {
    dustinX -= xNoiseVal * noise(tx);
    dustinY += yNoiseVal * noise(ty);
  } else if (frameCount > 350 && frameCount < 450) {
    dustinX -= xNoiseVal * noise(tx);
    dustinY -= yNoiseVal * noise(ty);
  } else {
    dustinX -= xNoiseVal * noise(tx);
    dustinY += yNoiseVal * noise(ty);
  }
  tx += headSpeed;
  ty += headSpeed;
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