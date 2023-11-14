let c;
let sizeSlider
let hueSlider
function setup() {
  
  c = createCanvas(window.innerWidth,window.innerHeight );
  initCanvas(c)

  sizeSlider = makeSlider("Size","size-slider",1,10,0.1)
  hueSlider = makeSlider("Hue","hue-slider",0,255,0.1)
  
  colorMode(HSB,255)
  fill(12,150)
  stroke(255)
}
function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight)
}

function draw() {
  strokeWeight(1)
  rect(0,0,width,height)
  strokeWeight(sizeSlider.value())
  stroke(hueSlider.value(),210,190)
  line(mouseX,mouseY,pmouseX,pmouseY);
}
