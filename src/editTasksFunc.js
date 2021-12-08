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

export const updateTodo = (tasks, selectedTask, id) => {
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
  todos.splice(index, 1);
  storeData("tasks", [...todos, updatedTodo]);
};

export const updateCategories = (
  categoriesArr,
  editingCategory,
  taskOfCategory,
  selectedTask,
  id
) => {
  const categoryTasks = [...taskOfCategory, selectedTask]; //편집하고 있던 카테고리 객체 tasks: 배열에 오브젝트 추가
  const categoryObj = { ...editingCategory, tasks: categoryTasks }; //편집하고 있던 카테고리 객체 tasks: 배열 업테이트

  const index = categoriesArr.findIndex((e) => e.id === id);
  categoriesArr.splice(index, 1);
  storeData("categories", [...categoriesArr, categoryObj]);
};
