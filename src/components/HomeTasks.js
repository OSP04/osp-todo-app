import React, { useState } from "react";

import styled from "styled-components/native";

import { theme } from "../theme";
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
    category.isAdding = false;
    doRefresh();
    setNewTask("");
  };

  const swap = (x, y) => {
    const temp = x;
    x = y;
    y = temp;
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
      // sort tasks by due date (not work yet)

      // const notDue = _tasks.filter((task) => task.due === null);
      // const dueTasks = _tasks.filter((task) => task.due !== null);
      // let dueDates = [];

      // for (let i = 0; i < dueTasks.length; i++) {
      //   dueDates[i] = new Date(dueTasks[i].due);
      // }

      // for (let i = 0; i < dueTasks.length - 1; i++) {
      //   const key = dueDates[i].getDate();
      //   if (key > dueDates[i + 1].getDate()) {
      //     swap(dueDates[i], dueDates[i + 1]);
      //     swap(dueTasks[i], dueTasks[i + 1]);
      //   }
      // }

      // for (let i = 0; i < dueTasks.length - 1; i++) {
      //   const key = dueDates[i].getMonth();
      //   if (key > dueDates[i + 1].getMonth()) {
      //     swap(dueDates[i], dueDates[i + 1]);
      //     swap(dueTasks[i], dueTasks[i + 1]);
      //   }
      // }
      // for (let i = 0; i < dueTasks.length - 1; i++) {
      //   const key = dueDates[i].getFullYear();
      //   if (key > dueDates[i + 1].getFullYear()) {
      //     swap(dueDates[i], dueDates[i + 1]);
      //     swap(dueTasks[i], dueTasks[i + 1]);
      //   }
      // }
      // return dueTasks.concat(notDue);

      return _tasks;
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
            // console.log(item.date.toDateString(), selectedDate.toDateString());
            // console.log(
            //   item.date.toDateString() === selectedDate.toDateString()
            // );
            return (
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
