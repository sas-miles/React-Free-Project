import {
  Backdrop,
  CameraControls,
  Environment,
  OrbitControls,
  Resize,
  ScrollControls,
  Stage,
} from "@react-three/drei";
import { Building } from "./Building";
import { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { sections } from "./UI";

const cameraPositions = {
  intro: [0, 0, 8, 0, 0, 0],
  stairs: [-2, 0, 4, -4, 0, 0],
  interior: [5, 0, -3, 1, 0, -1],
  "action-button": [0, 3, 8, 0, -1, 0],
};

export const Experience = ({ section, onSectionChange }) => {
  const box = useRef();
  const controls = useRef();

  const [introFinished, setIntroFinished] = useState(false);

  const intro = async () => {
    controls.current.setLookAt(0, 0, 5, 0, 0, 0, false);
    controls.current.dolly(-2, true);
    controls.current.rotate(degToRad(0), degToRad(-25), true);

    setIntroFinished(true);
    playTransition();
  };

  const playTransition = async () => {
    controls.current.setLookAt(...cameraPositions[sections[section]], true);
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    if (!introFinished) {
      return;
    }
    playTransition();
  }, [section]);

  return (
    <>
      <CameraControls
        smoothTime={0.6}
        ref={controls}
        mouseButtons={{
          left: 0,
          middle: 0,
          right: 0,
          wheel: 0,
        }}
        // disable all touch gestures
        touches={{
          one: 0,
          two: 0,
          three: 0,
        }}
      />

      <mesh ref={box}>
        <Building />
      </mesh>

      <Environment preset="dawn" />
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 1, 0]} intensity={1} />
    </>
  );
};
