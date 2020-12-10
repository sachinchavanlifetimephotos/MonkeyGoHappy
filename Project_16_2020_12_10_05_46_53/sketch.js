var monkey , monkey_running; 
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score; 
var ground, invisibleGround; 
var bananas; 
var PLAY=1; 
var END=0; 
var gameState=1; 
var ground2; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() { 
  createCanvas(600,600); 
  
  monkey=createSprite(100,250,20,20); 
  monkey.addAnimation("moving", monkey_running); 
  monkey.scale=0.1; 
  
  ground=createSprite(600,550,600,10); 
  ground.velocityX=-1; 
  ground.x=ground.width/2; 
  
  ground2=createSprite(400,550,400,10); 
  
  

 console.log(ground.x);  
  
  invisibleGround = createSprite(500,330,600,20);
  invisibleGround.visible = false;
  
  SurvivalTime=0; 
  
 
  FoodGroup= new Group(); 
  obstacleGroup= new Group(); 
}


function draw() { 
  background("green"); 
  text("SurvivalTime: "+SurvivalTime,400,50); 
 
 bananas(); 
 obstacle(); 
  
  if(ground.x<0){ 
  
   ground.x=ground.width/2; 
    } 
  
  if(keyDown("space")){ 
  monkey.velocityY=-17; 
  }  
  
  if(monkey.isTouching(FoodGroup)){ 
    SurvivalTime=SurvivalTime+1; 
    FoodGroup.destroyEach(); 
  } 
  
  if(gameState===END){ 
  monkey.destroy(); 
  monkey.velocityX=0; 
  obstacleGroup.destroyEach(); 
  obstacleGroup.velocityY=0; 
  FoodGroup.destroyEach(); 
  FoodGroup.velocityY=0; 
  textSize(30); 
  text("GAME OVER",200,200);
  }
  
  if(monkey.isTouching(obstacleGroup)){ 
  gameState=END; 
  
   }
  
  
  
  monkey.collide(invisibleGround);   
  
  monkey.velocityY= monkey.velocityY+0.8; 
  
  monkey.collide(ground); 
  
  drawSprites(); 
  
  function bananas(){ 
if(frameCount%80===0){ 
 banana=createSprite(600,400,10,10); 
  banana.addImage(bananaImage); 
  banana.scale=0.1; 
  banana.velocityX=-6 ; 
  banana.lifetime=150; 
  FoodGroup.add(banana); 
}
  
  
} 
  
function obstacle(){  
if(frameCount%80===0){ 
  obstacles=createSprite(600,510,20,20); 
  obstacles.addImage(obstacleImage); 
  obstacles.scale=0.2; 
  obstacles.velocityX=-5; 
  obstacles.lifetime=150; 
  obstacleGroup.add(obstacles); 
}

}
  
}


