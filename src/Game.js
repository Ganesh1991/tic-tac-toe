import React, { useReducer } from "react";
import Grid from "./components/Grid";
import {
  checkWinner,
  clone,
  flatten,
  newTicTacToeGrid,
  NEXT_TURN,
} from "./utils/utils/helper";

const getInitialState = () => ({
  grid: newTicTacToeGrid(),
  status: "inProgress",
  turn: "X",
});

function gridReducer(state, action) {
  switch (action.type) {
    case "CLICK":
      const { x, y } = action.payload;
      const nextState = clone(state);
      const { grid, turn } = nextState;
      if (grid[y][x]) return state;
      grid[y][x] = turn;
      const flatGrid = flatten(grid);
      if (checkWinner(flatGrid)) {
        nextState.status = "success";
        return nextState;
      }
      if (flatGrid.every((p) => p !== null)) {
        nextState.status = "tie";
        return nextState;
      }
      nextState.turn = NEXT_TURN[turn];
      return nextState;
    case "RESET":
      return getInitialState();
    default:
      return state;
  }
}

const GAME_STATUS_TEXT = {
  inProgress: () => null,
  success: (turn) => `${turn} won!`,
  tie: () => "No one's Game",
};

function Game() {
  const [state, dispatch] = useReducer(gridReducer, getInitialState());
  const { grid, status, turn } = state;

  const handleClick = (x, y) => {
    dispatch({ type: "CLICK", payload: { x, y } });
  };

  const reset = (x, y) => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <div>
        {status === "inProgress" && <span>Next Turn: {state.turn}</span>}
        <button onClick={reset}>Reset</button>
        <br />
        <div>{GAME_STATUS_TEXT[status](turn)}</div>
        <br />
      </div>
      <br />
      <br />
      <Grid grid={grid} handleClick={handleClick} />
    </div>
  );
}

export default Game;
