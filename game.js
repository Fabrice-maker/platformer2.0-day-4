
class Game{

  constructor() {
   //state
   this.hero = new Hero()
   this.platforms = []
   this.keyPressed = {}

   ERASE()
   this.hero.draw()

   window.addEventListener("keydown", event => {
    this.keyPressed[event.code] = true
    })
   window.addEventListener("keyup", event => {
    this.keyPressed[event.code] = false
    })

   this.platforms.push(new Platform(GRIDSIZE, GRIDSIZE*8, GRIDSIZE*3, GRIDSIZE))

   this.loop()
  }

 loop() {
   if (this.keyPressed["ArrowRight"]) {
  	this.hero.moveRight()
   }
   if (this.keyPressed["ArrowLeft"]) {
    this.hero.moveLeft()
   }
   if (this.keyPressed["ArrowUp"]) {
    this.hero.jump()
   }

 this.hero.step(this.platforms)

  // erase hero and redraw
 ERASE()
  this.hero.draw()
  this.platforms.forEach(p => p.draw())


 setTimeout(() => this.loop(), 1000 / 60)
 }
} 

new Game()
