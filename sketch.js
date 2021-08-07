var iss, spacecraft;
var bg,issimg,scimg;
var hasDocked=false;

function preload(){
  bg=loadImage("images/spacebg.jpg");
  issimg=loadImage("images/iss.png");
  scimg=loadImage("images/spacecraft1.png");
  scimg1=loadImage("images/spacecraft2.png");
  scimg2=loadImage("images/spacecraft3.png");
  scimg3=loadImage("images/spacecraft4.png");

}






function setup() {
  createCanvas(600,350);
 spacecraft= createSprite(285,240);
 spacecraft.addImage(scimg);
 spacecraft.scale=0.15;

 iss=createSprite(330,130);
 iss.addImage(issimg);
 iss.scale=0.25;

}

function draw() {
  background(bg);
spacecraft.addImage(scimg);
if(!hasDocked){
  spacecraft.x=spacecraft.x+ random(-1,1);
if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-2;
}
if(keyDown("DOWN_ARROW")){
  spacecraft.y=spacecraft.y+2;
}
if(keyDown("LEFT_ARROW")){
  spacecraft.x=spacecraft.x-1;
}
if(keyDown("RIGHT_ARROW")){
  spacecraft.x=spacecraft.x+1;
}
}

if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
  hasDock=true;
  textSize(25);
  fill("white");
  text("Docking Successful!",200,300);
}

 
  drawSprites();
}