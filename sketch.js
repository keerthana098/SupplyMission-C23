var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//Matter.Body.setStatic(false);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = createSprite(375,650,200,20, {isStatic:true});
	box1.shapeColor = ("red");

	box2 = createSprite(280,610,20,100, {isStatic:true});
	box2.shapeColor = ("red");

	box3 = createSprite(475,610,20,100, {isStatic:true});
	box3.shapeColor = ("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  packageSprite.depth = helicopterSprite.depth;
  helicopterSprite.depth = helicopterSprite.depth + 1;

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
    
  }
}



