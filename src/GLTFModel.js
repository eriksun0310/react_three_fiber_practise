import React from "react";
import { useGLTF } from "@react-three/drei";

function GLTFModel({ url }) {
  const { scene } = useGLTF(url);

  // 可选：调整模型的缩放和位置
  scene.scale.set(0.02, 0.02, 0.02);
  scene.position.set(5, -2, 2);

  scene.rotation.set(0, -190.9, 0); // 旋轉90度

  return (
    <>
      <primitive object={scene} />
    </>
  );
}

export default GLTFModel;
