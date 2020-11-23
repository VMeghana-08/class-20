var fixedRect,movingRect,fixedRect1;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue"
  fixedRect1=createSprite(600, 200, 50, 50);
  fixedRect1.shapeColor="blue"
 // fixedRect1.velocityX=-3;
  fixedRect.velocityX=3
  movingRect=createSprite(700, 200, 50, 50);
  movingRect.velocityX=-3
  movingRect.shapeColor="blue"
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);
 // movingRect.x=mouseX;
  //movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
    &&fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else {
    fixedRect.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    ){
      movingRect.velocityX=movingRect.velocityX*-1;
      fixedRect.velocityX=fixedRect.velocityX*-1;

    }

  drawSprites();
}