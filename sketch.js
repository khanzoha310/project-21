var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

 block1 = createSprite (100,560,200,30);
block1.shapeColor = rgb(255,0,0);

block2 = createSprite (300,560,200,30);
block2.shapeColor = rgb(0,255,0);

block3 = createSprite (500,560,200,30);
block3.shapeColor = rgb(0,0,255);

block4 = createSprite (700,560,200,30);
block4.shapeColor = rgb(70,25,100);

ball = createSprite (random(20,750),100,30,30);
ball.shapeColor = rgb(255,255,255);

ball.velocityX = 6;
ball.velocityY = 6;


}

function draw() {
    background(rgb(169,169,169));
   
edges = createEdgeSprites();
ball.bounceOff(edges);

if(block1.isTouching(ball) && ball.bounceOff(block1) )
{
    ball.shapeColor = rgb(255,0,0);
    music.play;
}

if(block2.isTouching(ball) )
{
    ball.shapeColor = rgb(0,255,0);
    ball.velocityX = 0;
    ball.velocityY = 0;
}

if(block3.isTouching(ball) && ball.bounceOff(block3) )
{
    ball.shapeColor = rgb(0,0,255);
    music.stop();
}

if(block4.isTouching(ball) && ball.bounceOff(block4) )
{
    ball.shapeColor = rgb(70,25,100);
    
}


drawSprites();

    //add condition to check if box touching surface and make it box
}
