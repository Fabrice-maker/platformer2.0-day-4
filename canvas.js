
let CANVAS = document.getElementById("display")
CANVAS.width = document.body.clientWidth
CANVAS.height = document.body.clientHeight

let CTX = CANVAS.getContext("2d")

function ERASE (){
CTX.fillStyle = "lightgreen"
CTX.fillRect(
  0,
  0,
  CANVAS.width,
  CANVAS.height

 )
 }
 let maxY = 12
 let GRIDSIZE = CANVAS.height / 12





























/*
let maxY = 12
let gridSize = Math.ceil(CANVAS.height / maxY)
*/

/*ctx.fillStyle = "cyan"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height / 2)
ctx.fillStyle = "white"
ctx.fillRect(0, 0, canvas.width / 2, canvas.height)
ctx.fillStyle = "red"
ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2)
*/

/*


console.log(CANVAS)


*/
