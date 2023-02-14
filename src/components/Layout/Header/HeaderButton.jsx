import React from "react";
import CartIcon from "../../icons/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
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
