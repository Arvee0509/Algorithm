var moveRect,fixRect;
function setup() {
  createCanvas(1200,800);
moveRect=createSprite(400,200,80,30);
moveRect.shapeColor='green';
moveRect.debug=true;
fixRect=createSprite(400,700,50,80);
fixRect.shapeColor='green';
fixRect.debug=true;
fixRect.velocityY=-5;
moveRect.velocityY=5;
}

function draw() {
  background(0);  
  //moveRect.x=World.mouseX;
 // moveRect.y=World.mouseY;
  console.log(moveRect.x-fixRect.x);
  if(moveRect.x-fixRect.x < moveRect.width/2+fixRect.width/2 &&
    fixRect.x-moveRect.x<fixRect.width/2+moveRect.width/2 &&
    moveRect.y-fixRect.y<moveRect.height/2+fixRect.height/2&&
    fixRect.y-moveRect.y<fixRect.height/2+moveRect.height/2){
  moveRect.shapeColor='red';
  fixRect.shapeColor='red';
  }
  else{
    moveRect.shapeColor='green';
    fixRect.shapeColor='green';
  }
  if(moveRect.x-fixRect.x<moveRect.width/2+fixRect.width/2&&
    fixRect.x-moveRect.x<fixRect.width/2+moveRect.width/2){
  moveRect.velocityX=(-1)*moveRect.velocityX;
  fixRect.velocityX=(-1)*fixRect.velocityX;
  }
  if(moveRect.y-fixRect.y<moveRect.height/2+fixRect.height/2&&
    fixRect.y-moveRect.y<fixRect.height/2+moveRect.height/2){
      moveRect.velocityY=(-1)*moveRect.velocityY;
      fixRect.velocityY=(-1)*fixRect.velocityY;
    }
  drawSprites();
}