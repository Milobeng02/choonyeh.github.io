let rotationAngle = 0;
let flightSpeedX = 1;
let flightSpeedX2 = -1;
let flightSpeedX3 = -0.5;
let flightSpeedY = 0.2;

let spx = 0;
let spx2 = 0;
let spx3 = 30;
let spy = 0;
let spy3 = 30;

let noiseY;
let noiseSpeed = 0.01;
let noiseHeight = 20;

let bubbles = [];

let shipY = 280; // Initial y-position of the ship

function setup() {
  createCanvas(800, 500);
  noiseY = height * 3 / 4;

  // Create initial bubbles
  for (let i = 0; i < 4; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(181, 200, 198);

  // Draw further mountain
  fill(91, 71, 110);
  strokeWeight(0);
  push();
  translate(260,0);
  triangle(360, 130, 760, 500, -40, 500);

  fill(213, 212, 255);
  strokeWeight(0);
  beginShape();
  vertex(360, 130);
  vertex(485, 246);
  vertex(390, 200);
  vertex(360, 250);
  vertex(320, 217);
  vertex(225, 255);
  endShape(CLOSE);
  
  // Draw closer mountain
  fill(174, 139, 222);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);

  fill(231, 241, 255);
  strokeWeight(0);
  beginShape();
  vertex(100, 180);
  vertex(225, 280);
  vertex(145, 250);
  vertex(120, 290);
  vertex(70, 260);
  vertex(-20, 286);
  endShape(CLOSE);
  pop();

  push();
  translate(100, 0);
  ship();
  pop();

  noStroke();
  fill('blue');
  for (let i = 0; i < 10; i++) {
    let xrandom = random(width);
    let yrandom = random(height / 2);
    ellipse(xrandom, yrandom, 5, 5);
  }

  for (let j = 0; j < 3; j++) {
    let offsetY = j * 100;
    noFill();
    stroke(0, 0, 255, 100);
    strokeWeight(height / 2);
    beginShape();
    curveVertex(0, height / 2);
    for (let i = 0; i < width; i += 50) {
      let y = noise(frameCount * noiseSpeed + i + j) * noiseHeight + noiseY + offsetY;
      curveVertex(i, y);
    }
    curveVertex(width, height / 2);
    endShape(LINES);
  }

  bird();
  rotatingStar();

  // Display and move bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }

  // Update ship's vertical position for flowing animation
  shipY += sin(frameCount * 0.05) * 1.25;

}

function bird() {
    stroke(255);
  strokeWeight(2.5);
  noFill();
  // bird 1
  bezier(658 + spx, 215 + spy, 651 + spx, 210 + spy, 647 + spx, 215 + spy, 642 + spx, 220 + spy);
  bezier(626 + spx, 215 + spy, 630 + spx, 210 + spy, 635 + spx, 210 + spy, 642 + spx, 220 + spy);
  stroke(165, 165, 141);
  strokeWeight(0.7);
  bezier(658 + spx, 215 + spy, 651 + spx, 210 + spy, 647 + spx, 215 + spy, 642 + spx, 220 + spy);
  bezier(626 + spx, 215 + spy, 630 + spx, 210 + spy, 635 + spx, 210 + spy, 642 + spx, 220 + spy);
  //bird 2
  stroke(255);
  strokeWeight(2.5);
  bezier(458 + spx2, 315 + spy, 451 + spx2, 310 + spy, 447 + spx2, 315 + spy, 442 + spx2, 320 + spy);
  bezier(426 + spx2, 315 + spy, 430 + spx2, 310 + spy, 435 + spx2, 310 + spy, 442 + spx2, 320 + spy);
  stroke(165, 165, 141);
  strokeWeight(0.7);
  bezier(458 + spx2, 315 + spy, 451 + spx2, 310 + spy, 447 + spx2, 315 + spy, 442 + spx2, 320 + spy);
  bezier(426 + spx2, 315 + spy, 430 + spx2, 310 + spy, 435 + spx2, 310 + spy, 442 + spx2, 320 + spy);
  //bird 3:
  stroke(255);
  strokeWeight(2.5);
  bezier(488 + spx3, 315 + spy3, 481 + spx3, 310 + spy3, 477 + spx3, 315 + spy3, 472 + spx3, 320 + spy3);
  bezier(456 + spx3, 315 + spy3, 460 + spx3, 310 + spy3, 465 + spx3, 310 + spy3, 472 + spx3, 320 + spy3);
  stroke(165, 165, 141);
  strokeWeight(0.7);
  bezier(488 + spx3, 315 + spy3, 481 + spx3, 310 + spy3, 477 + spx3, 315 + spy3, 472 + spx3, 320 + spy3);
  bezier(456 + spx3, 315 + spy3, 460 + spx3, 310 + spy3, 465 + spx3, 310 + spy3, 472 + spx3, 320 + spy3);
  spx += flightSpeedX;
  spx2 += flightSpeedX2;
  spx3 += flightSpeedX3;
  spy -= flightSpeedY;

  if (spx < -100 || spx > 180) {
    flightSpeedX *= -1;
  }
  if (spx2 < -100 || spx2 > 180) {
    flightSpeedX2 *= -1;
  }
  if (spx3 < -100 || spx3 > 180) {
    flightSpeedX3 *= -1;
  }
  if (spy < -150 || spy > 0) {
    flightSpeedY *= -1;
  }
}


function rotatingStar() {
  fill('orange');
  noStroke();

  let centerX = 100;
  let centerY = 100;
  let radius1 = 100;
  let radius2 = 70;
  let npoints = 15;

  let angle = TWO_PI / npoints;

  rotationAngle += 0.01;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = centerX + cos(a + rotationAngle) * radius1;
    let sy = centerY + sin(a + rotationAngle) * radius1;
    vertex(sx, sy);
    let px = centerX + cos(a + angle / 2 + rotationAngle) * radius2;
    let py = centerY + sin(a + angle / 2 + rotationAngle) * radius2;
    vertex(px, py);
  }
  endShape(CLOSE);

  fill('yellow');
  ellipse(centerX, centerY, 90);
}

function ship() {
  fill('grey');
  noStroke();

  quad(740, shipY, 720, shipY + 70, 380, shipY + 70, 340, shipY - 5);

  fill(0, 200, 255);
  stroke('black');
  strokeWeight(5);
  quad(480, shipY - 60, 460, shipY, 680, shipY, 660, shipY - 60);

  fill(0, 180, 255);
  stroke('black');
  strokeWeight(5);
  quad(480, shipY - 60, 460, shipY - 58, 435, shipY - 5, 460, shipY);

  strokeWeight(2);
  fill('orange');
  circle(640, shipY + 30, 50);

  fill('silver');
  circle(640, shipY + 30, 25);
}

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height/2);

  this.display = function () {
    stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x + 10, this.y + 10, 24, 24);
    ellipse(this.x + 30, this.y + 10, 24, 24);
    ellipse(this.x + 30, this.y - 10, 24, 24);
    ellipse(this.x + 20, this.y - 10, 24, 24);
    ellipse(this.x + 40, this.y, 24, 24);
  };

  this.move = function () {
    this.x = this.x += 1;
    this.y = this.y + random(-1, 1);

    if (this.x >= width) {
      this.x = 0;
    }
  };
}

function mouseClicked() {
  bubbles.push(new Bubble());
}

function keyPressed() {
  bubbles.pop();
}
