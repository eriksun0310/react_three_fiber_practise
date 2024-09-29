import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three"; // 引入动画库

function Switch({ isOff, setIsOff, onToggle }) {
  // 定义开关状态
  // const [isOff, setIsOff] = useState(false);
  const { scene } = useGLTF("/dirty_light_switch/scene.gltf");

  // 可选：调整模型的缩放和位置
  scene.scale.set(15, 15, 15);
  scene.position.set(-5, 2, 3);

  // 使用 useSpring 创建动画
  const springProps = useSpring({
    position: isOff ? [-5, 3, 3] : [-5, 2, 3], // 切换位置
    config: { tension: 300, friction: 10 }, // 调整动画参数
  });

  // 切换开关状态并调用 onToggle
  const handleToggle = () => {
    setIsOff((prev) => !prev);
    onToggle();
  };
  return (
    <>
      {/* 添加环境光 */}
      {/* <spotLight
        position={[-5, 5, 3]} // 聚光灯位置，稍高于开关
        angle={3} // 光束的角度
        penumbra={5} // 光束边缘的柔和度
        intensity={isOff ? 100 : 0} // 开关打开时的光强
        distance={10} // 光源影响的距离
        decay={2} // 衰减
        color={"white"} // 灯光颜色
        castShadow // 开启阴影效果
      /> */}
      <animated.primitive
        object={scene}
        position={springProps.position} // 应用动画位置
        onClick={handleToggle} // 点击时切换
      />
    </>
  );
}

export default Switch;
