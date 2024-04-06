import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { useState } from "react";

function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Canvas>
        <color attach="background" args={["#B7C0DC"]} />

        <Experience section={section} />
      </Canvas>
      <UI section={section} onSectionChange={setSection} />
    </>
  );
}

export default App;
