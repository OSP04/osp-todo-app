import React, { useState } from "react";

import styled from "styled-components/native";

import HomeTaskItem from "./HomeTaskItem";
import CategoryBar from "../components/CategoryBar";
import Input from "./Input";

const HomeTasks = ({ tasks, setTasks, categories, selectedDate }) => {
  const [refresh, setRefresh] = useState(true);
  const [newTask, setNewTask] = useState("");

  const doRefresh = () => {
    setRefresh((current) => !current);
  };

  const addTask = (category) => {
    if (newTask) {
      setNewTask("");
      const ID = Date.now().toString();
      const newTaskObj = {
        id: ID,
        text: newTask,
        date: selectedDate,
        due: null,
        category: category.title,
        image: null,
        complete: false,
        created: Date.now(),
      };
      setTasks([...tasks, newTaskObj]);
      const updatedTasks = category.tasks.concat(newTaskObj);
      category.tasks = updatedTasks;
    }
  };

  const onBlur = (category) => {
    category.isAdding = false; // Hide text input
    setNewTask("");
    doRefresh();
  };

  const sortTasks = (category) => {
    const sorting = category.sorting;
    const _tasks = category.tasks;

    if (sorting === "added") {
      return _tasks;
    } else if (sorting === "done") {
      return _tasks.filter((task) => task.complete === true);
    } else if (sorting === "not") {
      return _tasks.filter((task) => task.complete === false);
    } else {
      const notDueTasks = _tasks.filter((task) => task.due === null); // Tasks not having due date
      const dueTasks = _tasks.filter((task) => task.due !== null); // Tasks having due date
      let dueDates = []; // Due dates

      // Get due dates
      for (let i = 0; i < dueTasks.length; i++) {
        dueDates[i] = dueTasks[i].due.getTime();
      }
      // Sort dueTasks in the order of the deadline
      for (let i = 0; i < dueDates.length - 1; i++) {
        let recentIndex = i;
        for (let j = i + 1; j < dueDates.length; j++) {
          if (dueDates[recentIndex] > dueDates[j]) {
            console.log(true);
            recentIndex = j;
          }
        }
        const temp = dueDates[i];
        dueDates[i] = dueDates[recentIndex];
        dueDates[recentIndex] = temp;

        temp = dueTasks[i];
        dueTasks[i] = dueTasks[recentIndex];
        dueTasks[recentIndex] = temp;
      }

      return dueTasks.concat(notDueTasks);
    }
  };

  const compareDate = (date1, date2) => {
    return date1.toDateString() === date2.toDateString();
  };

  return (
    <>
      {categories.map((category) => (
        <StyledView key={Date.now() + category.id}>
          <CategoryBar
            key={category.id}
            onPressOut={() => {
              category.isAdding = true;
              doRefresh();
            }}
            category={category}
            title={category.title}
            zIndex={
              categories.length -
              categories.findIndex((element) => element.id === category.id)
            }
            doRefresh={doRefresh}
          />
          {sortTasks(category).map((item) => {
            return (
              // if dates are the same, return task item
              compareDate(item.date, selectedDate) && (
                <HomeTaskItem key={item.id} item={item} doRefresh={doRefresh} />
              )
            );
          })}
          <Input
            key={category.id + "Input"}
            newTask={newTask}
            isAdding={category.isAdding}
            onSubmitEditing={() => {
              addTask(category);
            }}
            onChangeText={setNewTask}
            onBlur={() => onBlur(category)}
          />
        </StyledView>
      ))}
    </>
  );
};

const StyledView = styled.View`
  margin-bottom: 10px;
  min-height: 200px;
`;

export default HomeTasks;
