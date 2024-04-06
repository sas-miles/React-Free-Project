import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const modelSrc = rootElement.getAttribute("data-model");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App modelSrc={modelSrc} />
  </React.StrictMode>
);
