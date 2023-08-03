import React from "react";
import Button from "./Button";
const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" color="green" onClick={onAdd} />
    </header>
  );
};
Header.defaultProps = {
  title: "Todo-List",
};
export default Header;
