
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var ball
var box



function setup() {
var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var plane_options={
    isStatic: true

	}
	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  }
	  var box_options = {
		restitution : 0.95,
		frictionAir : 0.03
	  }
	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);
	  box = Bodies.rectangle(100,10,20,20,box_options);
      World.add(world,box);

	//Crie os Corpos Aqui.
	plane = Bodies.rectangle(500,680,1000,20,plane_options)
	
	World.add(world,plane)


	Engine.run(engine);

  
}


function draw() {
background(51);	

	Engine.update(engine)
   rect(plane.position.x,plane.position.y,100)

   ellipse(ball.position.x,ball.position.y,20);

   rect(box.position.x,box.position.y,20,20)
 


  rectMode(CENTER);
  
  
  drawSprites();
 
}



