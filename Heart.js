class Heart {
  constructor(centerX,  centerY) {
    this.opacity = 0; //to vary the opacity of the heart
    this.centerX = centerX;
    this.centerY = centerY;
    this.position = createVector(random(width), random(height)); //position of the heart will change over time
    this.velocity = createVector(0,random(0,0.5)); //the velocity of the heart will also change 
    this.acceleration = createVector(random(-0.01, -0.03), random(-0.05, -0.1));
    this.topspeed = 10; // the heart reaches top speed eventually
    this.likesCount; // this is a variable that keeps track of likes
    this.d; //this is a distance from mouse to the center of the heartbutton
    this.varheartImg;
    this.totalLikes;
  }
  
    
   likesExplosion() {    //this method is an actual one that makes the hearts fly out
      this.heartImg = loadImage("heart_final.png");
      image(this.heartImg, this.position.x, this.position.y, 30, 30);
      this.velocity.limit(this.topspeed);     //setting limit to velocity
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);    //adding velocity to position
    }
    
   display() {     //this method is for just diplaying heart buttons on each devices
     push();
     translate(this.centerX, this.centerY);
     stroke(0);
     fill(255,36,0);
     beginShape();
   
  for (var a = 0; a < TWO_PI; a += 0.01) {   //heart shape 
      var x = 15 * pow(sin(a), 3);
      var y = -1*(13 * cos(a) - 5 * cos (2*a) -2*cos(3*a) - cos(4 *a));
      vertex(x, y);
    }
    endShape();

     pop();
}   
   countLikes(){   //this is a method to keep track of the likes in each button
       this.d = dist(mouseX, mouseY, this.centerX, this.centerY);
       if(this.d < 20) {
       this.likesCount = this.likesCount + 1;  
       this.totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
       print(this.totalLikes);   
       } 
    }
    }    