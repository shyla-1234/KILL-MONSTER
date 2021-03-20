const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, monster1;
var backgroundImg,platform;
var superhero, slingShot;
var gameState="onSling";
var score=0;
var bg="sprites/bg.png";

function setup(){
    var canvas = createCanvas(2000,900);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1000,height,2000,20);
    

    box1 = new Box(1680,765,70,70);
    box2 = new Box(1628,745,70,70);
   
 

   box3 = new Box(1500,740,70,70);
    box4 = new Box(1620,740,70,70);
    
 

 

   box5 = new Box(1710,660,70,70);
   box6= new Box(1661,666,70,70);
    superhero = new Superhero(700,700);

  
    slingshot = new SlingShot(superhero.body,{x:300, y:550});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(30);
    fill("white");
    text("Score"+score,width-300,50);
    fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
  

  
    box4.display();
   

    box5.display();
  
box6.display();
    superhero.display();
   
    slingshot.display();    
   
}

function mouseDragged(){
  
    
    Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}
function keyPressed(){

    if (keyCode===32&&superhero.body.speed<1){
        superhero.trajectory=[];
        Matter.Body.setPosition(superhero.body,{x:200,y:50});
       slingshot.attach(superhero.body);
    }
}







