const CANVAS_BOARD = "./images/board.svg"
const BG_COLOUR = 'white';

//import {player1_places} from "./blocks"

const socket = io('http://localhost:3000');

socket.on('init', handleInit);
socket.on('gameState', handleGameState);
//socket.on('gameOver', handleGameOver);
//socket.on('gameCode', handleGameCode);
//socket.on('unknownCode', handleUnknownCode);
//socket.on('tooManyPlayers', handleTooManyPlayers);


let player1_places =  {
    0: {
        x: 260,
        y: 385,
        next: 1,
    },
    1: {
        x: 310,
        y: 385,
        next: 2,
    },
    2: {
        x: 360,
        y: 385,
        next: 3,
    },
    3: {
        x: 410,
        y: 385,
        next: 4,
    },
    4: {
        x: 460,
        y: 385,
        next: 5,
    },
    5: {
        x: 500,
        y: 385,
        next: 6,
    },
    6: {
        x: 550,
        y: 385,
        next: 7,
    },
    7: {
        x: 600,
        y: 385,
        next: 8,
    },
    8: {
        x: 650,
        y: 385,
        next: 9,
    },
    9: {
        x: 700,
        y: 385,
        next: 10,
    },
    10: {
        x: 710,
        y: 305,
        next: 11,
    },
    11: {
        x: 680,
        y: 305,
        next: 12,
    },
    12: {
        x: 650,
        y: 305,
        next: 13,
    },
    13: {
        x: 615,
        y: 310,
        next: 14,
    },
    14: {
        x: 580,
        y: 310,
        next: 15,
    },
    15: {
        x: 550,
        y: 310,
        next: 16,
    },
    16: {
        x: 520,
        y: 310,
        next: 17,
    },
    17: {
        x: 490,
        y: 310,
        next: 18,
    },
    18: {
        x: 455,
        y: 310,
        next: 19,
    },
    19: {
        x: 420,
        y: 310,
        next: 20,
    },
    20: {
        x: 390,
        y: 310,
        next: 21,
    },
    21: {
        x: 360,
        y: 310,
        next: 22,
    },
    22: {
        x: 325,
        y: 310,
        next: 23,
    },
    23: {
        x: 295,
        y: 310,
        next: 24,
    },
    24: {
        x: 260,
        y: 310,
        next: 25,
    },
    25: {
        x: 225,
        y: 315,
        next: 26,
    },
    26: {
        x: 290,
        y: 330,
        next: 27,
    },
    27: {
        x: 160,
        y: 360,
        next: 28,
    },
    28: {
        x: 680,
        y: 310,
        next: 29,
    },
    29: {
        x: 150,
        y: 390,
        next: -1,
    },
}


let canvas, ctx;

function init() {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    document.addEventListener('keydown', keydown);
    gameActive = true;
}


function keydown(e) {
    socket.emit('keydown', e.keyCode);
}

init();

function paintGame(state) {
    const pieces = state.player1.pieces;
    //console.log(pieces);
    for (var key in pieces) {
        var pos = pieces[key];
        if (pos == -1) {
            continue;
        }
        var hole = player1_places[pos];
        //console.log(hole);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(hole.x, hole.y, 15, 0, 2 * Math.PI, false);
        ctx.fillStyle = state.player1.colour;
        ctx.fill();
    }
}

function handleInit(msg) {
    console.log(msg);
}

function handleGameState(gameState) {
    if (!gameActive) {
        return;
    }
    gameState = JSON.parse(gameState);
    requestAnimationFrame(() => paintGame(gameState));
}






















/*

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//import { places } from "./blocks";

context.beginPath()
context.arc(60, 310, 15, 0, 2 * Math.PI, false)
context.fillStyle = "red"
context.fill()

*/

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