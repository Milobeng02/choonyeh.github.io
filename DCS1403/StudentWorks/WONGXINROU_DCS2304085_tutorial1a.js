function setup() {
    createCanvas(900, 900);
    background(0,255,255);
}

function draw(){
  translate(width/2,height/2);

  circle(50, 50, 60);
  line (50,80,50,200);
  line (50,80,80,100);
  line (50,80,15,100);
  line (80,240,50,200);
  line (15,240,50,200);

  fill ('orange');
  triangle (-150,100,-150,225,0,225);
  fill ('white')
  triangle (-130,150,-130,210,-50,210);

  fill ('green')
  quad(120,150,180,150,165,225,135,225);

  fill (255);
  bezier(-380,225,-380,100,-180,100,-180,225);
  fill ('black');  
  circle (-320,170,15);
  circle (-240,170,15);
  arc (-280,170,90,80,radians(40),radians(140),OPEN);
  
  let r=25;
  fill (255);
  rect (250,155,150,80,r,r,r,r);

  line(280,180,280,205);
  line(300,180,300,205);
  line(350,180,350,205);
  line(370,180,370,205);
  line(340,220,310,220);
 
}
