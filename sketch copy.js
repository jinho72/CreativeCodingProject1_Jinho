class Refresh { 
  float x; //box width
  float y;  // box height
  float refreshEllipse; //refresh button
  float centerX; //box position x
  float centerY; //box position y
  float d; //distance between mouse and the button
  int totalLikes =  heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
  
  Refresh(float centerX, float centerY, float x, float y, float refreshEllipse) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.x = x;
    this.y = y;
    this.refreshEllipse = refreshEllipse;
  }  
    void display() {
    rectMode(CENTER);
    fill(12,100,35);    //filling the button with dark gray
    rect(centerX, centerY, x, y);   //refresh buttom box
    ellipse(centerX, centerY, refreshEllipse, refreshEllipse);  //refresh icon
    line(centerX-10, centerY - (refreshEllipse/2) - 10, centerX, centerY - (refreshEllipse/2)); //upper arrow
    line(centerX-10, centerY - (refreshEllipse/2) +10, centerX, centerY - (refreshEllipse/2)); // below arrow
  }
  
  void refresh() {
   
    d = dist(mouseX, mouseY, centerX, centerY);
    if(d<100) {
      totalLikes = heartsOnDevices[0].likesCount + heartsOnDevices[1].likesCount + heartsOnDevices[2].likesCount + heartsOnDevices[3].likesCount;
      for (int i=0; i< 20; i++) { //initializing arrays of hearts that are gonna float
      heartsFloating[i].likesExplosion();
  }
    }
}

}
  