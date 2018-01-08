var jf;

function setup(){
  createCanvas(400,400);
  fill(240,30);
}


function draw(){

  background(0);
  jf = random(10,50);
  
  beginShape(TRIANGLE_FAN);
  for (var i = 0; i < jf; i++)
    vertex( random(0,width), random(0, height), random(0,100));
  endShape(); 

}