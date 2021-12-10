import React, { useState, useEffect } from "react";
import { storeData, getData } from "./db";

export const addTodo = (tasks, selectedTask) => {
  const todos = [...tasks, selectedTask];

  storeData("tasks", todos);
};

export const removeTodo = (tasks, id) => {
  let todos = [...tasks];
  const index = tasks.findIndex((e) => e.id === id);
  todos.splice(index, 1);
  storeData("tasks", todos);
};

export const updateTodo = (tasks, updatedTodo, id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? updatedTodo : task
  );
  storeData("tasks", updatedTasks);
};

export const updateCategories = (
  categories,
  editingCategory,
  taskOfCategory,
  task,
  id
) => {
  const categoryTasks = [...taskOfCategory, task]; //편집하고 있던 카테고리 객체 tasks: 배열에 오브젝트 추가
  const categoryObj = { ...editingCategory, tasks: categoryTasks }; //편집하고 있던 카테고리 객체 tasks: 배열 업테이트

  const updatedCategories = categories.map((category) =>
    category.id === id ? categoryObj : category
  );
  storeData("categories", updatedCategories);
};
