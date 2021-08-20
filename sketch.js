var iss,backgroundImg,issImg,spaceCraftImg;

var hasDocked = false;

var spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4;

function preload(){
  backgroundImg = loadImage("space.jpg");
  issImg = loadImage("iss.png");
  spaceCraftImg = loadImage("spacecraft.png");
  spaceCraft1 = loadImage("spacecraft1.png");
  spaceCraft2 = loadImage("spacecraft2.png");
  spaceCraft3 = loadImage("spacecraft3.png");
  spaceCraft4 = loadImage("spacecraft4.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  spaceCraft = createSprite(width/2,height/2 +150);
  spaceCraft.addImage("spaceCraft",spaceCraftImg);
  spaceCraft.scale = 0.25;

  iss = createSprite(width/2,height/2);
  iss.addImage("iss",issImg);
  iss.scale = 0.40;
}

function draw(){
  background(backgroundImg);

  spaceCraft.addImage(spaceCraftImg);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spaceCraft.addImage(spaceCraft1);
      spaceCraft.y = spaceCraft.y-2;
    }

    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(spaceCraft3);
      spaceCraft.x = spaceCraft.x -1;
    }

    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(spaceCraft2);
      spaceCraft.x = spaceCraft.x +1;
    }

    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(spaceCraft4);
      spaceCraft.y = spaceCraft.y +2;
    }

  }

  if(spaceCraft.y <= (iss.y + 70) && spaceCraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(33);
    fill("white");
    text("Docking Successful",width/2 - 150,100);
  }

  drawSprites();
}