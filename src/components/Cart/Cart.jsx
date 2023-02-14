import React from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul>
      {[{ id: "u1", name: "palak panner", amount: 2, price: 12.49 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.32</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button}>order</button>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
