class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height
    World.add(world, this.body)
  }
  // display() {
  //   push()
  //   translate(this.body.position.x, this.body.position.y)
  //   rotate(this.body.angle)
  //   imageMode(CENTER)
  //   image(this.helicopterImg, 0, 0, 200, 150)
  //   pop()
  // }
}
