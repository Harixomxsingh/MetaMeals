import React from "react";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.des}</div>
          <div className={classes.price}>{price}</div>
        </div>
        {/* <div></div> */}
      </div>
    </li>
  );
};

export default MealItem;
