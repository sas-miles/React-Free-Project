import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const modelSrc = rootElement.dataset.model || null;

if (modelSrc) {
  // Initializes the main React element and preloads the GLTF.
  const root = createRoot(rootElement);
  root.render(<App model={modelSrc} />);
  useGLTF.preload(modelSrc);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App modelSrc={modelSrc} />
  </React.StrictMode>
);
