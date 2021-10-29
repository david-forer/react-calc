import React from "react";
import "./button.css";

const Button = ({ symbol, bgcolor, color, handleClick }) => {
  return (
    <>
      <button
        className="calc-buttons"
        style={{ backgroundColor: bgcolor, color: color }}
        onClick={() => handleClick(symbol)}
      >
        {symbol}
      </button>
    </>
  );
};

export default Button;
