let c;
function setup() {
  c = createCanvas(window.innerWidth,window.innerHeight);
  const eContainer = select("#sketch-container")
  c.parent(eContainer)

  fill(12,150)
  stroke(255)
  strokeWeight(3)
  
}
function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight)
}

function draw() {
  
  
  rect(0,0,width,height)
  
  line(mouseX,mouseY,pmouseX,pmouseY);
}
