function setup(){
    createCanvas(800,800);
    background(178, 168, 237);
}

function draw(){
    translate(width/3,height/10);
    let size = 200;

    //circle
    fill(52, 235, 192);
    stroke(27, 161, 129);
    ellipse(size/2,size,size*1.8);

    fill(255);
    stroke(0);
    ellipse(size/2.5,size,size/6);
    ellipse(size/1.5,size,size/6);

    fill(0);
    ellipse(size/2.5,size,size/10);
    ellipse(size/1.5,size,size/10);

    fill(0);
    rect(size/2,size*1.05,size/15, size/60);

    //boomerang
    translate(width/4,height/3);
    beginShape();
    fill('orange');
    stroke(171, 79, 26);
    curveVertex(0,0);
    curveVertex(0,0);
    curveVertex(0,size);
    curveVertex(size/4,size/2);
    curveVertex(size/2,size/4);
    curveVertex(size,0);
    endShape(CLOSE);
    
    //bow
    translate(width/8,height/50);
    beginShape();
    fill('red');
    stroke(171, 38, 26);
    triangle(0,0,50,-30,50,30);
    triangle(0,0,-50,30,-50,-30);
    endShape(CLOSE);
    
    //rhombus
    translate(-width/2,-height/50);
    beginShape();
    fill('purple');
    stroke(0);
    quad(width/20, height/10, width/13, height/60, width/20, -height/20, width/50, height/60);
    fill('pink');
    quad(width/20, height/100, width/15, -height/30, width/20, -height/15, width/32, -height/30);
    endShape(CLOSE);

    let s = 'Wanna play boomerang together?';
    textSize(25);
    fill('purple');
    stroke('pink');
    text(s,width/20,height/3);
}

/**let ang;
let slider1, slider2, slider3, slider4;
let x1 = 0;
let y1 = 0;
let x4 = 380;
let y4 = 0;
let x2,y2,x3,y3;

function setup() {
  createCanvas(800, 800);
  slider1 = createSlider(0,500,0,50);
  slider2 = createSlider(0,500,0,50);
  slider3 = createSlider(0,500,0,50);
  slider4 = createSlider(0,500,0,50);
  
}

function draw() {
  background(220);
  
  translate(200,height/2);
  
  let x2 = slider1.value();
  let y2 = slider2.value();
  let x3 = slider3.value();
  let y3 = slider4.value();
  
  beginShape();
  curveVertex(x1,y1);
  curveVertex(x1,y1);
  curveVertex(x2,y2);
  curveVertex(x3,y3);
  curveVertex(x4,y4);
  endShape(CLOSE);
  //curve
  /**translate(width/2,height/2);
  let size = 100;
    //line(0,0,size,0);
    beginShape();
    curveVertex(0,0);
    curveVertex(0,0);
    curveVertex(0,size);
    curveVertex(50,size/2);
    curveVertex(150,size/2);
    curveVertex(size,0);
    //curveVertex(0,size);
    endShape(CLOSE);

    console.log("x2: "+ x2);
    console.log("y2: "+y2);
    console.log("x3: "+x3);
    console.log("y3: "+y3);
}*/

