
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 900);
     
	 var ball_options={
		 isStatic : false,
		 restitution : 0.3,
		 friction : 0,
		 density : 1.2
	 }

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     Matter.Bodies.circle(400,450,20,options);
	 World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  display();
  drawSprites();
 
}



