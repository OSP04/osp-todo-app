import React, { useState } from "react";

import { getData } from "../db";

const useGetData = () => {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [comments, setComments] = useState(null);
  const [users, setUsers] = useState(null);

  // Get tasks and categories data when start app
  const getDataFirst = async () => {
    try {
      const categoryObjs = await getData("categories");
      const taskObjs = await getData("tasks");
      setCategories(categoryObjs);
      setTasks(taskObjs);
    } catch (error) {
      console.log(error);
    }
  };

  // Get users and comments data when start app
  const getComments = async () => {
    try {
      const commentObjs = await getData("comments");
      const userObjs = await getData("users");
      setComments(commentObjs);
      setUsers(userObjs);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    categories,
    tasks,
    comments,
    users,
    setUsers,
    setCategories,
    setTasks,
    setComments,
    getDataFirst,
    getComments,
  };
};

export default useGetData;
