# CreativeCodingProject1_Jinho

#This is the first file of creative coding Jinho


class Heart {        //this is a class for the heart shape
 
  int opacity = 0; //to vary the opacity of the heart
  PVector position;
  PVector velocity;
  PVector acceleration;
  float topspeed;
  float centerX; // this is the position x for heart
  float centerY; // this is the position y for heart
  int likesCount; // this is a variable that keeps tracks of likes
  float d; //this is a distance from mouse to the center of the heartbutton
  PImage heartImg;
  
  Heart(float centerX, float centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.position = new PVector(random(width), random(height)); //position of the heart will change over time
    this.velocity = new PVector(0,0.7); //the velocity of the heart will also change 
    this.acceleration = new PVector(-0.01, -0.05);
    topspeed = 10; // the heart reaches top speed eventually
  } 
    
    void likesExplosion() {    //this method is an actual one that makes the hearts fly out
    
      heartImg = loadImage("heart_final.png");
      image(heartImg, position.x, position.y, 30, 30);
      velocity.limit(topspeed);     //setting limit to velocity
      velocity.add(acceleration);
      position.add(velocity);    //adding velocity to position
      
    }
   
   
   void display() {     //this method is for just diplaying heart buttons on each devices
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
    void countLikes() {   //this is a method to keep track of the likes in each button
       d = dist(mouseX, mouseY, centerX, centerY);
       if(d < 20) {
       likesCount = likesCount + 1;  
       println(likesCount);
       }
     } 
     
}

