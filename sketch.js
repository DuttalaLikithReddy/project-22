var athlete,Tom;
var rock;
var gameover;
var path;
var money;
var MoneyCollection = 0;
var PLAY=1;
var END=0;
var gameState=1;
function preload(){
Rock=loadImage("rock.jpg");
Tom=loadImage("athlete.jpg");
Gameover=loadImage("gameover.jpg");
pathImg=loadImage("path.png");
money=loadImage("money.jpg");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 path=createSprite(width/2,200);
 path.addImage(pathImg);
 path.x=width/2;
 path.velocityY=4;


 athlete=createSprite(width/2,height-20,20,20);
 athlete.addAnimation("Tomrunning",Tom);
 athlete.scale=0.08;

maneygroup=new Group();
rockgroup=new Group();
}

function draw() {
 
if(gameState===PLAY){
    background(0);
    athlete.x=World.mouseX;
   edges=createEdgeSprites();
   boy.collided(edges);

   if(path.x < 0){
       path.x=ground.width/2;
   }
   createmoney();
   createrock();
   
   if (cashG.isTouching(boy)) {
    moneygroup.destroyEach();
    MoneyCollection=MoneyCollection + 100}
    
  else if(rockgroup.isTouching(boy)) {
      gameState=END;
      athlete.addAnimation("Tom running",Gameover);
      athlete.x=width/2;
     athlete.y=height/2;
             athlete.scale=0.6;
             
      moneygroup.destroyEach();
      
      moneygroup.setVelocityYEach(0);
          
      }
       
       drawSprites();
textSize(20);
fill(255);
text("Money: "+ MoneyCollection,width-150,30);
    }
}
function createmoney() {
    if (World.frameCount % 200 == 0) {
     // Modify the positions of cash 
       var money = createSprite(Math.round(random(50, 350),40, 10, 10));
       money.addImage(money);
    money.scale=0.12;
    money.velocityY = 5;
    money.lifetime = 200;
    moneygroup.add(money);
      }
    }


