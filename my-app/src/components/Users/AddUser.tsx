import React from "react";
import { Card } from "../UI/Card";
import classes from "./AddUser.module.css";

// type AddUserProps = {
//   Username: string;
//   age: number;
// };

export const AddUser = () => {
  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};