function setup() {
     createCanvas(500,500);
     
}
function draw(){
     background(255,255,255);
     fill(255,222,173); //,first shape & inside color
     strokeWeight(2); //border weight
     stroke(255,204,100); //border
     ellipse(180, height/2, 60, 60); //location shape
     fill('#FCD12A');
     ellipse(width/2, height/2, 75, 80); // center of the flower
     fill('#CC7722');
     
    
     fill(255,222,173);
     ellipse(195,190,60,60);
     
     ellipse(255,176,60,60);
     
     ellipse(310,210,60,60);

     ellipse(310,210,60,60);

     ellipse(315,272,60,60);
     
     ellipse(205,309,60,60);

     ellipse(270,320,60,60); // CIRCLE

     stroke(255,255,255);
     fill('green');
    
     rect(235,350,20,65,55,88); //ROOT
     
     fill('brown')
     rect(170, 400, 155, 20);

     square(215,420, 60);
     
      // Calculate the middle of the canvas
  let middleX = 200;
  let bottomY = 3500/7; // bottom of the canvas
  
  // Draw a triangle at the bottom of the canvas
  triangle(middleX - 50, bottomY - 50, middleX + 50, bottomY - 50, middleX, bottomY);

  let middleA = 300;
  let bottomB = 3500/7; // bottom of the canvas
  
  // Draw a triangle at the bottom of the canvas
  triangle(middleA - 50, bottomB - 50, middleA + 50, bottomB - 50, middleA, bottomB);
}

