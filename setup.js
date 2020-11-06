var totalLikes;
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
  totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
  device.display(); //displaying 4 devices
  device1.display();
  device2.display();
  device3.display();
  device4.display();
  heartsOnDevices[0].display(); //displaying
  heartsOnDevices[1].display();
  heartsOnDevices[2].display();
  heartsOnDevices[3].display();
  refreshButton.display();

 if(frameCount % 100 == 0) {
  background(255,255,0);
} else if (frameCount % 260 == 0) {
   background(0,0,0);
}
}

function mousePressed() {
  for(var i=0; i < 4; i++) {
    heartsOnDevices[i].countLikes();   
  }   
    if(totalLikes == 20) {
          totalLikes = 20;
         refreshButton.refresh();
       }
} 