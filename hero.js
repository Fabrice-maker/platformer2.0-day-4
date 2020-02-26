
let heroStand = new Sprite("images/heros/yellow/alienYellow_stand.png")
let heroJump = new Sprite("images/heros/yellow/alienYellow_jump.png")

class Hero {
  constructor() {
    this.x = GRIDSIZE
    this.y = GRIDSIZE
    this.width = GRIDSIZE
    this.height = GRIDSIZE * 2

    this.dx = 0
    this.dy = 0
    this.airborne = true
  }

  //move hero

  jump() {  
    if(this.airborne) {
      return
    }
    this.dy =  -GRIDSIZE/2
    this.airborne = true
  }
  moveRight(){
    this.x = this.x + GRIDSIZE / 10

  }
  moveLeft(){
    this.x = this.x - GRIDSIZE / 10

  }

  // gragity controls

  step(){
    this.dy = this.dy + GRIDSIZE/60
    if(this.dy > GRIDSIZE) {
      this.dy = GRIDSIZE - 1
    }
    this.y = this.y + this.dy
    if(this.y > CANVAS.height) {
      this.y = CANVAS.height
      this.airborne = false
    }
  }

  // load hero images
  draw() {
    CTX.fillStyle = 'white'
    CTX.beginPath()
    CTX.arc(this.x, this.y, this.width, 0, 2*Math.PI)
    CTX.fill()

    let imageToDraw = heroStand
    if(this.airborne) {
      imageToDraw = heroJump
    }
    imageToDraw.draw(this.x - this.width / 2, this.y - this.height, this.width, this.height)

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