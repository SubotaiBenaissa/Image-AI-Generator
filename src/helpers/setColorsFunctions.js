export const R = (x, y, t) => {
  return Math.floor(20 * Math.cos((x * x - y * y) / 300 + t));
};

export const G = (x, y, t) => {
  return Math.floor(
    20 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  );
};

export const B = (x, y, t) => {
  return Math.floor(
    20 *
      Math.sin(
        5 * Math.sin(t / 9) +
          ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
      )
  );
};