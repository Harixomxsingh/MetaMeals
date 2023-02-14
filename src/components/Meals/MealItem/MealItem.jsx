import React from "react";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className={classes.meal}>
      <div className={classes.item}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.des}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
