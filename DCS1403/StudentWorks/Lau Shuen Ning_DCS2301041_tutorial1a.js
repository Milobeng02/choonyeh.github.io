//run once
function setup() {
    createCanvas(500, 300);
    background(179, 33,21);
}

//looping forever
function draw() {

    translate (width/2, height/2); //middle,center
    //frame
    //noFill ();
    //stroke ('black');
    //strokeWeight(10);
    //square (-120,-120,250);

    //body
    stroke ('black');
    strokeWeight(4);
    fill (130, 82, 60);
    rect(-65,-83,140,180);

    //left eye
    fill ('black');
    circle(-32,-42,20);

    //right eye
    line (30,-42,50,-50);
    line (30,-42,50,-34);

    //left hand
    fill (130, 82, 60);
    quad (
        -65,-5, 
        -75,-30, 
        -90,-25, 
        -65,20
    );

    //right hand
    quad (
        75,-5,
        75,20,
        90,50,
        100,30
    );

    //leg
    line (-65,75,72,75);
    line (3.5,75,3.5,95)

    //mouth
    stroke ('white');
    fill (216,34,43);
    quad (
        -32,-20,
        -32,20,
        40,20,
        40,-20
    );

    //upper teeth
    strokeWeight(2);
    fill ('white');
    triangle (
        -22,-20,
        -15.5,-9,
        -9,-20
    );

    triangle (
        -9,-20,
        -2.5,-9,
        4,-20
    );

    triangle (
        4,-20,
        10.5,-9,
        17,-20
    );

    triangle (
        17,-20,
        23.5,-9,
        30,-20
    );

    //lower teeth
    triangle (
        -22,20,
        -15.5,9,
        -9,20
    );

    triangle (
        -9,20,
        -2.5,9,
        4,20
    );

    triangle (
        4,20,
        10.5,9,
        17,20
    );

    triangle (
        17,20,
        23.5,9,
        30,20
    );

}
