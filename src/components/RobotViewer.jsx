import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { motion as Motion } from "framer-motion";

function RobotModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.6}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function RobotViewer() {
  return (
    <Motion.div
      className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-80 sm:h-96 md:h-[70vh] lg:h-[80vh]"
      initial={{ x: 200, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      }}
    >
      <Motion.div
        className="w-full h-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 4,
          repeat: isFinite,
          ease: "easeInOut",
        }}
      >
        <Canvas
          camera={{ position: [0, 1.5, 7], fov: 45, near: 0.1, far: 100 }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <RobotModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Motion.div>
    </Motion.div>
  );
}
