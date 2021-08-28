
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall=[]
var score = 0
var groundObj
var isSinking = false
var ball
var flag=[]
var ballOptions={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	for(var i = 0;i < 17; i++) {
		wall[i] = new Wall(1300,(height-55)-(i*52), 120, 50)
		flag[i]=0
	}

	//Create the Bodies Here.
	groundObj = new Ground(width/2,height-20,width,20)
   //leftSide = new Ground(1100,height-70,20,120)
	//rightSide = new Ground(1300,height-70,20,120)

	ball=Matter.Bodies.circle(50,height-200,25,ballOptions)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  //rightSide.display()
  //leftSide.display()
  groundObj.display()

  for(var i = 0;i < 17; i++) {
	wall[i].display()
	if (wall[i].body.position.y>height-50) {
		flag[i]=1
	}
}
if (!isSinking) {
	for(var i=0;i<17;i++) {
		score+=flag[i]
		console.log("wall")
	}
	isSinking = true
}


console.log(score)
  push()
  fill("red")
  ellipse(ball.position.x,ball.position.y,25,25)
  pop()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:150,y:-150})
	}
}

