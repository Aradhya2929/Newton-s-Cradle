
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Bob1 = new Bob(400,300,50);
Bob2 = new Bob(350,300,50);
Bob3 = new Bob(450,300,50);
Bob4 = new Bob(500,300,50);
Bob5 = new Bob(300,300,50);
Roof = new Roof(400,200,300,40);
slingshot1 = new Slingshot(Bob1.body,{x:400,y:200});
slingshot2 = new Slingshot(Bob2.body,{x:350,y:200});
slingshot3 = new Slingshot(Bob3.body,{x:450,y:200});
slingshot4 = new Slingshot(Bob4.body,{x:500,y:200});
slingshot5 = new Slingshot(Bob5.body,{x:300,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
 
  Roof.display();
  slingshot1.display();
   Bob1.display();
  slingshot2.display();
  slingshot3.display();
  Bob2.display();
  Bob3.display();
  slingshot4.display();
  Bob4.display();
  slingshot5.display();
  Bob5.display();
}



function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(Bob5.body,Bob5.body.position,{x:-350,y:-350});
	}

}