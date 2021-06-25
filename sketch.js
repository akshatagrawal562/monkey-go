var monkey ,banana ;
var gound ,invisibleGround ; 
var                 Monkey_01,Monkey_02,Monkey_03,Monkey_04,Monkey_05,Monkey_06,Monkey_07,Monkey_08,Monkey_09,Monkey_10;
var stone;

function preload() {
  monkey_Running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png");
  
  
}
function setup() {
  createCanvas(600, 200);
  monkey=createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_Running);
  monkey.scale=0.1;
  ground=createSprite(300,170,600,5);
  invisibleGround=createSprite(300,175,600,5);
  invisibleGround.visible=false;
}

function draw() {
  background("white");
  
  if(keyDown("space")) {
      monkey.velocityY = -10;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   monkey.collide(invisibleGround);
  
  drawSprites();
  createbanana();
   createstone();

}


function createbanana(){
 if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}
function createstone(){
  if (frameCount % 100 === 0) {
    var stone = createSprite(600,155,10,40);
    stone.addImage(stoneImage);
    stone.scale=0.1;
    stone.velocityX=-5;
  }

}