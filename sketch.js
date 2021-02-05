
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob1, bob2, bob3, bob4, bob5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	background(10)


	engine = Engine.create();
	world = engine.world;


	roof1 = new roof(350,200,500,50);

	bob1 = new bob(150,600,100);
  bob2 = new bob(250,600,100);
  bob3 = new bob(350,600,100);
  bob4 = new bob(450,600,100);
	bob5 = new bob(550,600,100);

	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  line(bob1.body.position.x, bob1.body.position.y,roof1.body.position.x - 200, roof1.body.position.y);
  line(bob2.body.position.x, bob2.body.position.y,roof1.body.position.x - 100, roof1.body.position.y);
  line(bob3.body.position.x, bob3.body.position.y,roof1.body.position.x, roof1.body.position.y);
  line(bob4.body.position.x, bob4.body.position.y,roof1.body.position.x + 100, roof1.body.position.y);
  line(bob5.body.position.x, bob5.body.position.y,roof1.body.position.x + 200, roof1.body.position.y);
 
  drawSprites();
 
}

