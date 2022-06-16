import React, { useState } from "react";
import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";
import { Button } from "../UI/Button";

export const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, seEnteredAge] = useState(0);

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername);
  };

  const userAgeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    seEnteredAge(+event.target.value);
    console.log(enteredAge);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={userAgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
