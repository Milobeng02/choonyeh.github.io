let clouds = [];
let myland;
let mountainLeft, mountainMiddle, mountainRight;
let birds = [];
let grass;
let windmill; 
let tree;
let leaves = [];
let grav, wind;
let num = 10;
let maxLeaves = 25;
let maxWind = 0.1;
let sun;

function setup() {
  createCanvas(800,500);
  // Initialize clouds
  for (let i = 0; i < 7; i++) {
    if(height < 500){
    clouds.push(new Cloud(random(0, width), random(40, 60)));
  }else if(height >= 500){
    clouds.push(new Cloud(random(0, width), random(75, 100)));
  }
  }


  // Initialize birds
  for (let i = 0; i < 4; i++) {
    let x = i * 150 - 300;
    // Set a specific y-coordinate for birds, for example, 100
    birds.push(new Bird(x, 100));
  }
 if (height >= 1000) {
    mountainLeft = new Mountain(width * 0.1, height * 0.36, width * 0.5, height * 0.8, width * -0.26, height * 0.8, color(105, 100, 98));
  mountainMiddle = new Mountain(width * 0.36, height * 0.26,width * 0.76, height * 0.8,width * -0.04, height * 0.8, color(148, 143, 141));
  mountainRight = new Mountain(width * 0.66, height * 0.46, width * 1.06, height * 0.8, width * 0.34, height * 0.8, color(105, 100, 98));
    windmill = new Windmill(width /10*4.5, height * 0.28);
    myland = new land(width * 0.4, height/10*8.5, width * 1.8, height/10*5, color(181, 114, 53));

  }else if (height < 500){
     mountainLeft = new Mountain(width * 0.1, 180, width * 0.5, 500, width * -0.26, 500, color(105, 100, 98));
  mountainMiddle = new Mountain(width * 0.36, 130,width * 0.76, 500,width * -0.04, 500, color(148, 143, 141));
  mountainRight = new Mountain(width * 0.66, 230, width * 1.06, 500, width * 0.34, 500, color(105, 100, 98));
  windmill = new Windmill(width /10*6, height * 0.28);
    myland = new land(width * 0.4, height/10*8.5, width * 1.8, height/10*5, color(181, 114, 53));
    
  }else {
     mountainLeft = new Mountain(width * 0.1, 180, width * 0.5, 500, width * -0.26, 500, color(105, 100, 98));
  mountainMiddle = new Mountain(width * 0.36, 130,width * 0.76, 500,width * -0.04, 500, color(148, 143, 141));
  mountainRight = new Mountain(width * 0.66, 230, width * 1.06, 500, width * 0.34, 500, color(105, 100, 98));
    windmill = new Windmill(width * 0.5, height * 0.35);
    myland = new land(width * 0.4, 600, width * 1.8, 500, color(181, 114, 53));
  }
grass = new Grass();
tree = new Tree();


for (let i = 0; i < num; i++) {
    leaves.push(new Leaf(random(-50, 0), map(i, 0, width, height / 2 - 50, height / 2 + 50)));
  }

  grav = createVector(0, 0.005);
  wind = createVector(0.02, 0); // Wind blowing to the right
 sun = new Sun(100, 80, 60);
}




function draw() {
  background(59, 132, 204);
    sun.display();
  push();
  for (let bird of birds) {
    bird.move();
    bird.display();
  }
  pop();

  push();
  // Move and draw clouds
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].x += 0.5;
    if (clouds[i].x > width) {
      clouds[i].x = -50;
    }
    clouds[i].display();
  }
  pop();

  push();
  // Draw mountains
  mountainLeft.draw();
  mountainRight.draw();
  mountainMiddle.draw();
  pop();

  push();
  // Draw land
  myland.display();
  pop();

  push();
  // Draw windmill
  windmill.draw(); // Use the existing windmill instance
  pop();

  push();
  scale(0.8);
  translate(width/2,height/10*6);
  tree.display();
   pop();
  push();
  scale(0.9);
  translate(width/5,height/10*5.5);
  tree.display()
  pop();

  push();
  // Draw grass blades
  grass.update();
  pop();

  push();
  for (let i = leaves.length - 1; i >= 0; i--) {
    leaves[i].display();
    leaves[i].applyForce(grav);
    leaves[i].applyForce(wind);
    leaves[i].update();

    if (leaves[i].isDead()) {
      leaves.splice(i, 1);
    }
  }

  if (leaves.length < maxLeaves) {
    leaves.push(new Leaf(random(-50, 0), height / 2)); // Adjust initial position
  }
  pop();


}


class Windmill {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rotationAngle = 0;
  }

  drawBlades() {
    fill(210);
    for (let i = 0; i < 4; i++) {
      let angle = this.rotationAngle + (i + 0.5) * (TWO_PI / 4);
      push();
      translate(this.x, this.y);
      rotate(angle);
      triangle(-175, -50, 0, 0, -175, 50);
      line(0, 0, -175, 0);
      line(-137.5, -40, -137.5, 40);
      line(-100, -30, -100, 30);
      line(-62.5, -18, -62.5, 18);
      circle(0, 0, 50);
      pop();
    }
  }
  drawRoof() {
    fill(173, 71, 7);
    beginShape();
    vertex(this.x, this.y - 75);
    vertex(this.x + 150, this.y - 75);
    vertex(this.x + 225, this.y);
    vertex(this.x + 75, this.y);
    endShape(CLOSE);
       fill(110, 41, 9);
    triangle(this.x - 75, this.y, this.x, this.y - 75, this.x + 75, this.y);
  }

  drawBody() {
     fill(110, 41, 9);
    beginShape();
    vertex(this.x - 50, this.y);
    vertex(this.x - 50, this.y + 300);
    bezierVertex(this.x - 50, this.y + 325, this.x + 175, this.y + 325, this.x + 175, this.y + 300);
    vertex(this.x + 175, this.y + 300);
    vertex(this.x + 175, this.y);
    endShape(CLOSE);
  }

  drawBase() {
    fill(122, 71, 7);
    beginShape();
    vertex(this.x - 50, this.y + 300);
    bezierVertex(this.x - 50, this.y + 325, this.x + 175, this.y + 325, this.x + 175, this.y + 300);
    vertex(this.x + 200, this.y + 425);
    bezierVertex(this.x + 200, this.y + 450, this.x - 75, this.y + 450, this.x - 75, this.y + 425);
    vertex(this.x - 75, this.y + 425);
    vertex(this.x - 50, this.y + 300);
    endShape(CLOSE);
  }

  drawWindow() {
    fill(103, 158, 181);
    beginShape();
    vertex(this.x - 25, this.y + 225);
    vertex(this.x + 25, this.y + 225);
    vertex(this.x + 25, this.y + 165);
    bezierVertex(this.x + 25, this.y + 140, this.x - 25, this.y + 140, this.x - 25, this.y + 165);
    vertex(this.x - 25, this.y + 165);
    vertex(this.x - 25, this.y + 225);
    endShape(CLOSE);
  }

  draw() {
    translate(this.x, this.y);
    let scaleFactor = height /1300;
    scale(scaleFactor);
    stroke(0);
    strokeWeight(3);

    // Update the rotation angle over time
    this.rotationAngle += 0.01; // You can adjust the rotation speed as needed

    this.drawRoof();
    this.drawBody();
    this.drawBase();
    this.drawWindow();

    // Draw the rotating blades
    this.drawBlades();
  }
}

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scaleFactor = height < 500 ? 0.5 : 1; // Adjust the scaleFactor as needed
  }

  display() {
    stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24 * this.scaleFactor, 24 * this.scaleFactor);
    ellipse(this.x + 10 * this.scaleFactor, this.y + 10 * this.scaleFactor, 24 * this.scaleFactor, 24 * this.scaleFactor);
    ellipse(this.x + 30 * this.scaleFactor, this.y + 10 * this.scaleFactor, 24 * this.scaleFactor, 24 * this.scaleFactor);
    ellipse(this.x + 30 * this.scaleFactor, this.y - 10 * this.scaleFactor, 24 * this.scaleFactor, 24 * this.scaleFactor);
    ellipse(this.x + 20 * this.scaleFactor, this.y - 10 * this.scaleFactor, 24 * this.scaleFactor, 24 * this.scaleFactor);
    ellipse(this.x + 40 * this.scaleFactor, this.y, 24 * this.scaleFactor, 24 * this.scaleFactor);
  }
}


class Mountain {
  constructor(x1, y1, x2, y2, x3, y3, color1, color2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.color1 = color1;
    this.color2 = color2;
  }



  draw() {
    fill(this.color1);
    strokeWeight(0);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);

  }
}

class land {
  constructor(x, y, w, h, fillColor) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fillColor = fillColor;
  }

  display() {
    fill(this.fillColor);
    ellipse(this.x, this.y, this.width, this.height);
  }
}

class Bird {
  constructor(x) {
    this.x = x;
    this.y = random(0, height / 4);
    this.wingAngle = 0;
    this.loopCount = 0;
    this.colors = {
      head: color(140),
      body: color(0, 0, 255),
      wing: color(0, 255, 0),
    };
    this.scaleFactor = height < 500 ? 0.3 : 0.5;
  }

  move() {
    this.x += 2;
    if (this.x > width) {
      this.x = -150;
      this.y = random(0, height / 4);
      this.loopCount++;

      this.colors.head = color(random(255), random(255), random(255));
      this.colors.body = color(random(255), random(255), random(255));
      this.colors.wing = color(random(255), random(255), random(255));
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor); // Scale the bird based on canvas height
    this.drawBird();
    pop();
  }

  drawBird() {
    this.wingAngle = abs(sin(frameCount * 0.05)) * PI / 6;
    strokeWeight(1);
    stroke(0);

    fill(this.colors.head);
    rect(50, 10, 49, 60, 50);

    fill(180, 0, 0);
    triangle(-20, 25, 0, 50, -25, 30);

    fill(this.colors.body);
    arc(50, 50, 100, 100, 0, PI, CHORD);

    push();
    translate(25, 40);
    rotate(this.wingAngle);
    fill(this.colors.wing);
    arc(0, 0, 75, 75, 0, PI, CHORD);
    pop();

    fill(255);
    strokeWeight(0);
    circle(85, 25, 15);

    fill(0);
    circle(89, 24, 5);

    fill(140);
    triangle(98, 24, 120, 29, 98, 34);
  }
}


class Grass {
  constructor() {
    this.grass = [];
    this.roff = [];
    this.rwave = [];
    this.size = [];
    this.seg = [];
    this.index = 0;
    this.population = 150;

    for (let x = 0; x < width; x += width / this.population) {
      this.index += 1;
      this.grass.push(x);
      this.roff.push((this.index * 0.065) + 0.015);
      this.rwave.push(0);
      if (height < 500) {
        this.size.push(random(50, height / 12)); // Adjust the size based on canvas height
      } else {
        this.size.push(random(35, height / 10));
      }
      this.seg.push(0.85);
    }
  }

  update() {
    for (let i = 0; i < this.index; i++) {
      let len = this.size[i]*0.55;
      push();
      translate(this.grass[i], height * 1);
      this.blade(len, i);
      pop();
    }
  }

  blade(len, ind) {
    let rot;

    if (ind / 2 === int(ind / 2)) {
      this.roff[ind] += 0.0025;
      stroke(0, 255 - (len * 1.5), len * 1.5, 255);
      rot = map(noise(this.roff[ind]), 0, 1, -QUARTER_PI * 0.25, QUARTER_PI * 0.25);
    } else {
      this.roff[ind] += 0.0025;
      stroke(0, 255 - (len * 1.5), len * 1.5, 255);
      rot = map(-sin(this.roff[ind]), -1, 1, -QUARTER_PI * 0.25, QUARTER_PI * 0.25);
    }

    strokeWeight(len * 2 * random(0.15, 0.2));
    rotate(rot);
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 20) {
      this.blade(len * this.seg[ind], ind);
    }
  }
}

class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    push();
    // Scale the tree based on canvas height
    let scaleFactor = height / 500; // Adjust this factor as needed
    scale(scaleFactor);
    this.drawTree();
    pop();
  }

  drawTree() {
    noStroke();
    fill(22, 79, 41);
    beginShape();
    vertex(0, -140);
    vertex(-40, -60);
    vertex(-20, -60);
    vertex(-80, 10);
    vertex(-40, 10);
    vertex(-110, 100);
    vertex(110, 100);
    vertex(40, 10);
    vertex(80, 10);
    vertex(20, -60);
    vertex(40, -60);
    endShape(CLOSE);
    
    fill(145, 73, 1);
    rect(-10, 100, 20, 90);
  }
}

class Leaf {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-0.05, 0.05));
    this.accel = createVector(0, 0);
    this.rotation = 0;
    this.width = height < 500 ? 10 : 20; // Adjust the width based on canvas height
    this.height = height < 500 ? 5 : 10; // Adjust the height based on canvas height
    this.dead = false;
    this.rotationIncrement = true;
  }

  checkBounds() {
    if (this.pos.x > width + 200 || this.pos.x < -200 || this.pos.y > height) {
      this.dead = true;
    }
  }

  applyForce(force) {
    this.accel.add(force);
  }

  update() {
    if (this.rotationIncrement) {
      this.rotation += random(5);
    } else {
      this.rotation -= random(5);
    }
    if (abs(this.rotation) > 90) {
      this.rotationIncrement = !this.rotationIncrement;
    }

    let v = createVector(0.0001 * this.rotation, -0.5 / abs(this.rotation));

    this.vel.add(this.accel);
    this.pos.add(this.vel);
    this.accel.set(0, 0);
    this.checkBounds();
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(radians(this.rotation));
    fill(19, 176, 14);
    stroke(59, 194, 54);
    ellipse(0, 0, this.width, this.height);
    pop();
  }

  isDead() {
    return this.dead;
  }
}


class Sun {
  constructor() {
    this.x = width / 6;
    this.y = height / 6;
    this.rotationSpeed = 0.5;
    this.scaleFactor = height < 500 ? 0.6 : 1; // Adjust the scaleFactor as needed
  }

  display() {
    fill(245, 187, 87);
    stroke(245, 187, 87);
    push();
    translate(this.x, this.y);
    rotate(radians(frameCount * this.rotationSpeed));
    scale(this.scaleFactor); // Scale the sun based on canvas height
    ellipse(0, 0, 60, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
    noFill();
  }
}

