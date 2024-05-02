let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('./Briežrags.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    image(img, 100, 100, width, height);
    if (mouseX < width/2 && mouseY < height/2)
    {circle(mouseX, mouseY, 50);
    } 
    if (mouseX > width/2 && mouseY > height/2)
    {square(mouseX, mouseY, 50);
    } 
    
}