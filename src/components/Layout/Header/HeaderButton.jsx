import React from "react";
import CartIcon from "../../icons/Carticon";
import classes from "./HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <button className={classes.button}>
      {/* icon  */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* text  */}
      <span>Cart</span>
      {/* quantity  */}
      <span className={classes.dge}>3</span>
    </button>
  );
};

export default HeaderButton;
