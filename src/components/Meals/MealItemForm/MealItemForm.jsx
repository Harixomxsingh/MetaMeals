import React from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      {/* <input type="text" name="" id="" /> */}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          max: "5",
          min: "1",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
