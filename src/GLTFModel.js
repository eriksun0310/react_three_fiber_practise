import React from "react";
import { useGLTF } from "@react-three/drei";

function GLTFModel({ url }) {
  const { scene } = useGLTF(url);

  // 可选：调整模型的缩放和位置
  scene.scale.set(15, 15, 15);
  scene.position.set(-5, 2, 3);

  return <primitive object={scene} />;
}

export default GLTFModel;
