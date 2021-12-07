import React, { useState, useEffect } from "react";
import { storeData, getData } from "./db";

export const addTodo = (task) => {
  const [tasks, setTasks] = useState([]);
  useEffect(async () => {
    try {
      const tasksArr = await getData("tasks");
      if (tasksArr !== null) {
        setTasks(tasksArr);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const todos = [...tasks, task];

  setTasks(todos);
  storeData("tasks", todos);
};

export const removeTodo = (id) => {
  const [tasks, setTasks] = useState([]);
  useEffect(async () => {
    try {
      const tasksArr = await getData("tasks");
      if (tasksArr !== null) {
        setTasks(tasksArr);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  let todos = [...tasks];
  const index = tasks.findIndex((e) => e.id === id);
  todos.splice(index, 1);
  setTasks(todos);
  storeData("tasks", todos);
};

export const updateTodo = (todo, id) => {
  const [tasks, setTasks] = useState([]);
  useEffect(async () => {
    try {
      const tasksArr = await getData("tasks");
      if (tasksArr !== null) {
        setTasks(tasksArr);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  let todos = [...tasks];
  const updatedTodo = {
    ...todo,
    title: todo.title,
    date: todo.date,
    due: todo.dueDate,
    category: todo.category,
    location: todo.location,
    memo: todo.memo,
  };
  const index = tasks.findIndex((e) => e.id === id);
  todos.splice(index, 1, updatedTodo);
  setTasks(todos);
  storeData("tasks", todos);
};
