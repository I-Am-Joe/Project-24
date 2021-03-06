var Paper,groundSprite
var Bin1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	Paper = new PaperClass(50,300,20);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 BoxSide1Sprite = createSprite(450,650,10,50);
	 BoxSide1Sprite.shapeColor=color(255);
	 BoxSide1 = Bodies.rectangle(60,10,10,50,{isStatic:true});


	 BoxSide2Sprite = createSprite(650,650,10,50);
	 BoxSide2Sprite.shapeColor=color(255);
	 BoxSide2 = Bodies.rectangle(550,10,10,50,{isStatic:true});

	 Bin1 = new Bin(1000,650);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 Paper.display();
 Bin1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85})
	}
}


