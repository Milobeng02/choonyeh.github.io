function setup() {
  createCanvas(1280,720);
  background(127,255,237);
}

function draw() {
  fill("#FFD490");
  ellipse(650,250,400,400);

  fill("red");
    beginShape();
    vertex(573,100);
    vertex(600,125);
    vertex(640,125);
    vertex(610,155);
    vertex(620,185);
    vertex(570,165);
    vertex(530,185);
    vertex(540,155);
    vertex(510,125);
    vertex(550,125);
    endShape(CLOSE);

    fill("red");
    beginShape();
    vertex(723,100);
    vertex(750,125);
    vertex(790,125);
    vertex(760,155);
    vertex(770,185);
    vertex(720,165);
    vertex(680,185);
    vertex(690,155);
    vertex(660,125);
    vertex(700,125);
    endShape(CLOSE);

    fill(0,255,0);
    beginShape();
    vertex(650,220);
    vertex(600,260);
    vertex(700,260);
    endShape(CLOSE);

    fill(0);
    arc(650, 340, 180, 100, 0, PI);

    fill(0,255,0);
    rect(600,450,100,200,20);
}