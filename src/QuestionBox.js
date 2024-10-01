import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

function QuestionBox({ showFlower, setShowFlower }) {
  const { scene } = useGLTF("/question_mark_block_super_mario_bros/scene.gltf");

  // 可选：调整模型的缩放和位置
  scene.scale.set(0.002, 0.002, 0.002);
  scene.position.set(-5, 2, 0);

  return (
    <primitive
      object={scene}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
      onClick={() => setShowFlower(!showFlower)} // 点击时显示花
    />
  );
}

export default QuestionBox;
