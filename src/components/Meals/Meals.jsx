import React from "react";
import AvailableMeals from "./AvailableMeal/AvailableMeals";
import MealSummary from "./MealSummary/MealSummary";

const Meals = () => {
  return (
    <div>
      <MealSummary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
