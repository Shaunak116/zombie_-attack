var sid,sidImage,sidRunning;
var BG,BGImage;
var supplies;
var zombies,zombieImage,zombieWalking;
var Bread,broccoli,corn,iceCream,pizza,soda,takeOut;
var invisibleGround;
var weaponGroup,zombiesGroup;
function preload(){
  sidRunning=loadAnimation("Images/Run.png","Images/Run1.png","Images/Run2.png","Images/Run3.png","Images/Run4.png",
  "Images/Run5.png","Images/Run6.png","Images/Run7.png","Images/Run8.png","Images/Run9.png");
  BGImage=loadImage("Images/city1.png");

  zombieWalking=loadAnimation("Images/Walk1.png","Images/Walk2.png","Images/Walk3.png","Images/Walk4.png",
    "Images/Walk5.png","Images/Walk6.png","Images/Walk7.png","Images/Walk8.png","Images/Walk9.png",
    "Images/Walk10.png");

    Bread=loadImage("Images/Bread.png");
    broccoli=loadImage("Images/broccoli.png");
    corn=loadImage("Images/corn.png");
    iceCream=loadImage("Images/icecreamscoops.png");
    pizza=loadImage("Images/italian_pizza.png");
    soda=loadImage("Images/soda.png");
    takeOut=loadImage("Images/takeout.png");
    
}

function setup() {
  createCanvas(600,400);

  BG=createSprite(400,200,10,10);
  BG.addImage(BGImage);
  BG.scale=1;
  BG.velocityX=-3;

  sid=createSprite(200,330,10,10);
  sid.addAnimation("Running",sidRunning);
  sid.scale=0.3;

  invisibleGround=createSprite(200,400,200,10);
  invisibleGround.visible=false;

  weaponGroup=new Group();
  zombiesGroup=new Group();
}

function draw() {
  background(180);

  if(BG.x<0){
    BG.x=500;
  }
  if(keyDown("space")){
    sid.velocityY=-10;
  }
  if(keyDown("enter")){
createWeapon();
  }
sid.velocityY=sid.velocityY+0.8;
sid.collide(invisibleGround);

  spawnZombies();
  drawSprites();



}
function spawnZombies(){
  if(frameCount%250 ==0){
    zombies=createSprite(700,330,10,10);
    zombies.addAnimation("Walking",zombieWalking)
    zombies.scale=0.3;
    zombies.velocityX=-4;
    zombiesGroup.add(zombies);
  }
  
}
function createWeapon(){
  weapon=createSprite(sid.x,sid.y+20,10,10);
  weapon.velocityX=2;
  weaponGroup.add(weapon);
}





