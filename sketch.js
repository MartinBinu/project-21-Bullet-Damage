var bullet,wall;

var bulletSpeed,bulletWeight,wallThickness;

function setup() {

  createCanvas(1600,400);

  bullet = createSprite(50,200,50,50);

  bulletSpeed = Math.round(random(223,321));

  bulletWeight = Math.round(random(30,52));

  wallThickness = Math.round(random(22,83));

  bullet.velocityX = bulletSpeed;

  wall = createSprite(1500,200,wallThickness,height/2);

  wall.shapeColor = "white";

}

function draw() {

  background("black");  
  
  //car.collide(wall);

  if(hasCollide(bullet,wall)){

    bullet.velocityX = 0;

    var damage = Math.round(0.5*bulletWeight*bulletSpeed*bulletSpeed/wallThickness*wallThickness*wallThickness);

    if(damage > 10){
      bullet.shapeColor = "red";
    }

    if(damage < 10){
      bullet.shapeColor = "green";
    }

  }
    
  drawSprites();

    text("Weight: " + bulletWeight,800,20);
    text("Speed: " + bulletSpeed,800,30);
    text("Damage: " + damage,800,40);

}