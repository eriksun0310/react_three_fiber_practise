// Box.js
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber"; // 引入 useFrame 來讓物體隨動畫變化

function Box() {
  const ref = useRef();

  // 使用 useFrame 讓立方體每幀進行旋轉
  // useFrame(() => {
  //   ref.current.rotation.x += 0.01;
  //   ref.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1}>
      {/* 定義立方體幾何體 */}
      <boxGeometry args={[1, 2, 1]} />
      {/* 定義材質（紅色） */}
      {/* 定義材質，使用 MeshStandardMaterial 或 MeshPhongMaterial */}
      <meshPhysicalMaterial
        color="lightblue" // 櫃子的顏色
        transparent={true} // 啟用透明效果
        opacity={0.2} // 設置透明度（更低的值會更透明）
        roughness={0.1} // 設置粗糙度
        metalness={0.1} // 設置金屬感（可以試著調低）
        clearcoat={1} // 使用清漆效果以增加反射
        clearcoatRoughness={0.1} // 清漆的粗糙度
      />
    </mesh>
  );
}

export default Box;
