import { useEffect, useRef } from "react";

export const Background = () => {
  const canvasRef = useRef(null);
  const tRef = useRef(0);

  const col = (x, y, r, g, b) => {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = `rgb(${r},${g},${b})`;
    context.fillRect(x, y, 1, 1);
  };

  const R = (x, y, t) => {
    return Math.floor( 20 * Math.cos((x * x - y * y) / 300 + t));
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

  const run = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

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
    requestAnimationFrame(run);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    run();

    return () => cancelAnimationFrame(run);
  }, []);

  return <canvas ref={canvasRef} width="36" height="36" />;
};
