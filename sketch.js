var bullet,wall
var speed,weight
var thickness




function setup() {
  createCanvas(1600,400);
  speed=random(30,52)
  weight=random(223,321)
  thickness=random(40,100)
  bullet=createSprite(50,200,35,10)
  bullet.velocityX=speed;
  bullet.shapeColor="brown"
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="black"



}

function draw() {
  background("pink") 


  






  drawSprites();
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
  
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
}

function hasCollided(Kbullet,Kwall){

bulletRightEdge=Kbullet.x+Kbullet.width;
wallLeftEdge=Kwall.x
if (bulletRightEdge>=wallLeftEdge)
{
  return true
} 
return false;
}
  


