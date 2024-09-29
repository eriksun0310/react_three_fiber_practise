import React from 'react';
import { useFrame } from '@react-three/fiber';

function Diamond() {
  return (
    <mesh position={[0, 0, 0]} scale={0.2}>
      {/* 使用多面體幾何體來創建鑽石 */}
      <dodecahedronGeometry args={[1, 0]} />
      {/* 定義材質為透明的藍色 */}
      <meshPhysicalMaterial
        color="blue" // 鑽石顏色
        transparent={true} // 啟用透明效果
        opacity={0.8} // 設置透明度
        roughness={0.1} // 設置粗糙度
        metalness={0.5} // 設置金屬感
        clearcoat={1} // 使用清漆效果以增加反射
        clearcoatRoughness={0.1} // 清漆的粗糙度
      />
    </mesh>
  );
}

export default Diamond;