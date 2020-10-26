# CreativeCodingProject1_Jinho

#This is the first file of creative coding Jinho



void setup() {
  size(700,700);
}




void draw() {
  background(255,255,255);
  translate(width/2, height/2);
 
  stroke(255);
  fill(255,36,0);
  beginShape();


    for (float a = 0; a < TWO_PI; a += 0.01) {
      float r = 1;
      float x = 16 * pow(sin(a), 3);
      float y = -1*(13 * cos(a) - 5 * cos (2*a) -2*cos(3*a) - cos(4 *a));
      vertex(x,y);
    }
endShape(); 

}
