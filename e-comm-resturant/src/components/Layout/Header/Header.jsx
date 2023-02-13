import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      {/* header  */}
      <header className={classes.header}>
        <h1>MetaMeals</h1>
        <button>Cart</button>
      </header>
      {/* img  */}
      <div className={classes["main-image"]}>
        <img
          src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Table of Food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
