class Heart {        //this is a class for the heart shape
 
  int opacity = 0; //to vary the opacity of the heart
  PVector position;
  PVector velocity;
  PVector acceleration;
  float topspeed;
  float centerX; // this is the position x for heart
  float centerY; // this is the position y for heart
  int likesCount; // this is a variable that keeps track of likes
  float d; //this is a distance from mouse to the center of the heartbutton
  PImage heartImg;
  int totalLikes;
  
  Heart(float centerX, float centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.position = new PVector(random(width), random(height)); //position of the heart will change over time
    this.velocity = new PVector(0,random(0,0.5)); //the velocity of the heart will also change 
    this.acceleration = new PVector(random(-0.01, -0.03), random(-0.05, -0.1));
    topspeed = 10; // the heart reaches top speed eventually
  } 
    
    function likesExplosion() {    //this method is an actual one that makes the hearts fly out
      heartImg = loadImage("heart_final.png");
      image(heartImg, position.x, position.y, 30, 30);
      velocity.limit(topspeed);     //setting limit to velocity
      velocity.add(acceleration);
      position.add(velocity);    //adding velocity to position
    }
    
   function display() {     //this method is for just diplaying heart buttons on each devices
     pushMatrix();
     translate(centerX, centerY);
     stroke(0);
     fill(255,36,0);
     beginShape();
   
  for (float a = 0; a < TWO_PI; a += 0.01) {   //heart shape 
      float x = 15 * pow(sin(a), 3);
      float y = -1*(13 * cos(a) - 5 * cos (2*a) -2*cos(3*a) - cos(4 *a));
      vertex(x, y);
    }
    endShape();

popMatrix();
}   
    function countLikes() {   //this is a method to keep track of the likes in each button
       d = dist(mouseX, mouseY, centerX, centerY);
       if(d < 20) {
       likesCount = likesCount + 1;  
       totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
       print(totalLikes);   
       } 
    }    
}