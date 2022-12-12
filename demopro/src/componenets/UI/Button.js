import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      //if props.type is undefined then 'button' will be used as fallback.
      onClick={props.onClick}
    >
         {props.children}
    </button>
    
  );
};

export default Button;
