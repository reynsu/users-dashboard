import React from "react";
import { Card } from "../UI/Card";
import classes from "./UsersList.module.css";

export type DataUser = {
  name: string;
  age: string | number;
  id: string;
};

type UserListProps = {
  users: DataUser[];
};

export const UsersList = (props: UserListProps) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: DataUser) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
