# CreativeCodingProject1_Jinho

#This is the first file of creative coding Jinho


function setup() {
  size(700,700);
  

  h1 = new Heart();
  h2 = new Heart();

}

function draw() {
 h1.update();
 h2.update();
}




class Heart {
 
  int opacity = 0; //to vary the opacity of the heart
  PVector position;
  PVector velocity;
  PVector acceleration;
  float topspeed;
  
  
  constructor() {
    position = new PVector(mouseX, mouseY); //position of the heart will change over time
    velocity = new PVector(2.5, -5); //the velocity of the heart will also change 
    acceleration = new PVector(0, -0.39); //the heart will accelerate to the sky
    topspeed = 10; // the heart reaches top speed eventually
  } 
    
    void mousePressed() {
       
    velocity.add(acceleration); //adding acceleration to velocity
    velocity.limit(topspeed);     //setting limit to velocity
    position.add(velocity);    //adding velocity to position
    
    if (position.x > width/2) {
      position.x = position.x * -1;
    } else if(position.x <width/2) {
      position.x = position.x * -1;
    }
    }
   
   
   void display() {
     background(255,255,255);
     pushMatrix();
     translate(mouseX,mouseY);
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


}

