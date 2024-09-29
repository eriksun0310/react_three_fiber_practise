import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import GLTFModel from "./GLTFModel";
import MarioStart from "./MarioStart";
import DisplayCase from "./DisplayCase";
import Lamp from "./Lamp";

import MuiSwitch from "./MUISwitch";

function App() {
  // 定义开关状态
  const [isOff, setIsOff] = useState(false);

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
