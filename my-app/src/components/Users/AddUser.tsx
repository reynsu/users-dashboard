import React, { useState } from "react";
import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";
import { Button } from "../UI/Button";

type AddUserProps = {
  onAddUser: (usernam: string, age: number | string) => void;
};

export const AddUser = (props: AddUserProps) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, seEnteredAge] = useState<number | string>("");

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //
    if (!enteredUsername || !enteredAge) {
      return;
    }

    if (+enteredAge <= 0) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    seEnteredAge("");
  };

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    seEnteredAge(+event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
