import { useEffect } from "react";
import { useBackground } from "../hooks/";

export const Background = () => {
  const { runBackground, canvasRef } = useBackground();

  useEffect(() => {
    runBackground();
  }, []);

  return <canvas ref={canvasRef} width="36" height="36" />;
};
