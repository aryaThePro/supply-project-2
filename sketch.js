var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground ;
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	count = 0;

	engine = Engine.create();
	world = engine.world;

	rect1 = createSprite(280,610,20,100);
	rect1.shapeColor = "red";
	World.add(world , rect1);
	rect1.isStatic = true;

	rect2 = createSprite(390,650,200,20);
	rect2.shapeColor = "red";
	World.add(world , rect2);
	rect2.isStatic = true;

	rect3 = createSprite(500,610,20,100);
	rect3.shapeColor = "red";
	World.add(world , rect3);
	rect3.isStatic = true;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  console.log(packageSprite.y);


  if (packageSprite.y > 600 ){
	Matter.Body.setStatic(packageBody,true);
  }
// packageSprite.y = 596
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }



}



