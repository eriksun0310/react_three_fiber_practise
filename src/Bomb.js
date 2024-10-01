import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Bomb() {
  const { scene } = useGLTF("/bob-omb_super_mario_bros/scene.gltf");
  const bombRef = useRef();
  const [isCircling, setIsCircling] = useState(false);
  const [angle, setAngle] = useState(0);

  // 展示櫃的位置（假設在場景中心）
  const centerX = 0;
  const centerZ = 0;
  const radius = 5; // 繞圈半徑
  const rotationSpeed = 1.5; // 增加旋轉速度

  useEffect(() => {
    if (bombRef.current) {
      bombRef.current.scale.set(0.02, 0.02, 0.02);
      bombRef.current.position.set(radius, -2, 0); // 設置初始位置
      bombRef.current.rotation.set(0, -Math.PI / 2, 0); // 設置初始旋轉，使炸彈客面向圓心
    }
  }, []);

  useFrame((state, delta) => {
    if (isCircling && bombRef.current) {
      // 更新角度，使用更快的旋轉速度
      setAngle(
        (prevAngle) => (prevAngle + delta * rotationSpeed) % (2 * Math.PI)
      );

      // 計算新位置
      const newX = centerX + radius * Math.cos(angle);
      const newZ = centerZ + radius * Math.sin(angle);

      // 更新位置
      bombRef.current.position.x = newX;
      bombRef.current.position.z = newZ;

      // 更新旋轉，使炸彈客面向圓心
      bombRef.current.rotation.y = angle + Math.PI / 2;
    }
  });

  const handleClick = (event) => {
    event.stopPropagation();
    setIsCircling(!isCircling);
  };
  return (
    <>
      <primitive
        ref={bombRef}
        object={scene}
        position={[radius, -2, 0]} // 初始位置
        onClick={handleClick}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      />
    </>
  );
}

export default Bomb;
