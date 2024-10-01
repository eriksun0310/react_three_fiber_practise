import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three"; // 引入動畫相關的庫

function Flower({ isVisible }) {
  const { scene } = useGLTF("/mario_fire_flower/scene.gltf");

  // 可选：调整模型的缩放和位置
  // scene.scale.set(0.3, 0.3, 0.3);
  // scene.position.set(-5, 5, 0);

  scene.rotation.set(0, -190.1, 0); // 旋轉90度

  // 定義動畫效果，從縮小到正常大小，模擬跳出效果
  const { scale, position } = useSpring({
    from: { scale: [0, 0, 0], position: [-5, 3, 0] }, // 初始狀態：縮小並在低處
    to: { scale: [0.3, 0.3, 0.3], position: [-5, 5, 0] }, // 結束狀態：正常大小並升到預期位置
    reverse: !isVisible, // 反向動畫：當 isVisible 為 false，動畫會反轉
    config: { tension: 150, friction: 12 }, // 調整動畫的彈性和摩擦力
  });

  return (
    <animated.primitive
      object={scene}
      scale={scale} // 動態縮放
      position={position} // 動態位置
    />
  );
}

export default Flower;
