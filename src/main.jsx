import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Background } from "./components/Background.jsx";
import { MainContent } from "./components/MainContent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Background />
    <MainContent />
  </React.StrictMode>
);
