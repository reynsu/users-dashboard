import React from "react";
import classes from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className: string;
};

export const Card = (props: CardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
