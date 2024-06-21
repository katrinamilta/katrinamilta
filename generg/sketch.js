
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke (255,100);
  noFill (0);
  let button = createButton('TVERT');
  button.position(10, 10); // Position the button
  button.mousePressed(takeScreenshot); 
  

frameRate=(10)}

    function draw() {
    
   stroke(0, 90); //stars no 0/0 stura
        noFill ();
        strokeWeight(2);
             bezier(0, 0, random(100), random(100), random(100), random(100), random(2000), random(2000));

    stroke(random(255), random(10)); //stars no 100/0 stura
        noFill ();
        strokeWeight(1);
             bezier(windowWidth -1, 0, random(600), random(600), random(200), random(200), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 0/100 stura
       noFill ();
       bezier(0, windowHeight -1, random(600), random(600), random(200), random(200), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 100/100 
       noFill ();
       bezier(windowWidth -1, windowHeight -1, random(600), random(600), random(200), random(200), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 0/50
       noFill ();
       bezier(0, windowHeight/2, random(600), random(600), random(200), random(200), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 50/0
       noFill ();
       bezier(windowWidth/2, 0, random(600), random(600), random(200), random(200), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 100/50
       noFill ();
       bezier(windowWidth -1, windowHeight/2, random(600), random(600), random(200), random(200), random(2000), random(2000));

       stroke (random(255),random(10)); //stars no 50/100
       noFill ();
       bezier(windowWidth/2, windowHeight -1, random(600), random(600), random(100), random(100), random(2000), random(2000));

       
       stroke (random(255), random(10)); //stars no 0/25
       noFill ();
       //bezier(0, windowHeight/4, random(100), random(100), random(100), random(100), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 25/0
       noFill ();
       //bezier(windowWidth/4, 0, random(100), random(100), random(100), random(100), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 100/25
       noFill ();
       bezier(windowWidth -1, windowHeight/4, random(200), random(200), random(100), random(100), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 25/100
       noFill ();
       bezier(windowWidth/4, windowHeight -1, random(200), random(200), random(100), random(100), random(2000), random(2000));

       
       stroke(random(255), random(10)); //stars no 0/75
       noFill ();
       bezier(0, (windowHeight/4)*3), random(200), random(200), random(100), random(100), random(2000), random(2000);

       stroke (random(255), random(10)); //stars no 75/0
       noFill ();
       bezier((windowWidth/4)*3, 0, random(200), random(200), random(100), random(100), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 100/75
       noFill ();
       bezier(windowWidth -1, (windowHeight/4)*3, random(200), random(200), random(100), random(100), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 75/100
       noFill ();
       bezier((windowWidth/4)*3, windowHeight -1, random(200), random(200), random(100), random(100), random(2000), random(2000));


       stroke (random(255), random(10)); 
       noFill ();
       bezier(windowWidth -200, (windowHeight/8)*3, random(200), random(200), random(100), random(100), random(2000), random(2000));


       stroke (random(255), random(10)); 
       noFill ();
       bezier((windowWidth/4)*3, (windowHeight/8)*6, random(200), random(200), random(100), random(100), random(2000), random(2000));

       stroke (random(255), random(10)); //stars no 50/75
       noFill ();
       bezier(windowWidth/2, (windowHeight/4)*3, random(600), random(600), random(200), random(200), random(2000), random(2000));

       troke (random(255), random(10)); 
       bezier((windowWidth/8)*5, (windowHeight/10)*4, random(600), random(600), random(200), random(200), random(2000), random(2000));

  


    
      }     
      function takeScreenshot() {
        saveCanvas('screenshot', 'png');
      }

    