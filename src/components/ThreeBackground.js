import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const ThreeBackground = forwardRef((props, ref) => {
  const mountRef = useRef(null);
  let mixers = [];

  useImperativeHandle(ref, () => ({
    playDragonAnimationOnce: () => {
      const dragonMixer = mixers[0];
      if (dragonMixer && dragonMixer._actions && dragonMixer._actions.length > 0) {
        const action = dragonMixer.clipAction(dragonMixer._actions[0]._clip);
        action.reset();
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.play();
      }
    }
  }));

  useEffect(() => {
    if (mountRef.current.children.length > 0) {
      // If the renderer already exists, do not reinitialize.
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.1, 0.04, 0.085);
    composer.addPass(bloomPass);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 50.0);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Point Light
    const pointLight = new THREE.PointLight(0xffffff, 1.2, 1000);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load('/skullblooming/scene.gltf', (gltf) => {
      scene.add(gltf.scene);
      gltf.scene.scale.set(1000, 1000, 1000);
      gltf.scene.position.set(0, 0, -300);

      if (gltf.animations && gltf.animations.length) {
        const portalMixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          const action = portalMixer.clipAction(clip);
          action.play();
          action.timeScale = 0.5;
        });
        mixers.push(portalMixer);
      }
    });

    camera.position.z = 5;

    const clock = new THREE.Clock();
    const animate = function () {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixers.forEach((mixer) => mixer.update(delta));
      composer.render(delta);
    };
    animate();

    const onDocumentMouseMove = (event) => {
      var mouseX = (event.clientX - window.innerWidth / 2) / 100;
      var mouseY = (event.clientY - window.innerHeight / 2) / 100;
      camera.position.x += (mouseX - camera.position.x) * 0.1;
      camera.position.y += (-mouseY - camera.position.y) * 0.1;
      camera.lookAt(scene.position);
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

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
      if (mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', handleResize);
      mixers.forEach(mixer => mixer.uncacheRoot(mixer.getRoot()));
      mixers = [];
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
});

export default ThreeBackground;
