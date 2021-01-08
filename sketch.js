
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof();
	bob1=new Bob(150,350);
	bob2=new Bob(190,350);
	bob3=new Bob(230,350);
	bob4=new Bob(270,350);
	bob5=new Bob(310,350);
	rope1=new Rope(bob1.body,roof.body,-95,0);
	rope2=new Rope(bob2.body,roof.body,-55,0);
	rope3=new Rope(bob3.body,roof.body,-15,0);
	rope4=new Rope(bob4.body,roof.body,25,0);
	rope5=new Rope(bob5.body,roof.body,65,0);
	Engine.run(engine);
	var render = Render.create({ element:document.body, engine: engine, options: { width: 400, height: 400, showAngleIndicator: true, wireframes:true, }, }); 
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

