import React, { Fragment } from "react";
import Cart from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Cart>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            // <li>{meal.name}</li>
            <>
              <MealItem
                key={meal.id}
                id={meal.id}
                meal={meal}
                name={meal.name}
                price={meal.price}
                des={meal.description}
              />
            </>
          ))}
        </ul>
      </Cart>
    </section>
  );
};

export default AvailableMeals;
