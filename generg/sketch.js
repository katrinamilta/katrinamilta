let angle = 0;
let radius = 1;
let wingdingsSymbols = ['', '', '', '', '', '', '', '', '', ''];
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Wingdings');
  textSize(32);
  fill(0);
  
  // Create a button to save the screenshot
  button = createButton('Save Screenshot');
  button.position(10, 10);
  button.mousePressed(saveScreenshot);
}

function draw() {
  let x = width / 2 + cos(angle) * radius;
  let y = height / 2 + sin(angle) * radius;
  let symbol = random(wingdingsSymbols);
  
  text(symbol, x, y);
  
  angle += 0.1;
  radius += 0.5;
  
  if (radius > width) {
    clear();
    angle = 0;
    radius = 1;
  }
}

function saveScreenshot() {
  saveCanvas('generative_art', 'png');
}