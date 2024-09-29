import React from "react";
import { useGLTF } from "@react-three/drei";

function Lamp() {
  const { scene } = useGLTF("/lamp/scene.gltf");

  // 可选：调整模型的缩放和位置
  scene.scale.set(10, 10, 10);
  scene.position.set(0, 15, 0);

  return <primitive object={scene} />;
}
export default Lamp;
