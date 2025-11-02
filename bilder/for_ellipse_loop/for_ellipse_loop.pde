int x = 0;
int y = 0;
float z = 0;

void setup() {
  size(540, 675);
  background(0, 0, 255);
  pixelDensity(1);
}

void draw() {
  ellipseMode(CORNER);
  while (x < width) {
    ellipse(x, 0, x, x);
    x = x + 30;
  }
  ellipseMode(CENTER);
  for (int y = -50; y < width; y = y + 12) {
    stroke(140, 50, y);
    fill(50, 50, y);
    ellipse(y, 0 - z, y, y);
    z = z - 0.5;
  }
  ellipseMode(CENTER);
  noStroke();
  fill(0,0,255);
  ellipse (width/2, height/2, 200, 200);
  ellipse (width/4, height/2 * 1.5, 50, 50);
  ellipse (width/2 *1.5, height/4, 50, 50);
  ellipse (width/10, height/2 * 1.8, 5, 5);
  ellipse (width, 0, 500, 500);
  fill(255, 255, 255);
  ellipse (width/2, height/2, 20, 20);
  
  //stroke(0,0, 255);
  //strokeWeight(1);
  //noFill();
  //ellipse (width/2, height/2, 470, 490);
  //for (int y = 0; y < width; y = y + 12) {
  //  fill(50, 50, y);
  //  ellipse(z + random(0, height), y + random(0, width), 10, 10);
  //}
}
