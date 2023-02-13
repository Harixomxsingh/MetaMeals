import React from "react";
import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food, By Meta Meals</h2>
      <div>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at anywhere{" "}
        </p>
        <p>
          All our meals are cooked with high quality ingredients, just in time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default MealSummary;
