var canvas;
var music;
var box
var surface1
var surface2
var surface3
var surface4





//createEdgeSprites()

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(980,600);

    box = createSprite(random(20,750),100,30,30)
    surface1 = createSprite(120,560,180,40)
    surface2 = createSprite(360,560,180,40)
    surface3 = createSprite(600,560,180,40)
    surface4 = createSprite(840,560,180,40)

    surface1.shapeColor = "red";
    surface2.shapeColor = "blue";
    surface3.shapeColor = "green";
    surface4.shapeColor = "purple";

    box.velocityY = 6
    box.velocityX = -6

}

function draw() {
    background(rgb(169,169,169));


    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "red"; 
        }
    
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
         box.shapeColor = "blue"; 
        }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green"; 
        }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "purple"; 
        }

    box.bounceOff(createEdgeSprites())

    drawSprites();
}
