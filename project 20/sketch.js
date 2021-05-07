var cat,mouse;



function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    cat1Image = loadImage("images/cat1.png");
    cat2Image = loadImage("images/cat2.png");
    cat3Image = loadImage("images/cat3.png");
    cat4Image = loadImage("images/cat4.png");
    mouse1Image = loadImage("images/mouse1.png");
    mouse2Image = loadImage("images/mouse2.png");
    mouse3Image = loadImage("images/mouse3.png");
    mouse4Image = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1600,1200);
    
    mouse = createSprite(400,690,10,10);
    mouse.addImage("mouse1Image",mouse1Image);
    mouse.scale = 0.2;
    //background = createSprite(1,200,600,600);
    //background.addImage("garden",gardenImage);
    //background.scale = 2.3;
    cat = createSprite(1200,750,10,10);
    cat.addImage("catstill",cat1Image);
    cat.scale = 0.2;

}

function draw() {
    background(gardenImage);

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX = 0;
      cat.addImage("cat4Image",cat4Image);
      cat.x = 300;
      cat.scale = 0.2;
      mouse.addImage("mouse4Image",mouse4Image);
      mouse.scale = 0.2;
      mouse.changeImage("mouse4Image");
      mouse.scale = 0.2;
    }   

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addImage("catRunning",cat2Image);
        cat.changeImage("catRunning",cat2Image);
        mouse.addImage("mouse2Image",mouse4Image);
        mouse.changeImage("mouse2Image");
        mouse.scale = 0.2;
        mouse.frameDelay = 24;
    }

    

  //For moving and changing animation write code here


}
