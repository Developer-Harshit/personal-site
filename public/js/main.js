import * as THREE from './libraries/three.js'
const scene = new THREE.Scene() // creating a scene

const camera = new THREE.PerspectiveCamera() // creating a camera

const renderer = new THREE.WebGLRenderer() // creating a renderer

renderer.setSize(window.innerWidth, window.innerHeight)

document.getElementById("sketch-container").appendChild(renderer.domElement)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate () {
  // do this first
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}
animate()
