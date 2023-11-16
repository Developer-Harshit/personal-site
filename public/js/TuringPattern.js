let turingA
let turingB
let myshader
let surf
let sampleA
let sampleB


let k = 0.0649
let f = 0.0367
let dA = 1.0
let dB = 0.1

let kSlider;
let fSlider;
let dASlider;
let dBSlider;

function preload() {
	turingA = loadShader('/shader/basic.vert', '/shader/turingA.frag')
	turingB = loadShader('/shader/basic.vert', '/shader/turingB.frag')
	myshader = loadShader('/shader/basic.vert', '/shader/shader.frag')
}
function setup() {
	let c = createCanvas(window.innerWidth, window.innerHeight, WEBGL)
	initCanvas(c)
	kSlider = makeSlider("K Rate", "k-slider", 0.05, 0.08, 0.001)
	fSlider = makeSlider("F Rate", "f-slider", 0.02, 0.06, 0.001)
	dASlider = makeSlider("Diffuse A", "da-slider", 0.6, 1.0, 0.001)
	dBSlider = makeSlider("Diffuse B", "db-slider", 0.01, 0.4, 0.001)

	noStroke()
	noSmooth()

	pixelDensity(1)

	createSamples()
}
function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight)
	
	
}
function createSamples() {
	sampleA = createGraphics(width, height, WEBGL)
	sampleA.pixelDensity(1)
	sampleA.noStroke()
	sampleA.noSmooth()

	sampleB = createGraphics(width, height, WEBGL)
	sampleB.pixelDensity(1)
	sampleB.noStroke()
	sampleB.noSmooth()

	sampleA.loadPixels()
	sampleB.loadPixels()
	for (var x = 0; x < width; x++) {
		for (var y = 0; y < height; y++) {
			var idx = (x + y * width) * 4
			var c = 255
			sampleA.pixels[idx + 0] = c
			sampleA.pixels[idx + 1] = c
			sampleA.pixels[idx + 2] = c
			sampleA.pixels[idx + 3] = 255
			c = 0
			sampleB.pixels[idx + 0] = c
			sampleB.pixels[idx + 1] = c
			sampleB.pixels[idx + 2] = c
			sampleB.pixels[idx + 3] = 255
		}
	}

	sampleB.updatePixels()
	sampleA.updatePixels()

	sampleB.fill(255)
	var s = 70
	sampleB.rect(-s / 2, -s / 2, s, s)
}

function draw() {
	
	renderScreen()

	runShaders()
	

}

function renderScreen() {
	myshader.setUniform('texA', sampleA)
	myshader.setUniform('texA', sampleB)
	shader(myshader)
	rect(0, 0, width, height)
}

function runShaders() {
	sampleA.shader(turingA)
	sampleB.shader(turingB)
	turingA.setUniform('resolution', [float(width), float(height)])
	turingA.setUniform('dA', float(dASlider.value()))
	turingA.setUniform('rate', float(fSlider.value()))
	turingA.setUniform('texA', sampleA)
	turingA.setUniform('texB', sampleB)
	turingB.setUniform('resolution', [float(width), float(height)])
	turingB.setUniform('dB', float(dBSlider.value()))
	turingB.setUniform('rate', float(fSlider.value() + kSlider.value()))
	turingB.setUniform('texA', sampleA)
	turingB.setUniform('texB', sampleB)
	sampleB.rect(0, 0, width, height)
	sampleA.rect(0, 0, width, height)


}
