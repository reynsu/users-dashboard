import React from "react";
import classes from "./Button.module.css";

type ButtonsProps = {
  type: "submit" | "reset" | "button" | undefined;
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonsProps) => {
  return (
    <button className={classes.button} type={props.type}>
      {props.children}
    </button>
  );
};
