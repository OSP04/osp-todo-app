import React, { useState, useEffect } from "react";
import { storeData, getData } from "./db";

export const addTodo = async (tasks, selectedTask) => {
  const todos = [...tasks, selectedTask];

  storeData("tasks", todos);
};

export const removeTodo = async (tasks, id) => {
  let todos = [...tasks];
  const index = tasks.findIndex((e) => e.id === id);
  todos.splice(index, 1);
  storeData("tasks", todos);
};

export const updateTodo = async (tasks, selectedTask, id) => {
  let todos = [...tasks];
  const updatedTodo = {
    ...selectedTask,
    title: selectedTask.title,
    date: selectedTask.date,
    due: selectedTask.dueDate,
    category: selectedTask.category,
    location: selectedTask.location,
    memo: selectedTask.memo,
  };
  const index = tasks.findIndex((e) => e.id === id);
  todos.splice(index, 1, updatedTodo);
  storeData("tasks", todos);
};

export const updateCategories = async (
  categoriesObj,
  taskOfCategory,
  selectedTask
) => {
  const category = [...taskOfCategory, selectedTask];

  const categories = [...categoriesObj, category];
  storeData("categories", categories);
};
