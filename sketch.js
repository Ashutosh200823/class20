var rectangle1;
var rectangle2;



function setup() {
  createCanvas(400,600);
  
  rectangle1=createSprite(200,200,30,80);
  rectangle1.shapeColor="red";

  rectangle2=createSprite(300,200,80,30);
  rectangle2.shapeColor="red";
  
}

function draw() {
  background(255,255,255);
  rectangle2.y=World.mouseY;
  rectangle2.x=World.mouseX;  
  rectangle1.debug=true;
  rectangle2.debug=true;
  if(rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2
    && rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2
    && rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2
    && rectangle1.y-rectangle2.y<rectangle1.height/2+rectangle2.height/2){
    rectangle2.shapeColor="blue";
  }
  else {   
    rectangle2.shapeColor="red";
  }
  drawSprites();
}