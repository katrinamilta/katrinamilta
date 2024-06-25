let startX = 60; // Initial starting x coordinate
let startY = 0;  // Initial starting y coordinate
let points = [[startX, startY]];
let moveCount = 0;
let currentDirection = 1;
let numMovesPerLine = 15; // Change the number of steps per line to 15
let lineSpacing = 20;
let canvasWidth = 800; // Define canvas width
let canvasHeight = 600; // Define canvas height
let dice1, dice2;
let bgImage; // Variable to store the background image

function preload() {
  // Load the background image - replace 'background.jpg' with the actual path to your image
  bgImage = loadImage('background.jpg');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(bgImage); // Set the background image
  stroke(0);
  fill(0);

  // Select dice elements
  dice1 = select('#dice1');
  dice2 = select('#dice2');
}

function draw() {
  // No continuous drawing needed
  noLoop();
}

function rollDice() {
  return int(random(1, 7));
}

function mousePressed() {
  // Continue drawing until the last starting point is reached
  if (startX < canvasWidth - 6) {
    // Roll the dice
    let stepsDown = rollDice();
    let stepsHorizontal = rollDice();

    // Update dice display
    dice1.html(stepsDown);
    dice2.html(stepsHorizontal);

    // Calculate new position
    if (moveCount % 2 === 0) { // Odd moves (to the right)
      startX += stepsHorizontal * 10 * currentDirection;
    } else { // Even moves (to the left)
      startX -= stepsHorizontal * 10 * currentDirection;
    }
    startY += stepsDown * 10;

    // Add new point
    let newPoint = [startX, startY];
    points.push(newPoint);

    // Draw the line with stylized brush stroke
    let strokeWeightRandom = random(3, 5); // Randomize stroke weight within range
    let brownHue = color(random(20, 60), 100, 100); // Randomize brown hue
    strokeWeight(strokeWeightRandom + 2); // Set the stroke weight with additional 2 points
    stroke(brownHue); // Set the stroke color with brown hue
    if (points.length > 1) {
      let prevPoint = points[points.length - 2];
      line(prevPoint[0], prevPoint[1], newPoint[0], newPoint[1]);
    }

    // Increment move count
    moveCount++;

    // Reset for new line if needed
    if (moveCount >= numMovesPerLine) {
      moveCount = 0;
      startX = points[0][0] + lineSpacing;
      startY = 0;
      points = [[startX, startY]];
      currentDirection *= -1; // Alternate direction
    }
  } else {
    // Restart the drawing
    startX = 60; // Reset starting x coordinate
    startY = 0;  // Reset starting y coordinate
    points = [[startX, startY]]; // Reset points array
    moveCount = 0; // Reset move count
    background(bgImage); // Reset the background image
    redraw(); // Redraw the canvas
  }
}
