

function setup(){
    createCanvas(windowWidth,windowHeight);
    background('grey');
    }
    
function draw(){

    translate(width/2, height/2);

    point(0,0);
    strokeWeight(3);
    fill('#80FF00');
    quad(-900,200,-900,800,900,800,900,200);
    //vapor
    strokeWeight(0);
    fill(224,224,224);
    ellipse(150,-230,70,50);
    ellipse(170,-260,100,60);
    ellipse(200,-290,150,80);
    //chimney
    fill(102,51,0);
    rect(100,-170,50,100);
    //roof
    fill(153,76,0)
    stroke('black');
    strokeWeight(5);
    triangle(0,-200,250,0,-250,0);
    //house
    fill(255,204,153)
    rect(-200,0,400,250);
    //door
    fill('yellow');
    rect(-25,150,50,100);
    circle(-15,200,10);
    //windows
    fill(202,255,255);
    square(-150,20,70);
    square(80,20,70);
    line(-150,55,-80,55);
    line(150,55,80,55);
    line(115,20,115,90);
    line(-115,20,-115,90);

    //storn
    strokeWeight(2);
    fill(96,96,96);
    ellipse(0,300,70,50);
    ellipse(-50,350,90,60);
    ellipse(50,400,100,50);

    //MOOM
    strokeWeight(7);
    fill('yellow');
    beginShape();
    vertex(-230, -220);
    bezierVertex(-300, -220, -300, -295, -250, -295);
    bezierVertex(-270, -300, -280, -245, -250, -240);
    endShape(CLOSE);

    //people
    fill('white');
    strokeWeight(5);
    circle(-400,150,50);
    //body
    line(-400,175,-400,240);
    //leg
    line(-400,240,-420,280);
    line(-400,240,-380,280);
    //hand
    line(-400,190,-460,210);
    line(-400,190,-380,250);
    }