var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "purple"

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "red";
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 5;
    ball.velocityY = 5;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        ball.velocityY=0;
        ball.velocityX=0;
        music.stop();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityY=0;
        ball.velocityX=0;
        music.stop();
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3

    if(isTouching(ball,block3)){
        ball.shapeColor = "purple";
        bounceOff(ball,block3);
        music.play();
    }

    if(isTouching(ball,block4)){
        ball.shapeColor = "red";
        bounceOff(ball,block4);
        music.play();
    }

    //write code to bounce off ball from the block4
    drawSprites();
}

function isTouching(object1,object2) {
    if(object1.x - object2.x < object2.width/2 + object1.width/2 
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2 
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      
        return true;
    }else {
        return false;
    }
  }

  function bounceOff(object1,object2){
  
    if(object1.y - object2.y < object2.height/2 + object1.height/2 
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * ( -1);
        object2.velocityY = object2.velocityY * ( -1);
      }
  }
