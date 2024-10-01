import React from "react";
import { useGLTF } from "@react-three/drei";

function BOX({ url }) {
  const { scene } = useGLTF("/mario_brick_block/scene.gltf");

  // 可选：调整模型的缩放和位置
  scene.scale.set(0.02, 0.02, 0.02);
  scene.position.set(-5, 2, 0);

  return <primitive object={scene} />;
}

export default BOX;
