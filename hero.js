
let heroSprite = new Sprite("jumpman.png")

class Hero {
  constructor() {
    this.x = 100
    this.y = 100
    this.width = 100
    this.height = 100

  }

  //move hero
  moveUp(){
    this.y = this.y - 10

  }
  moveDown(){
    this.y = this.y + 10

  }
  moveRight(){
    this.x = this.x + 10

  }
  moveLeft(){
    this.x = this.x - 10

  }

  draw() {
  

    CTX.fillStyle = 'white'
    CTX.beginPath()
    CTX.arc(this.x, this.y, this.width, 0, 2*Math.PI)
    CTX.fill()

    heroSprite.draw(this.x, this.y, this.width, this.height)

    }  
}
































/*
class Hero {
  constructor() {
  	this.x = gridSize * 3.5
  	this.y = 0

  	this.dx = 0
  	this.dy = 0

  	this.airborne = true
    // todo
  }
  moveLeft() {
     this.dx = 0 - (gridSize / 10)
  }
  moveRight() {
  	this.dx = gridSize / 10
  }
  jump() {
  	if(this.airborne) {
  		return
  	}
  	this.airborne = true
  	this.dy = 0 - (gridSize / 3)
  }

  step() {
  	let xPrev = this.x
  	let yPrev = this.y
  	
  	this.x += this.dx
  	this.y += this.dy

  // apply friction

    this.dx *= 0.7

    // apply gravity

  	this.dy += gridSize / 60

  // dont let hero fall fast

  	if (this.dy >= gridSize) {
  		this.dy = gridSize
  	}
   // check if hit ground
  let collision = undefined
  world.forEach(ground => {
  	let wasAbove = ground.isBelow(xPrev, yPrev)
  	let nowInside = ground.contains(this.x, this.y) 
 	  if (wasAbove && nowInside) {
 		collision = ground
 	  }
 	})
  if (collision !== undefined) {
  	this.y = collision.y
  	this.dy = gridSize / 60
  	this.airborne = false
  } else {
  	this.airborne = true
  }
  	
    // todo
  }

/*
  draw() {
  	let image = heroStandSprite.image
  	if(Math.abs(this.dx) > 0.1){
  		image = heroWalkSprite1.image
  	}
  	if(this.airborne) {
  		image = heroJumpSprite.image
  	}
  	ctx.drawImage(
  		image,
  		this.x - gridSize/2,
  		this.y - gridSize,
  		gridSize,
  		gridSize
         
  		)


  	CTX.fillStyle = 'black'
  	CTX.beginPath()
  	CTX.arc(this.x, this.y, 3, 0, 2*Math.PI, false)
  	CTX.fill()
    // todo
  }
}
*/