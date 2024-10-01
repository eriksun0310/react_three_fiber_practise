import React from "react";
import { useGLTF } from "@react-three/drei";

function DisplayCase({ isOff }) {
  const { scene } = useGLTF("/display_case/scene.gltf");

  // 可选：调整模型的缩放和位置
  scene.scale.set(3, 3, 3);
  scene.position.set(0, 0, 0);

  // console.log('isOff')

  return (
    <>
      <pointLight
        position={[0, 5, 5]} // 聚光灯位置，稍高于开关
        angle={3} // 光束的角度
        // penumbra={} // 光束边缘的柔和度
        intensity={!isOff ? 120 : 0} // 开关打开时的光强
        distance={10} // 光源影响的距离
        decay={2} // 衰减
        color={"white"} // 灯光颜色
        castShadow // 开启阴影效果
      />
      <primitive object={scene} />
    </>
  );
}

export default DisplayCase;
