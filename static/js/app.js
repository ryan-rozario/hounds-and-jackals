var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//import { places } from "./blocks";

context.beginPath()
context.arc(650, 310, 15, 0, 2 * Math.PI, false)
context.fillStyle = "red"
context.fill()

/*
// Setup the parameters for our grid. These are the values you can change.
var dotMargin = 25
var numRows = 5
var numCols = 10

// Setup (explained earlier)
//var canvas = $("canvas.dots")
//var context = canvas[0].getContext("2d")
var canvasWidth = canvas.width
var canvasHeight = canvas.height // this one is new
//canvas.attr({ height: canvasHeight, width: canvasWidth })

// Because we don't know which direction (x vs. y) is the limiting sizing
// factor, we'll calculate both first.
var dotWidth = (canvasWidth - 2 * dotMargin) / numCols - dotMargin
var dotHeight = (canvasHeight - 2 * dotMargin) / numRows - dotMargin

// Now, we use the limiting dimension to set the diameter.
if (dotWidth > dotHeight) {
  var dotDiameter = dotHeight
  var xMargin =
    (canvasWidth - (2 * dotMargin + numCols * dotDiameter)) / numCols
  var yMargin = dotMargin
} else {
  var dotDiameter = dotWidth
  var xMargin = dotMargin
  var yMargin =
    (canvasHeight - (2 * dotMargin + numRows * dotDiameter)) / numRows
}

// Radius is still half of the diameter, because ... math.
var dotRadius = dotDiameter * 0.5

// Now, we have to iterate in both directions, so we need a loop within a loop.
// This loop is a little more complicated because the margin in the direction
// with more space is not going to be the value you set.
for (var i = 0; i < numRows; i++) {
  // i is the row iterator
  for (var j = 0; j < numCols; j++) {
    // j is the column iterator
    var x = j * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius
    var y = i * (dotDiameter + yMargin) + dotMargin + yMargin / 2 + dotRadius
    drawDot(x, y, 10)
  }
}

function drawDot(x, y, radius) {
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI, false)
  context.fillStyle = "#F03C69"
  context.fill()
}
*/