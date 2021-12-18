import React, { useState } from "react";

import { getUserData } from "../Authentication";

const useGetUser = () => {
  const [users, setUsers] = useState([]);

  const getUserFirst = async () => {
    try {
      const userData = await getUserData("userData");
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return { users, setUsers, getUserFirst };
};

export default useGetUser;
