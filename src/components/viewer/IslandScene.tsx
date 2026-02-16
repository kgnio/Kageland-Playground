"use client";

import * as React from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function isPerspectiveCamera(
  cam: THREE.Camera,
): cam is THREE.PerspectiveCamera {
  return (cam as THREE.PerspectiveCamera).isPerspectiveCamera === true;
}

function isOrthographicCamera(
  cam: THREE.Camera,
): cam is THREE.OrthographicCamera {
  return (cam as THREE.OrthographicCamera).isOrthographicCamera === true;
}

export function IslandScene() {
  const gltf = useGLTF("/models/Island.glb");
  const { camera, mouse, size } = useThree();

  const rootRef = React.useRef<THREE.Group>(null);
  const yawRef = React.useRef<THREE.Group>(null);
  const tiltRef = React.useRef<THREE.Group>(null);
  const contentRef = React.useRef<THREE.Group>(null);

  const scene = React.useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  const maxYaw = Math.PI * 0.35;
  const maxTilt = Math.PI / 9;
  const speed = 0.16;

  React.useLayoutEffect(() => {
    const root = rootRef.current;
    const yaw = yawRef.current;
    const tilt = tiltRef.current;
    const content = contentRef.current;
    if (!root || !yaw || !tilt || !content) return;

    root.scale.setScalar(1);
    root.position.set(0, 0, 0);

    yaw.rotation.set(0, 0, 0);
    tilt.rotation.set(0, 0, 0);

    content.position.set(0, 0, 0);

    const box = new THREE.Box3().setFromObject(scene);
    const size3 = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDim = Math.max(size3.x, size3.y, size3.z);
    if (!isFinite(maxDim) || maxDim <= 0) return;

    content.position.set(-center.x, -center.y, -center.z);

    const targetMaxDim = 1.25;
    const scale = targetMaxDim / maxDim;
    root.scale.setScalar(scale);

    const scaledMaxDim = maxDim * scale;

    if (isPerspectiveCamera(camera)) {
      const fovRad = THREE.MathUtils.degToRad(camera.fov);
      const dist = scaledMaxDim / 2 / Math.tan(fovRad / 2);

      camera.position.set(0, scaledMaxDim * 0.35, dist * 2.2);
      camera.near = 0.01;
      camera.far = dist * 50;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      return;
    }

    if (isOrthographicCamera(camera)) {
      const aspect = size.width / Math.max(1, size.height);
      const halfH = scaledMaxDim * 0.75;
      const halfW = halfH * aspect;

      camera.left = -halfW;
      camera.right = halfW;
      camera.top = halfH;
      camera.bottom = -halfH;

      camera.position.set(0, scaledMaxDim * 0.35, scaledMaxDim * 2.2);
      camera.near = 0.01;
      camera.far = scaledMaxDim * 200;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [camera, scene, size.width, size.height]);

  useFrame(() => {
    const yaw = yawRef.current;
    const tilt = tiltRef.current;
    if (!yaw || !tilt) return;

    const targetY = mouse.x * maxYaw;
    const targetX = -mouse.y * maxTilt;

    yaw.rotation.y = THREE.MathUtils.lerp(yaw.rotation.y, targetY, speed);
    tilt.rotation.x = THREE.MathUtils.lerp(tilt.rotation.x, targetX, speed);
  });

  return (
    <group ref={rootRef}>
      <group ref={yawRef}>
        <group ref={tiltRef}>
          <group ref={contentRef}>
            <primitive object={scene} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Island.glb");
