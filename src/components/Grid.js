import React from "react";
import Cell from "./Cell";

function Grid({ grid, handleClick }) {
  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          backgroundColor: "#000",
          display: "grid",
          gridTemplateRows: `repeat(${grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
          gridGap: 2,
        }}
      >
        {grid.map((row, rowIdx) => {
          return row.map((cell, colIdx) => {
            return (
              <Cell
                key={`${colIdx}-${rowIdx}`}
                cell={cell}
                rowIndex={rowIdx}
                colIndex={colIdx}
                handleClick={handleClick}
              />
            );
          });
        })}
      </div>
    </div>
  );
}

export default Grid;
