class Smartphone {
  constructor(centerX, centerY, screenWidth, screenHeight, camerasize, cornerEllipse, homeButton) {
       this.screenWidth = screenWidth; //width of a smartphone screen
       this.screenHeight = screenHeight; // height of a smartphone screen
       this.camerasize = camerasize; //size of a camera
       this.cornerEllipse = cornerEllipse;   //size of a corner ellipse
       this.centerX = centerX; // device position x
       this.centerY = centerY; // device position y
       this.homeButton = homeButton;//size of a home button  
       this.curvature = HALF_PI; //curvature of a corner
     }
  
    display() {
      fill(255,255,255);
      rectMode(CENTER);
      rect(this.centerX, this.centerY, this.screenWidth, this.screenHeight); //this is a smartphone screen
      noFill();
      ellipse(this.centerX, this.centerY + this.screenHeight/2 + (this.homeButton/2 + 5) , this.homeButton, this.homeButton); //this is a homebutton
      ellipse(this.centerX, this.centerY - this.screenHeight/2 - (this.camerasize*2), this.camerasize, this.camerasize); //this is a camera hole 
      line(this.centerX - this.screenWidth/2 + this.cornerEllipse, this.centerY - this.screenHeight/2 - this.cornerEllipse, this.centerX + this.screenWidth/2 - this.cornerEllipse, this.centerY - this.screenHeight/2 - this.cornerEllipse); // this is an upper line
      line(this.centerX - this.screenWidth/2 + this.cornerEllipse, this.centerY + this.screenHeight/2 + this.cornerEllipse, this.centerX + this.screenWidth/2 - this.cornerEllipse, this.centerY + this.screenHeight/2 + this.cornerEllipse); // this is a line below
      noFill();
      strokeWeight(2);
      arc(this.centerX - this.screenWidth/2 + this.cornerEllipse, this.centerY - this.screenHeight/2, this.cornerEllipse*2, this.cornerEllipse*2, PI, PI + HALF_PI); //left upper corner
      arc(this.centerX + this.screenWidth/2 - this.cornerEllipse, this.centerY - this.screenHeight/2, this.cornerEllipse*2, this.cornerEllipse*2, PI + HALF_PI, TWO_PI); //right upper corner
      arc(this.centerX - this.screenWidth/2 + this.cornerEllipse, this.centerY + this.screenHeight/2, this.cornerEllipse*2, this.cornerEllipse*2, HALF_PI, PI);   //left below corner
      arc(this.centerX + this.screenWidth/2 - this.cornerEllipse, this.centerY + this.screenHeight/2, this.cornerEllipse*2, this.cornerEllipse*2, 0, HALF_PI);    //right below corner        
    } 
    
   displayHeart() { //this is a method for displaying heart buttons on each devices
      beginShape();
      push();
      translate(this.centerX, this.centerY);
      fill(255,40,0);
      for (var a = 0; a < TWO_PI; a += 0.01) {   //heart shape 
        var x = 15 * pow(sin(a), 3);
        var y = -1*(13 * cos(a) - 5 * cos (2*a) -2*cos(3*a) - cos(4 *a));
        vertex(x, y);
        }  
      endShape();
      pop();
    }  
  }


