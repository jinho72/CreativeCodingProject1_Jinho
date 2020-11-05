class Smartphone {
    int  screenWidth; //width of a smartphone screen
    int screenHeight; // height of a smartphone screen
    float curvature = HALF_PI; //curvature of a corner
    int camerasize; //size of a camera
    int centerX; // device position x
    int centerY; // device position y
    float cornerEllipse; //size of a corner ellipse
    int homeButton; //size of a home button
    
  Smartphone(int centerX, int centerY, int screenWidth, int screenHeight, int camerasize, float cornerEllipse, int homeButton) {
       this.screenWidth = screenWidth;
       this.screenHeight = screenHeight;
       this.camerasize = camerasize;
       this.cornerEllipse = cornerEllipse;
       this.centerX = centerX;
       this.centerY = centerY;
       this.homeButton = homeButton;     
  } 
    function display() {
      fill(255,255,255);
      rectMode(CENTER);
      rect(centerX, centerY, screenWidth, screenHeight); //this is a smartphone screen
      noFill();
      ellipse(centerX, centerY + screenHeight/2 + (homeButton/2 + 5) , homeButton, homeButton); //this is a homebutton
      ellipse(centerX, centerY - screenHeight/2 - (camerasize*2), camerasize, camerasize); //this is a camera hole 
      line(centerX - screenWidth/2 + cornerEllipse, centerY - screenHeight/2 - cornerEllipse, centerX + screenWidth/2 - cornerEllipse, centerY - screenHeight/2 - cornerEllipse); // this is an upper line
      line(centerX - screenWidth/2 + cornerEllipse, centerY + screenHeight/2 + cornerEllipse, centerX + screenWidth/2 - cornerEllipse, centerY + screenHeight/2 + cornerEllipse); // this is a line below
      noFill();
      strokeWeight(2);
      arc(centerX - screenWidth/2 + cornerEllipse, centerY - screenHeight/2, cornerEllipse*2, cornerEllipse*2, PI, PI + HALF_PI); //left upper corner
      arc(centerX + screenWidth/2 - cornerEllipse, centerY - screenHeight/2, cornerEllipse*2, cornerEllipse*2, PI + HALF_PI, TWO_PI); //right upper corner
      arc(centerX - screenWidth/2 + cornerEllipse, centerY + screenHeight/2, cornerEllipse*2, cornerEllipse*2, HALF_PI, PI);   //left below corner
      arc(centerX + screenWidth/2 - cornerEllipse, centerY + screenHeight/2, cornerEllipse*2, cornerEllipse*2, 0, HALF_PI);    //right below corner        
    } 
    
    function displayHeart() { //this is a method for displaying heart buttons on each devices
      beginShape();
      pushMatrix();
      translate(centerX, centerY);
      fill(255,40,0);
      for (float a = 0; a < TWO_PI; a += 0.01) {   //heart shape 
        float x = 15 * pow(sin(a), 3);
        float y = -1*(13 * cos(a) - 5 * cos (2*a) -2*cos(3*a) - cos(4 *a));
        vertex(x, y);
        }  
    endShape();
    popMatrix();
    }  
}