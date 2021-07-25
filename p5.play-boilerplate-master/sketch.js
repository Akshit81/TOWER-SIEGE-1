
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bird, slingShot;
var engine, world;
function preload() {
  backgroundImg = loadImage("sprites/box.png");
}

function setup() {
   canvas = createCanvas(1200,400);
  createSprite(400, 200, 50, 50);


      engine = Engine.create();
      world = engine.world;
      ground = new Ground(600,height,1200,20);
      box1 = new Box(700,320,70,70);
        box2 = new Box(700,320,70,70);
        box3 = new Box(700,320,70,70);
        box4 = new Box(700,320,70,70);
        box5 = new Box(700,320,70,70);
        box6 = new Box(700,320,70,70);
        box7 = new Box(700,320,70,70);
        box8 = new Box(330,235,30,40);
        box9 = new Box(360,235,30,40);
        box10 = new Box(390,235,30,40);
        box11 = new Box(420,235,30,40);
        box12 = new Box(450,235,30,40);
        box13 = new Box(360,320,70,70);
        box14 = new Box(390,320,70,70);
        box15 = new Box(420,320,70,70);
        box16 =new Box(390,320,70,70);
      


      //polygon holder with sling
      polygon = Bodies.circleI(50,200,20);
    world.add(world,polygon)
    slingshot = new SlingShot(this.polygon,{x:100,y:200});

  }

  function draw() {
    background(255,255,255);  
    drawSprites(); 
    box1.display();
    box2.display(); 
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display(); 
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display(); 
    box16.display();
    ground.display();
  }
  function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }


  function mouseReleased(){
    slingshot.fly();
  }