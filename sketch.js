
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
var obstacle, food;
var img1, img2;
var jungle, jImg;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
img2 = loadImage("banana.png");
  img1 = loadImage("obstacle.png");
  jImg = loadImage("jungle.jpg");

}



function setup() {
  createCanvas(600, 400)
   jungle = createSprite(0, 0, 400, 400);
  jungle.addImage(jImg);
score = 0
  FoodGroup = createGroup();
  obstacleGroup= createGroup();
monkey = createSprite(50, 300, 10, 10);  
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1;
 

  
  ground = createSprite(0, 305, 900, 5);
  ground.velocityX = -3;
ground.visible = false

 jungle.velocityX = -2;
}


function draw() {
  background("white")
  
  if(ground.x<0 && jungle.x<0){
    ground.x = ground.width/2;
    jungle.x = jungle.width/2;
  }
  
   if(keyDown("SPACE")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+0.3;
  monkey.collide(ground);

obstacles();
  
  foods()
  
 if(obstacleGroup.isTouching(monkey)){
   monkey.scale = monkey.scale-0.0001   
 }
  
 if(FoodGroup.isTouching(monkey)){
   monkey.scale = monkey.scale+0.0001;
    score = score+1;
   FoodGroup.destroyEach();
 }
  
  
  drawSprites();
  fill("black");
   text("Score: "+ score, 200,50);
}
function foods()
{
  if(frameCount%80 === 0){
  
    food= createSprite(200, 200, 20, 20);  
     food.addImage(img2)
    food.scale=0.1
    food.y = Math.round(random(120, 200));
    food.velocityX = -2;
    food.lifetime=150;
    FoodGroup.add(food);
    
    
  }
   
}
function obstacles()
{
  if(frameCount%300 === 0){
    obstacle= createSprite(200, 290, 20, 20);
   obstacle.addImage(img1)
  obstacle.scale = 0.1;
obstacle.velocityX = -2;
 obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
   
    
  }
   
}




