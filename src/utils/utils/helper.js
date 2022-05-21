export const newTicTacToeGrid = () => generateGrid(3, 3, () => null);

export const generateGrid = (rows, columns, mapper) =>
  Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper));

export const clone = (arr) => JSON.parse(JSON.stringify(arr));

export const NEXT_TURN = {
  O: "X",
  X: "O",
};

export const flatten = (array) =>
  array.reduce((acc, curr) => [...acc, ...curr], []);

export const checkThree = (a, b, c) => {
  if (!a || !b || !c) return false;
  return a === b && b === c;
};

export const checkWinner = (flatGrid) => {
  const [nw, n, ne, w, c, e, sw, s, se] = flatGrid;
  return (
    checkThree(nw, n, ne) ||
    checkThree(w, c, e) ||
    checkThree(sw, s, se) ||
    checkThree(nw, w, sw) ||
    checkThree(n, c, s) ||
    checkThree(ne, e, se) ||
    checkThree(nw, c, se) ||
    checkThree(ne, c, sw)
  );
};
