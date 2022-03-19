const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var helicopter
var helicopterImg
var box
var background
var backgroundImg
var ground
function preload() {
  backgroundImg = loadImage('images/cenario.png')
}

function setup() {
  createCanvas(1600, 600)

  engine = Engine.create()
  world = engine.world
  helicopter = new Helicopter(200, 100)
  box = new Box(helicopter.body.position.x, 100, 50, 50)
  ground = new Ground(100, 100, 20, 20)
  


  
  
function draw() {
  background(backgroundImg)
  Engine.update(engine)

  helicopter.display()
  box.display()
}

function keyPressed(){
  if (keyCode == RIGHT_ARROW) {
    helicopter.body.position.x += 10
  }
  if (keyCode == LEFT_ARROW) {
    helicopter.body.position.x -= 10
  }
  if (keyCode == DOWN_ARROW) {
    Matter.Body.setStatic(box.body, false)
  }
}
  
  
  


