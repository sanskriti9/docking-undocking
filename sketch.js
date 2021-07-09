var issImg,iss;
var spacecraft,spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var hasDocked,spacebg;

function preload (){
  spacecraft_moving = loadAnimation("spacecraft1.png","spacecraft2.png",
  "spacecraft3.png","spacecraft4.png")

  issImg = loadImage("iss.png");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  spacebg = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.6;
  
 
  spacecraft = createSprite(370,300,50,50)
  spacecraft.addAnimation("moving",spacecraft_moving);
  spacecraft.scale = 0.1;
}

function draw() {
  background(spacebg); 
 
  if(spacecraft.isTouching(iss)){
    stroke("black")
    text("DOCKING SUCCESSFUL*_*",400,340);
    textSize(20)
  }

  if(!hasDocked){
    spacecraft.positionX = 3;
  if(keyDown("left")){
    spacecraft.x = spacecraft.x-10;
    
  }
  if(keyDown("right")){
    spacecraft.x = spacecraft.x+10;
      
  }
  if(keyDown("up")){
    if(spacecraft.y>25)
    {
      spacecraft.y = spacecraft.y-10;
    }
   
  }
  if(keyDown("down")){
    if(spacecraft.y<25)
    {
      spacecraft.y = spacecraft.y+10;
    }
  }
  
}

 
  drawSprites();
  
}