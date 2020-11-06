class Refresh  {
  constructor(centerX, centerY, x, y, refreshEllipse) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.x = x;
    this.y = y;
    this.refreshEllipse = refreshEllipse;
    this.d; //distance between mouse and the button
    this.totalLikes =  heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
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
    if(this.d<100) {
      this.totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
      for (var i=0; i< 20; i++) { //initializing arrays of hearts that are gonna float
      heartsFloating[i].likesExplosion();
  }
    }
}
}
  