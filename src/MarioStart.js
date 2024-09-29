import React from "react";
import { useGLTF } from "@react-three/drei";

function MarioStart() {
  const { scene } = useGLTF("/super_mario_star/scene.gltf");

  // 可选：调整模型的缩放和位置
  scene.scale.set(0.6, 0.6, 0.6);
  scene.position.set(0, 3, 0);

  return <primitive object={scene} />;
}

export default MarioStart;
