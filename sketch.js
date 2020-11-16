var obj1, obj2;

function setup() {
  createCanvas(1200,800);
    obj1 = createSprite(250, 400, 100, 250);
    obj2 = createSprite(1050, 400, 250, 100);
    obj2.velocityX = -3;
}

function draw() {
    background("yellow");
    
    if (obj2.x - obj1.x < obj1.width / 2 + obj2.width / 2 &&
        obj1.x - obj2.x < obj1.width / 2 + obj2.width / 2) {
        obj2.velocityX = obj2.velocityX * (-1);
    }
    /*else if (obj2.y - obj1.y < obj1.height / 2 + obj2.height / 2 &&
        obj1.y - obj2.y < obj1.height / 2 + obj2.height / 2) {
        obj2.velocityY = obj2.velocityY * (-1);
    }*/
    drawSprites();
}