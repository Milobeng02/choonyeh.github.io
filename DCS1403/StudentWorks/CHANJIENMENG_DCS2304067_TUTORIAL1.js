function setup() {
    createCanvas(1500, 800);
    background(0);
    //drawGrid();
}

function drawGrid()
{
    stroke(200);
    fill(145,179,120);

    for (let x=0; x < width; x+=40){
        console.log(x);
        line(x,0,x,height);
        text(x,x+1,12);
    }

    for (let y=0; y < height; y+=40){
        line(0,y,width,y);
        text(y,1,y+12);
    }
}

function draw() {

    /*fill("#f5d3b3");
    beginShape();
    curveVertex(0,0);
    curveVertex(0,480);
    curveVertex(280, 680);
    curveVertex(680, 720);
    curveVertex(1000, 680);
    curveVertex(1380, 480);
    curveVertex(1480,0);
    endShape(CLOSE);*/
    
    fill(255);
    beginShape();
    stroke(30);
    curveVertex(120, 120);
    curveVertex(280, 100);
    curveVertex(360, 120);
    curveVertex(440, 240);
    curveVertex(240, 240);
    endShape(CLOSE);
    
    fill("#52050b");
    beginShape();
    curveVertex(200, 110);
    curveVertex(250, 180);
    curveVertex(280, 190);
    curveVertex(340, 200);
    curveVertex(380, 170);
    curveVertex(400, 160);
    curveVertex(360, 120);
    curveVertex(320, 100);
    endShape(CLOSE);

    fill(255);
    beginShape();
    stroke(30);
    curveVertex(1200, 120);
    curveVertex(1040, 100);
    curveVertex(960, 120);
    curveVertex(880, 240);
    curveVertex(1080, 240);
    endShape(CLOSE);

    fill("#52050b");
    beginShape();
    curveVertex(1120, 110);
    curveVertex(1070, 180);
    curveVertex(1040, 190);
    curveVertex(940, 200);
    curveVertex(910, 180);
    curveVertex(920, 160);
    curveVertex(960, 120);
    curveVertex(1000, 100);
    endShape(CLOSE);
    fill("#8a0611");
    ellipse(300,150,80,80);
    ellipse(1000,150,80,80);

    fill(255);
    beginShape();
        curveVertex(560,560);
        curveVertex(660,545);
        curveVertex(700,540);
        curveVertex(760,540);
    endShape(CLOSE);   

    fill("#471102");
    beginShape();
    vertex(120,50);
    vertex(300,50);
    vertex(325,80);
    endShape(CLOSE);

    fill("#471102");
    beginShape();
    vertex(1200,50);
    vertex(980,50);
    vertex(955,80);
    endShape(CLOSE);
}