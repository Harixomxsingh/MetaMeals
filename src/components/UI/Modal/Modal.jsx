import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverLays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const HelperRoot = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={props.onClick} />, HelperRoot)}
      {ReactDOM.createPortal(
        <ModalOverLays>{props.children}</ModalOverLays>,
        HelperRoot
      )}
    </Fragment>
  );
};

export default Modal;
