       
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

bananaGroup = new Group()
obstacleGroup = new Group()
monkey = createSprite(80,315,20,20)
monkey.addAnimation("moving", monkey_running)
monkey.scale = 0.1
 

ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2
console.log(ground.x)
  
}


function draw() {
background("lightBlue");

stroke("white")
textSize(20)
fill("white")
text("score: "+ score< 500,50);

stroke("black")
textSize(20);
survivalTime=Math.ceil(frameCount/frameRate())
text("survival Time: "+ survivalTime, 100,50);
  

spawnObstacles();
spawnFruits();

if (ground.x<0){
ground.x = ground.width/2;
}

if (keyDown ("space")){
monkey.velocityY = -12  
}  
monkey.velocityY = monkey.velocityY + 0.8

monkey.collide(ground); 

drawSprites();
}  


function spawnObstacles(){
 if (frameCount % 120 === 0){
   var obstacle = createSprite(300,165,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.2
   obstacle.y = Math.round(random(300,300));
   obstacle.velocityX = -4
}
}

function spawnFruits(){
if (frameCount % 60 === 0){
 var banana = createSprite(300,150,10,40);
 banana.scale = 0.1
 banana.addImage(bananaImage)
 banana.velocityX = -4

  
}
}