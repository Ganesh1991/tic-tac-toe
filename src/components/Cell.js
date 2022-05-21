import React from "react";

const cellStyle = {
  backgroundColor: "#fff",
  height: 75,
  width: 75,
};

const buttonStyle = {
  width: "100%",
  height: "100%",
};

function Cell({ cell, rowIndex, colIndex, handleClick }) {
  return (
    <div style={cellStyle}>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => handleClick(colIndex, rowIndex)}
      >
        {cell}
      </button>
    </div>
  );
}
export default Cell;
