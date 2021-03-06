import React from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import classes from "./ErrorModal.module.css";

type ErrorModalProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};

export const ErrorModal = (props: ErrorModalProps) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type={"reset"} onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </>
  );
};
