import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';



const ThreeBackground2 = () => {



    const mountRef = useRef(null);
  
    useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.21;
    bloomPass.strength = 1.12; // Adjust the bloom strength
    bloomPass.radius = 0.55; // Adjust the bloom radius
    composer.addPass(bloomPass);

    // Adding ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    //scene.add(directionalLight);

    // Animation Mixer
    let mixer;

    const loader = new GLTFLoader();
    loader.load('/blazefury/scene.gltf', (gltf) => {
      scene.add(gltf.scene);
      gltf.scene.scale.set(0.3, 0.3, 0.3);
      gltf.scene.position.set(0, -20, -100);
      gltf.scene.rotation.y = Math.PI / 7; // Rotates the model

      if (gltf.animations && gltf.animations.length) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
      }
    });

    camera.position.z = 5;
    camera.position.y = 0;

    const clock = new THREE.Clock();

    const animate = function () {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      composer.render(delta); // Use composer instead of renderer to include the bloom effect
    };

    animate();

    const onDocumentMouseMove = (event) => {
      var mouseX = (event.clientX - window.innerWidth / 2) / 100;
      var mouseY = (event.clientY - window.innerHeight / 2) / 100;
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    };
    document.addEventListener('mousemove', onDocumentMouseMove, false);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      composer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
     // window.removeEventListener('deviceorientation', onDeviceOrientation); // Ensure this is correctly removing the listener

    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeBackground2;
