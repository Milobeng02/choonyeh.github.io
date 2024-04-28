function setup() {
    createCanvas(windowWidth, windowHeight); 
    background(220,255,111);
    //background('pink');

}

function draw() {
    let centerX = width /2 ;
    let centerY = height / 2;

    //background半
    noStroke();
    fill(241,255,80);
    rect(0, 0, centerX, height);
    

    fill(115, 251, 253);
    stroke(0);
    strokeWeight(2);
    ellipse(centerX, centerY - 30, 420, 420);
    

    fill('white');
    stroke('yellow');
    strokeWeight(5);
    ellipse(centerX, centerY - 30, 365, 365);

    noStroke();
    fill('yellow');
    circle(centerX- 85, centerY - 150, 60);
    circle(centerX+ 120, centerY - 90, 65);
    //右边
    arc(centerX+ 163, centerY + 10, 30, 35, 0,  TWO_PI);
    arc(centerX+ 155, centerY + 20, 45, 35, 0,  TWO_PI);
    arc(centerX+ 157, centerY + 35, 30, 35, 0,  TWO_PI);
    
    //左边
    arc(centerX- 163, centerY + 10, 30, 35, 0,  TWO_PI);
    arc(centerX- 156, centerY + 30, 30, 35, 0,  TWO_PI);

    //下面
    arc(centerX- 8, centerY + 145, 30, 20, 0,  TWO_PI);
    arc(centerX+ 8, centerY + 140, 35, 30, 0,  TWO_PI);
    arc(centerX+ 20, centerY + 145, 30, 20, 0,  TWO_PI);
    


    stroke(0);
    strokeWeight(2);
    // 外
    fill(50, 130, 246);
    ellipse(centerX, centerY - 40, 280, 280);

    // 内
    fill('white');
    ellipse(centerX, centerY - 20, 250, 230);

    // 眼睛
    fill('white');
    ellipse(centerX - 25, centerY - 120, 50, 70);
    ellipse(centerX + 25, centerY - 120, 50, 70);

    // 眼珠
    fill('black');
    ellipse(centerX - 25, centerY - 110, 20, 25);
    ellipse(centerX + 25, centerY - 110, 20, 25);

    fill('white');
    ellipse(centerX - 25, centerY - 107, 13, 15);
    ellipse(centerX + 25, centerY - 107, 13, 15);


    // 鼻子
    fill('red');
    circle(centerX, centerY - 85, 25);

    // 嘴巴
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(centerX, centerY - 20, 180, 120, 0, PI);

    // 胡须
    strokeWeight(2);
    line(centerX - 50, centerY - 60, centerX - 100, centerY - 70);
    line(centerX - 50, centerY - 50, centerX - 110, centerY - 50);
    line(centerX - 50, centerY - 40, centerX - 110, centerY - 30);
    line(centerX + 50, centerY - 60, centerX + 100, centerY - 70);
    line(centerX + 50, centerY - 50, centerX + 110, centerY - 50);
    line(centerX + 50, centerY - 40, centerX + 110, centerY - 30);

    // 鼻子连嘴巴
    line(centerX, centerY - 73, centerX, centerY + 40);

    // 领带
    fill('red');
    rect(centerX - 100, centerY + 80, 200, 20);

    // 铃铛
    fill('yellow');
    ellipse(centerX, centerY + 105, 32, 32);

    fill('black');
    rect(centerX, centerY + 105, 1, 15);
    circle(centerX, centerY + 107, 8);


    noStroke();
    // 三角
    fill(255, 0, 0); 
    triangle(centerX + 100, centerY - 150, centerX + 120, centerY - 160, centerX + 120, centerY - 130);
    triangle(centerX - 60, centerY + 140, centerX - 100, centerY + 115, centerX - 80, centerY + 110);


    // 点
    fill('blue');
    circle(centerX + 20, centerY - 195, 20); 
    circle(centerX - 120, centerY + 80, 20);


    // 四边
    fill(0, 255, 0); 
    quad(centerX - 70, centerY - 195, centerX - 50, centerY - 190, centerX - 50, centerY - 180, centerX - 70, centerY - 170);
    quad(centerX + 70, centerY + 120, centerX + 90, centerY + 125, centerX + 100, centerY + 120, centerX + 80, centerY + 105);

    // 正方
    fill(240,134,80); 
    square(centerX - 160, centerY - 90, 18);
    square(centerX + 150, centerY - 70, 18);

    //月亮
    fill(193,45,207);
    beginShape();
    vertex(centerX + 100, centerY + 60); // Adjusted position
    bezierVertex(centerX + 130, centerY + 75, centerX + 130, centerY + 95, centerX + 100, centerY + 95); // Adjusted size and curvature
    bezierVertex(centerX + 115, centerY + 100, centerX + 120, centerY + 65, centerX + 100, centerY + 60); // Adjusted position
    endShape();


}
