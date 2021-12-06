import React, { useState } from "react";
const [tasks, setTasks] = useState(AsyncStorage.getItem("tasks"));

export const removeTodo = (id) => {
  setTasks((prevState) => {
    const index = prevState.todos.findIndex((e) => e.id === id);
    prevState.todos.splice(index, 1);
    const todos = [...prevState.todos];
    AsyncStorage.setItem("tasks", JSON.stringify(todos));
  });
};

export const updateTodo = (todo, id) => {
  setTasks((prevState) => {
    const updatedTodo = {
      ...updateTodo,
      text: todo.text,
      date: todo.date,
      due: todo.dueDate,
      category: todo.category,
      location: todo.location,
      memo: todo.memo,
    };
    const index = prevState.tasks.findIndex((e) => e.id === id);
    prevState.tasks.splice(index, 1, updatedTodo);
    const todos = [...prevState.tasks];
    AsyncStorage.setItem("tasks", JSON.stringify(todos));
  });
};
