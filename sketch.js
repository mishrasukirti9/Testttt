//string
var s= "neeraj"

//number
var J = 7

//boolean
var t= true;

//undefined
var object;
console.log(object);

//null
var object = null;
console.log(object);

var arr1 = [1,"happy",true,null,"abcd",s];
console.log(arr1);
console.log(arr1[3]);

var arr4 = [[56,89,12],[78,09],[56,907,23,89]];
console.log(arr4);
console.log(arr4[0][1]);

arr4.push("Sukirti");
console.log(arr4);
arr4.pop()
console.log(arr4);

var position = [["x1","y1"],["x2","y2"],["x3","y3"]]
position[0][0];
position[1][0];
position[2][0];
position[0][1];
position[1][1];
position[2][1];
//Image(this.Image,position[a][0])


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,gimg;
var runner,runnerImg;
var ice=[];
var maxSnow=100;

function preload(){
  bg=loadImage("snow2.jpg");
  gimg=loadImage("ground.PNG");
  runnerImg=loadAnimation("sc1.PNG","sc2.PNG","sc3.PNG","sc4.PNG","sc5.PNG","sc6.PNG","sc7.PNG","sc8.PNG","sc9.PNG","sc10.PNG","sc11.PNG","sc12.PNG")
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  


ground=createSprite(650,670);
ground.addImage(gimg);
ground.scale=3.2;
ground.velocityX=-10;

runner=createSprite(150,480);
runner.addAnimation("runner",runnerImg)
runner.scale=1.1;
runner.velocityX=2;
runner.setCollider("rectangle",15, -20,100,180) 

if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  runner.collide(ground);

  if(ground.x < 530){
    ground.x=600;
  }

  if(runner.x > 1200){
    runner.x=150;
  }

  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

//add gravity
runner.velocityY = runner.velocityY + 0.8

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    


ground.display();

  
  drawSprites();

}