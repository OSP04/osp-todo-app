import React from "react";
import { getUserData, storeUserData } from "./Authentication";

export const addUser = async (users, newUser) => {
  let updatedUsers = [];
  if (Array.isArray(users) && users.length === 0) {
    updatedUsers = [newUser];
  } else {
    updatedUsers = [...users, newUser];
  }

  await storeUserData("userData", updatedUsers);
};
