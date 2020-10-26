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
  float x = random;
  float y = random;
  float opacity = 0;
  
  constructor() {
    this.position = new createVector(mouseX, mouseY);
    this.velocity = new createVector(2.5,5);
    this.acceleration = new createVector(0, -0.39);
    this.topspeed = 10;
  } 
  
  stroke(255);
  fill(255,36,0);
  beginShape();
  

  for (float a = 0; a < TWO_PI; a += 0.01) {   //heart shape 
      float r = 1;
      float x = 15 * pow(sin(a), 3);
      float y = -1*(13 * cos(a) - 5 * cos (2*a) -2*cos(3*a) - cos(4 *a));
      vertex(x,y);
    }
    
   update() {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity)
    
    if (this.position.x > width/2) {
      this.position.x = this.position.x * -1;
    }else if(this.position.x <width/2) {
      this.position.x = this.position.x * -1
   
     
      
  }
 display() {
    
}
