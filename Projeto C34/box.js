class Box{
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height
    this.boxImg = loadImage('images/box.png')
    World.add(world, this.body)
  }
  display() {
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.boxImg, 0, 0, this.width, this.height)
    pop()
  }
}