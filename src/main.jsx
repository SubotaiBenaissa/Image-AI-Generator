import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Background } from "./components/Background";
import { MainContent } from "./pages/MainContent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Background />
    <MainContent />
  </React.StrictMode>
);
