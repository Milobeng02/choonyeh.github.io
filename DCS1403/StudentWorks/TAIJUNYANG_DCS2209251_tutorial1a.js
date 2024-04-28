function setup() {
    createCanvas(700,700);
}

function draw() {

    fill('yellow');
    noStroke();
    beginShape();
    vertex(400,20);
    bezierVertex(320,10,320,100,420,90);
    bezierVertex(380,80,380,40,400,20);
    endShape();

    fill(0,51,102);
    beginShape();
    rect(120,220,340,320);
    endShape();

    fill(96,96,96);
    beginShape();
    rect(245,360,90,160);
    endShape();

    fill(51,0,0);
    beginShape();
    triangle(290,80,100,220,480,220);
    endShape();

    fill('white');
    beginShape();
    rect(170,270,60);
    rect(350,270,60);
    endShape(CLOSE);   

    fill('black');
    noStroke();
    beginShape();
    curveVertex(255,520);
    curveVertex(285,520);
    curveVertex(282,489);
    curveVertex(267,492);
    curveVertex(250,485);
    endShape(CLOSE);

    fill(255);
    beginShape();
    ellipse(260,500,5,5);
    ellipse(275,500,5,5);
    endShape();



}
