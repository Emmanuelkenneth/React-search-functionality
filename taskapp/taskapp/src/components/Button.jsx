import React from "react";
const Button = ({ color, text, onClick }) => {
  return (
    <button style={{ backgroundColor: color, color: "white" }} className="btn">
      {text}
    </button>
  );
};
export default Button;
