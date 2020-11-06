var totalLike;
var heartsOnDevices  //this is an array of hearts on each devices
var heartsFloating  //there are hearts same as the amount of totalLikes
var device;
var device1;
var device2;
var device3;
var device4;
var refreshButton;

function setup() {
  createCanvas(600,600);
    device = new Smartphone(width/2, height/2, 250, 400, 10, 40, 30);  //center smartphone
    device1 = new Smartphone(100, 100, 60, 100, 2, 10, 5); //these are four devices that are gonna send likes to the center device
    device2 = new Smartphone(500, 100, 60, 100, 2, 10, 5);
    device3 = new Smartphone(100, 500, 60, 100, 2, 10, 5);
    device4 = new Smartphone(500, 500, 60, 100, 2, 10, 5); 
    heartsOnDevices = new Array(4); //this is an array of hearts on each devices
    heartsFloating = new Array(20); //there are hearts same as the amount of totalLikes
    heartsOnDevices[0] = new Heart(100,100); //these are hearts on each 4 devices in the corner
    heartsOnDevices[1] = new Heart(500,100);
    heartsOnDevices[2]= new Heart(100,500);
    heartsOnDevices[3] = new Heart(500,500); 
    refreshButton = new Refresh(width/2, height/2, 100, 100, 70); //refreshButton in the middle
    
    for (var i=0; i< 20; i++) { //initializing arrays of hearts that are gonna float
      heartsFloating[i] = new Heart(random(width), random(height));
    }    
}

function draw() { 
  var totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount; //the variable that sums all the likes 
  device.display(); //displaying 4 devices
  device1.display();
  device2.display();
  device3.display();
  device4.display();
  heartsOnDevices[0].display(); //displaying 4 hearts in each corner
  heartsOnDevices[1].display();
  heartsOnDevices[2].display();
  heartsOnDevices[3].display();
  refreshButton.display();

 if(frameCount % 100 == 0) { //to change the background color yellow to black(meaning day and night)
  background(255,255,0);
} else if (frameCount % 260 == 0) {
   background(0,0,0);
}
}

function mousePressed() {
  for(var i=0; i < 4; i++) {    //the one that keep track of likes in each hearts
    heartsOnDevices[i].countLikes();   
  }   var totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount; //the variable that sums all the likes 
    if (totalLikes == 20) {
         refreshButton.refresh();   //this is the one that starts all the animation
       }
} 

class Refresh  {
  constructor(centerX, centerY, x, y, refreshEllipse) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.x = x;
    this.y = y;
    this.refreshEllipse = refreshEllipse;
    this.d = dist(mouseX, mouseY, this.centerX, this.centerY); //distance between mouse and the button
  }
    display() { 
    rectMode(CENTER);
    fill(12,100,35);    //filling the button with dark gray
    rect(this.centerX, this.centerY, this.x, this.y);   //refresh buttom box
    ellipse(this.centerX, this.centerY, this.refreshEllipse, this.refreshEllipse);  //refresh icon
    line(this.centerX-10, this.centerY - (this.refreshEllipse/2) - 10, this.centerX, this.centerY - (this.refreshEllipse/2)); //upper arrow
    line(this.centerX-10, this.centerY - (this.refreshEllipse/2) +10, this.centerX, this.centerY - (this.refreshEllipse/2)); // below arrow 
  }
  
    refresh() {
    this.d = dist(mouseX, mouseY, this.centerX, this.centerY);
    if(this.d <100) {
      for (var i=0; i< 20; i++) { //initializing arrays of hearts that are gonna float
      heartsFloating[i].likesExplosion();
  }
    }
}
}
  
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


class Heart {
  constructor(centerX,  centerY) {
    this.opacity = 0; //to vary the opacity of the heart
    this.centerX = centerX; 
    this.centerY = centerY;
    this.position = createVector(random(width), random(height)); //position of the heart will change over time
    this.velocity = createVector(0,random(0,0.5)); //the velocity of the heart will also change 
    this.acceleration = createVector(random(-0.01, -0.03), random(-0.7, -1.5));
    this.topspeed = 3; // the heart reaches top speed eventually
    this.likesCount = 0; // this is a variable that keeps track of likes
    this.d = dist(mouseX, mouseY, this.centerX, this.centerY); // distance from center to the mouse
    //this.heartImg;
  }
     
   likesExplosion() {    //this method is an actual one that makes the hearts fly out
      fill(random(0,255),random(0,255), random(0,255));
      this.velocity.limit(this.topspeed);     //setting limit to velocity
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);    //adding velocity to position
      ellipse(this.position.x, this.position.y, 50, 50);
     
     //this.heartImg = loadImage("heart_final.png"); //these are my original codes but I couldn't get the image file into open processing so I substituted with different shape.
      //image(this.heartImg, this.position.x, this.position.y, 30, 30);
      //this.velocity.limit(this.topspeed);     //setting limit to velocity
      //this.velocity.add(this.acceleration);
      //this.position.add(this.velocity);    //adding velocity to position
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
       var totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
       print(totalLikes);   
       } 
    }
}    