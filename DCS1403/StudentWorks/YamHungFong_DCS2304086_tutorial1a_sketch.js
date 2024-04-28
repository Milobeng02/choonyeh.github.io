function setup() {
    createCanvas(805, 600);
    background("#FFCDAC");
}

function draw() {
    fill("#99CDFF"); //eyes
    ellipse(150, 120, 100, 100);
    ellipse(550, 120, 100, 100);

    fill("#FFA9CC"); //nose
    rect(300, 250, 100,45);
 
    fill("#EE6666") //mouth
    beginShape();
    vertex(350, 400);
    vertex(450, 500);
    vertex(250, 500);
    vertex(350, 400);
    endShape();

    stroke("#BB6588")
    strokeWeight(5); //linecolour and thickness
    fill("#33CCBA"); 
    beginShape(); //trapezium(cheek)
    vertex(125, 300);
    vertex(150, 375);
    vertex(125, 400);
    vertex(50, 375);
    vertex(125, 300);
    endShape();

    fill("#9AEEDE");
    rect(560,315,80,80,20); //smoothsquare (cheek)

    fill("#DE4444"); //hair
    beginShape();
    vertex(0 , 200);
    vertex(120, 30);
    vertex(350, 120);
    vertex(550 , 15);
    vertex(620, 40);
    vertex(650, 120);
    vertex(680, 80);
    vertex(800, 275);
    vertex(800, 0);
    vertex(0,0);
    vertex(0 , 200);
    endShape(CLOSE);
}