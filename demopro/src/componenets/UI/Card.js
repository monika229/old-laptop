import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
  // classes.card => we have .card class in Card.module.css file to connect that file with Card.js
};

export default Card;
