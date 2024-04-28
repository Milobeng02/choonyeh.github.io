let rains = [];
let offset = 0.0;
let umbrella;
let isRaining = true;
let leaves = [];
let numLeaves = 10;

function setup() {
    createCanvas(800, 500);
    angleMode(DEGREES);
    noStroke();
    umbrella = new Umbrella();
    isRaining = true;
    for (let i = 0; i < numLeaves; i++) {
        let x = random(-50, 0);
        let y = random(-height, height - 100);
        leaves.push(new Leaf(x, y));
    }
}

function draw() {
    push();
    drawGrass();
    drawSky();
    personBody();
    streetLamp();
    pop();
    push();
    umbrella.display();
    pop();
    push();
    personHand();
    pop();
    background(0, 60);
    drawMoon();

    let gravity = createVector(0, 0.1);
    let wind = createVector(0.1, 0);

    for (let i = leaves.length - 1; i >= 0; i--) { 
        let leaf = leaves[i];

        // Apply forces to each leaf
        leaf.applyForce(gravity);
        leaf.applyForce(wind);

        // Update and display each leaf
        leaf.update();
        leaf.display();

        // Remove leaf if it's dead
        if (leaf.isDead()) {
            leaves.splice(i, 1);
            let x = random(-50, 0);
            let y = random(-height, height - 100);
            leaves.push(new Leaf(x, y));
        }
    }

    if (isRaining) {
        let n = noise(offset);
        if (n < 0.3) {
            background(0, 55);
            push();
            for (let i = 0; i < 2; i++) {
                drawLightning();
            }
            pop();
        }
        background(0, 50);
        for (let r of rains) {
            r.show();
            r.update();
        }

        for (let i = 0; i < 2; i++) {
            rains.push(new Rain(random(width), 0));
        }
    }
}

function mousePressed() {
    isRaining = !isRaining;
}

function drawMoon() {
    push();
    translate(100, 50);
    fill(230, 230, 180);
    ellipse(0, 0, 80, 80);
    pop();
}

function drawLightning() {
    fill(255, 255, 0);

    // Number of blurred strokes
    let numBlurStrokes = 5;

    // Iterate over each blur stroke
    for (let i = 0; i < numBlurStrokes; i++) {
        let blurStrength = i * 2;
        // Set stroke color with reduced opacity
        stroke(255, 50 - blurStrength * 5);
        // Set stroke weight
        strokeWeight(1 + blurStrength);

        // Lightning shape 1
        beginShape();
        vertex(459, 0);
        vertex(409, 56);
        vertex(432, 58);
        vertex(379, 116);
        vertex(455, 55);
        vertex(421, 53);
        vertex(474, 0);
        endShape();

        // Lightning shape 2
        beginShape();
        vertex(565, 0);
        vertex(481, 106);
        vertex(566, 100);
        vertex(468, 180);
        vertex(588, 92);
        vertex(504, 92);
        vertex(572, 0);
        endShape();
    }
}

function streetLamp() {
    translate(width * 3 / 4, height);
    fill('#484848');
    beginShape();
    vertex(0, 0);
    bezierVertex(0, 0, 30, 10, 60, 0);
    vertex(60, -5);
    bezierVertex(60, -8, 30, 4, 0, -8);
    endShape(CLOSE);
    ellipse(30, -7, 60, 10);
    beginShape();
    vertex(3, -10);
    bezierVertex(3, -10, 30, -2, 57, -10);
    vertex(45, -155);
    bezierVertex(45, -155, 30, -150, 15, -155);
    vertex(3, -10);
    endShape();
    ellipse(30, -87, 55, 15);
    ellipse(30, -165, 40, 50);
    ellipse(30, -182, 40, 13);
    triangle(17, -182, 43, -182, 30, -210);
    rect(25, -200, 10, -160);
    ellipse(30, -350, 20, 8);
    ellipse(30, -360, 25, 10);
    push();
    stroke(110);
    strokeWeight(2);
    line(18, -360, 0, -430);
    line(23, -358, 15, -437);
    line(37, -358, 45, -437);
    line(42, -360, 60, -430);
    pop();
    beginShape();
    vertex(0, -430);
    vertex(15, -437);
    vertex(45, -437);
    vertex(60, -430);
    vertex(63, -437);
    vertex(48, -444);
    vertex(12, -444);
    vertex(-3, -437);
    endShape(CLOSE);
    triangle(4, -440, 56, -440, 30, -480);
    beginShape();
    vertex(25, -470);
    vertex(35, -470);
    vertex(45, -490);
    bezierVertex(45, -490, 30, -500, 15, -490);
    vertex(15, -490);
    endShape(CLOSE);
    ellipse(30, -495, 10, 20);
    push();
    fill(255, 255, 100, flickering());
    ellipse(30, -400, 50);
    for (let i = 0; i < 70; i++) {
        ellipse(30, -400, i * 3);
    }
    pop();
}

function flickering() {
    offset += 0.02;
    let n = noise(offset);
    if (n < 0.30) return 0;
    else return 4;
}


function personBody() {
    // Body
    push();
    translate(0,height);
    fill('black');
    beginShape();
    vertex(106, 0);
    bezierVertex(106, 0, 110, -66, 135, -113);
    vertex(135, -113);
    bezierVertex(135, -113, 181, -145, 241, -114);
    vertex(241, -114);
    bezierVertex(241, -114, 272, -36, 272, 0);
    vertex(272, 0);
    endShape();
    pop();
}

function personHand() {
    // Hand
    push();
    translate(0,height);
    noStroke();
    fill('black');
    beginShape();
    vertex(241, -114);
    bezierVertex(241, -114, 249, -70, 264, -85);
    vertex(264, -85);
    bezierVertex(277, -85, 276, -78, 281, -66);
    vertex(281, -66);
    bezierVertex(281, -66, 269, -50, 264, -48);
    vertex(264, -48);
    bezierVertex(264, -48, 226, -10, 212, -75);
    vertex(212, -75);
    circle(274, -90, 20);
    ellipse(285, -81, 30, 35);
    endShape();
    pop();
}

function drawSky() {
    // Create gradient for the sky
    let gradient = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
    gradient.addColorStop(0, "#515F7A");
    gradient.addColorStop(0.25, "#8290AC");
    gradient.addColorStop(0.5, "#8C96A1");
    gradient.addColorStop(0.75, "#BCC7CC");
    gradient.addColorStop(1, "#D5D9E0");

    // Draw sky gradient
    drawingContext.fillStyle = gradient;
    rect(0, 0, width, height / 2);
}

function drawGrass() {
    noStroke();
    // Grass
    fill('#4CAF50');
    rect(0, height / 2, width, height);
    fill('#A9A9A9');
    // Sides
    triangle(0, height - 30, width + 50, height / 2.5, 0, height);
    triangle(width / 2, height, width + 50, height / 2.5, (width / 2) + 50, height);
    // Path
    fill('#404040');
    triangle(0, height, width + 50, height / 2.5, width / 2, height);
}

class Rain {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, random(7, 10));
        this.len = random(15, 30);
        this.thick = random(255);
    }

    show() {
        stroke(255, this.thick);
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.len);
    }

    update() {
        this.pos.add(this.vel);
        if (this.pos.y > height + 100) {
            rains.shift();
        }
    }
}

class Umbrella {
    constructor() {
        this.colors = ['#FF6347', '#0000CD', '#FFD700', '#FFA500', '#008000', '#800080'];
        this.segmentColors = [0, 1, 2, 3, 4, 5];
        this.colorChangeDelay = 25;
        this.handleOffsetX = 260;
        this.handleOffsetY = 296;
    }

    segment(shapeFunc, colorIndex) {
        fill(this.colors[this.segmentColors[colorIndex]]);
        shapeFunc();
    }

    display() {
        noStroke();
        push();
        translate(this.handleOffsetX, height - this.handleOffsetY);
        this.handle();
        if (frameCount % this.colorChangeDelay === 0) {
            this.updateSegmentColors();
        }
        for (let i = 0; i < 6; i++) {
            this.segment(this['segment' + (i + 1)].bind(this), i);
        }
        pop();
    }

    updateSegmentColors() {
        for (let i = 0; i < this.segmentColors.length; i++) {
            this.segmentColors[i] = (this.segmentColors[i] + 1) % this.colors.length;
        }
    }

    handle() {
        push();
        rotate(-5);
        translate(-263, 0);
        beginShape();
        fill('#8B4513');
        vertex(this.handleOffsetX + 6, 0);
        vertex(this.handleOffsetX, 30);
        vertex(this.handleOffsetX, 270);
        vertex(this.handleOffsetX + 12, 270);
        vertex(this.handleOffsetX + 12, 30);
        endShape(CLOSE);
        pop();
    }
    segment1() {
        beginShape();
        vertex(6, 30);
        vertex(-234, 145);
        bezierVertex(-234, 145, (-234 + (-155)) / 2, 145 - 13, -155, 181);
        vertex(-155, 181);
        line(-155, 181, 6, 30);
        endShape();
    }
    segment2() {
        beginShape();
        vertex(6, 30);
        vertex(-155, 181);
        bezierVertex(-155, 181, (-155 + (-45)) / 2, 181 - 20, -45, 189);
        vertex(-45, 189);
        line(-45, 189, 6, 30);
        endShape();
    }
    segment3() {
        beginShape();
        vertex(6, 30);
        vertex(-45, 189);
        bezierVertex(-45, 189, (-45 + 68) / 2, 189 - 23, 68, 184);
        vertex(68, 184);
        line(68, 184, 6, 30);
        endShape();
    }
    segment4() {
        beginShape();
        vertex(6, 30);
        vertex(68, 184);
        bezierVertex(68, 184, (68 + 164) / 2, 184 - 25, 164, 160);
        vertex(164, 160);
        line(164, 160, 6, 30);
        endShape();
    }
    segment5() {
        beginShape();
        vertex(6, 30);
        vertex(164, 160);
        bezierVertex(164, 160, (164 + 248) / 2, 160 - 25, 248, 131);
        vertex(248, 131);
        line(248, 131, 6, 30);
        endShape();
    }
    segment6() {
        beginShape();
        vertex(6, 30);
        vertex(248, 131);
        bezierVertex(248, 131, (248 + 275) / 2, 131 - 25, 275, 100);
        vertex(275, 100);
        vertex(6, 30);
        endShape();
    }
}

class Leaf {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-0.05, 0.05));
        this.accel = createVector(0, 0);
        this.rotation = 0;
        this.width = 20;
        this.height = 10;
        this.dead = false;
        this.rotationIncrement = true;
    }

    applyForce(force) {
        this.accel.add(force);
    }

    update() {
        // Update rotation
        if (this.rotationIncrement) {
            this.rotation += random(5);
        } else {
            this.rotation -= random(5);
        }
        // Reverse rotation direction if rotation exceeds 90 degrees
        if (abs(this.rotation) > 90) {
            this.rotationIncrement = !this.rotationIncrement;
        }

        // Update position and velocity
        this.vel.add(this.accel);
        this.pos.add(this.vel);
        this.accel.set(0, 0);

        this.checkBounds();
    }

    display() {
        // Display the leaf
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

    checkBounds() {
        // Check if the leaf is out of the canvas bounds
        if (this.pos.x > width + 200 || this.pos.x < -200 || this.pos.y > height) {
            this.dead = true;
        }
    }
}