var fixedRect, movingRect;
var box1, box2, box3, box4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(300, 600, 50, 50);
  box1.shapeColor = "red";
  box2 = createSprite(500, 200, 50, 50);
  box2.shapeColor = "red";
  box3 = createSprite(100, 700, 50, 50);
  box3.shapeColor = "red";
  box4 = createSprite(200, 100, 50, 50);
  box4.shapeColor = "red";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  text(mouseX+","+mouseY,mouseX,mouseY);

  if (isTouching(movingRect, box2)){
  movingRect.shapeColor = "blue";
  box2.shapeColor = "blue";
  }
  else{
  movingRect.shapeColor = "red";
  box2.shapeColor = "red";
  }

  drawSprites();
}
