var rect1,rect2

function setup() {
  createCanvas(800,400);
  rect1=createSprite(100, 200, 50, 50);
  rect2=createSprite(700,200,50,50)
  
  rect1.shapeColor="green"
  rect2.shapeColor="green"

  rect1.velocityX=2
  rect2.velocityX=-2
}

function draw() {
  background("black");  

  if(isTouching(rect1,rect2)){
    rect1.shapeColor="red"
    rect2.shapeColor="red"
  }
  else{
    rect1.shapeColor="green"
    rect2.shapeColor="green"
  }
 
  bounceOff(rect1,rect2)
  drawSprites();
  
}

