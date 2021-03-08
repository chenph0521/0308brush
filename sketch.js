function setup() {
  createCanvas(400, 400);

}



function draw() {
  if(mouseIsPressed)
  {circle(mouseX, mouseY, 20);
   fill(5, 100, 50)
   noStroke()
}else{
  square(mouseX, mouseY, 20);
  fill(200, 200, 150)
  noStroke()}
  //background拿掉可以製作形狀移動軌跡

}