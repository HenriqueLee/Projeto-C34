class Helicopter {
  constructor(x, y) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, 50, 25, options)
    this.helicopterImg = loadImage('images/1f681.png')
    World.add(world, this.body)
  }
  display() {
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.helicopterImg, 0, 0, 200, 150)
    pop()
  }
}
