import React, { useState } from "react";
import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

type AddUserProps = {
  onAddUser: (usernam: string, age: number | string) => void;
};

type ErrorInfoProps = {
  title: string;
  message: string;
};
export const AddUser = (props: AddUserProps) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, seEnteredAge] = useState<number | string>("");
  const [error, setError] = useState<ErrorInfoProps | null>(null);

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //
    if (!enteredUsername || !enteredAge) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values",
      });
      return;
    }

    if (+enteredAge <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
          <Button onClick={() => {}} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};
