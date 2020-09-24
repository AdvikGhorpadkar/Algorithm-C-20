 var fixedRectangle, movingRectangle


function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(400, 200, 50, 30)
  fixedRectangle.shapeColor="red"
  movingRectangle=createSprite(600, 200, 30, 50)
  movingRectangle.shapeColor="red"
  }

function draw() {
  background(100,215,255);  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  
  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    && fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2
    && fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2)
    {
      fixedRectangle.shapeColor="green"
      movingRectangle.shapeColor="green"
    }else{
      fixedRectangle.shapeColor="red"
      movingRectangle.shapeColor="red"
    }
  drawSprites();
}