var sceneimage,Player, P1, heart, H1, b1;


function preload(){
sceneimage = loadImage("j.jpg")
Player=loadImage("idk-removebg-preview.png")
heart=loadImage("heart-removebg-preview.png")
}

function setup() {
 
  P1=createSprite(400,200,400,200)
    P1.addImage(Player)
    P1.scale=0.5
   H1=createSprite(740,20,740,20)
 // P1.addIma
 b1= new Bow(180, 110, 100, 50, 20);



  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 //scene = new Background(400,200,800,400)
}

function draw() {
 
  //for (var i = 0; i < balls.length; i++) {
   // showCannonBalls(balls[i], i);
  //}

  b1.display();
  

  //showBoats();
  //Matter.Body.setVelocity(boat.body,{x:-0.9, y:0})
  
    if(keyIsDown(UP_ARROW)&&keyDown(SPACE)){
         shoot()
      }
  background(sceneimage);  
  drawSprites();
}