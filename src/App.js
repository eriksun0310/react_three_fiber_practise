import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
// import Box from "./Box";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import Diamond from "./Diamond";
import GLTFModel from "./GLTFModel";
import MarioStart from "./MarioStart";
import DisplayCase from "./DisplayCase";
import Lamp from "./Lamp";
import Switch from "./Switch";
import MuiSwitch from "./MUISwitch";

function App() {
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(10);
  const toggleLight = () => {
    setAmbientLightIntensity((prev) => (prev > 0 ? 0 : 10)); // 切换环境光强度
  };

  // 定义开关状态
  const [isOff, setIsOff] = useState(false);

  console.log("isOff", isOff);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1,
        }}
      >
        <MuiSwitch isOff={isOff} setIsOff={setIsOff} />
      </div>

      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        {/* 设置相机 */}
        <PerspectiveCamera makeDefault fov={75} position={[0, 5, 13]} />
        {!isOff && <Lamp isOff={isOff} />}

        <MarioStart />
        {/* 展示櫃 */}
        <DisplayCase isOff={isOff} />

        {/* 添加軌道控制 */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
