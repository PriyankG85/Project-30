
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, rope1, rope2, rope3, rope4, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload() {

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width / 2, 150, 320);
	bobObject1 = new Bob(width / 2 - 100, 500, 50);
	bobObject2 = new Bob(width / 2 - 50, 500, 50);
	bobObject3 = new Bob(width / 2, 500, 50);
	bobObject4 = new Bob(width / 2 + 50, 500, 50);
	bobObject5 = new Bob(width / 2 + 100, 500, 50);

	rope1 = new Rope(bobObject1.body, roof.body, - 100, 0);
	rope2 = new Rope(bobObject2.body, roof.body, - 50, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, + 50, 0);
	rope5 = new Rope(bobObject5.body, roof.body, + 100, 0);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background('aquamarine');

	drawSprites();
	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -130, y: -150 })
	}
}

