function setup(){
    createCanvas(1500,800);
    background("black");
    //drawGrid();
}

//function drawGrid()
//{
   //stroke(200);
    //fill(145,179,120);

    //for (let x=0; x < width; x+=40){
        //console.log(x);
        //line(x,0,x,height);
        //text(x,x+1,12);
    //}

    //for (let y=0; y < height; y+=40){
        //line(0,y,width,y);
        //text(y,1,y+12);
    //}
//}

function draw(){

    fill('red');
    beginShape();
    vertex(100,150);
    vertex(250,200);
    vertex(350,250);
    endShape(CLOSE);

    fill('red');
    beginShape();
    vertex(700,250);
    vertex(800,200);
    vertex(950,150);
    endShape(CLOSE);

    fill('white');
    beginShape();
    vertex(100,240);
    vertex(330,330);
    vertex(100,180);
    endShape(CLOSE);

    fill('white');
    beginShape();
    vertex(950,180);
    vertex(720,330);
    vertex(920,250);
    endShape(CLOSE);

    fill('yellow')
    ellipse(200,260,25,25)

    fill('red')
    ellipse(825,275,25,25)

    fill('#FFC990')
    triangle(535,430,500,470,570,470);

    fill('white')
    beginShape();
    vertex(320,640);
    vertex(400,680);
    vertex(440,700);
    vertex(480,700);
    vertex(680,640);
    vertex();
    vertex();
    vertex();
    endShape(CLOSE);
    
}
