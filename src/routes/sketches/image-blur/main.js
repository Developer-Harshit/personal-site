

import * as THREE from "three"
import vertexShader from "./shader.vert?raw"
import fragmentShader from "./shader.frag?raw"
export default () => {

    let camera, scene, renderer;
    let texture, planeMesh;
    let easeFactor = 0.02;

    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let aberrationIntensity = 0.0;
    let prevPosition = { x: 0.5, y: 0.5 };



    init();
    animate();

    function init() {
        const sketchContainer = document.getElementById("sketch");
        var aspect = window.innerWidth / window.innerHeight
        camera = new THREE.PerspectiveCamera(70, aspect, 0.01, 10);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        scene = new THREE.Scene();


        camera.position.z = 1;





        texture = new THREE.TextureLoader().load('/test.jpg', () => {

            cover(texture, aspect);


            // scene.background = texture;

        });
        texture.matrixAutoUpdate = false;




        let shaderUniforms = {
            u_mouse: { type: "v2", value: new THREE.Vector2() },
            u_prevMouse: { type: "v2", value: new THREE.Vector2() },
            u_aberrationIntensity: { type: "f", value: 0.0 },
            u_texture: { type: "t", value: texture },
            u_res: { type: "v2", value: new THREE.Vector2() }
        };




        planeMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.ShaderMaterial({
                uniforms: shaderUniforms,
                vertexShader,
                fragmentShader
            })
        );


        //   add mesh to scene
        scene.add(planeMesh);




        renderer.setSize(window.innerWidth, window.innerHeight);

        sketchContainer.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);

        planeMesh.material.uniforms.u_res.value.set(renderer.domElement.clientWidth, renderer.domElement.clientHeight)

    }
    function setShader() {
        mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
        mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;
        planeMesh.material.uniforms.u_mouse.value.set(
            mousePosition.x,
            1.0 - mousePosition.y
        );
        planeMesh.material.uniforms.u_prevMouse.value.set(
            prevPosition.x,
            1.0 - prevPosition.y
        );
        aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);
        planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;
    }
    function animate() {

        requestAnimationFrame(animate);
        setShader()
        renderer.render(scene, camera);

    }
   

    function onWindowResize() {
        var aspect = window.innerWidth / window.innerHeight;
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
        cover(texture, aspect);
        renderer.setSize(window.innerWidth, window.innerHeight);


        planeMesh.material.uniforms.u_res.value.set(renderer.domElement.clientWidth, renderer.domElement.clientHeight)
    }
    function cover(texture, aspect) {
        var imageAspect = texture.image.width / texture.image.height;
        if (aspect < imageAspect) {
            texture.matrix.setUvTransform(0, 0, aspect / imageAspect, 1, 0, 0.5, 0.5);
        } else {
            texture.matrix.setUvTransform(0, 0, 1, imageAspect / aspect, 0, 0.5, 0.5);
        }

    }
    function handleMouseMove(event) {
        easeFactor = 0.02;
        let rect = renderer.domElement.getBoundingClientRect();
        prevPosition = { ...targetMousePosition };

        targetMousePosition.x = (event.clientX - rect.left) / rect.width;
        targetMousePosition.y = (event.clientY - rect.top) / rect.height;

        aberrationIntensity = 1;
    }

    function handleMouseEnter(event) {
        easeFactor = 0.02;
        let rect = renderer.domElement.getBoundingClientRect();

        mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
        mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    }

    function handleMouseLeave() {
        easeFactor = 0.05;
        targetMousePosition = { ...prevPosition };
    }
    addEventListener("mousemove", handleMouseMove);
    addEventListener("mouseenter", handleMouseEnter);
    addEventListener("mouseleave", handleMouseLeave);

}