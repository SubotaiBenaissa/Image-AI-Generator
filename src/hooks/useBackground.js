import { useEffect, useRef } from "react";

export const useBackground = () => {
  const canvasRef = useRef(null); // Inicializo useRef
  const tRef = useRef(0);
  const contextRef = useRef(null); // Para evitar un null/undefined uso el useRef

  const R = (x, y, t) => {
    return Math.floor(20 * Math.cos((x * x - y * y) / 300 + t));
  };

  const G = (x, y, t) => {
    return Math.floor(
      20 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  const B = (x, y, t) => {
    return Math.floor(
      20 *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
    );
  };

  const runBackground = () => {
    // const canvas = canvasRef.current;
    // const context = contextRef.current;

    // if (!canvas || !context) return;

    for (let x = 0; x <= 35; x++) {
      for (let y = 0; y <= 35; y++) {
        col(
          x,
          y,
          R(x, y, tRef.current),
          G(x, y, tRef.current),
          B(x, y, tRef.current)
        );
      }
    }

    tRef.current = tRef.current + 0.01;
    requestAnimationFrame(runBackground);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d"); // aqui la ref cambia al context 2d, pudiendo ahora si utilizar la ref
  }, []);

  const col = (x, y, r, g, b) => {
    const context = contextRef.current; // aqui ya se usa la ref actualizada al montarse el componente
    context.fillStyle = `rgb(${r},${g},${b})`;
    context.fillRect(x, y, 1, 1);
  };

  return { runBackground, canvasRef };
};
