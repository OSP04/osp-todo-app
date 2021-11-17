import React, { useState } from "react";

import styled from "styled-components/native";

import { theme } from "../theme";
import HomeTaskItem from "./HomeTaskItem";
import CategoryBar from "../components/CategoryBar";
import Input from "./Input";

const HomeTasks = ({ tasks, setTasks, categories, setCategories }) => {
  const [refresh, setRefresh] = useState(true);
  const [newTask, setNewTask] = useState("");

  const doRefresh = () => {
    setRefresh((current) => setRefresh(!current));
  };

  const addTask = (category) => {
    if (newTask) {
      setNewTask("");
      const ID = Date.now().toString();
      const newTaskObj = {
        id: ID,
        text: newTask,
        date: null,
        due: null,
        category: category.title,
        image: null,
        complete: false,
        created: Date.now(),
      };
      setTasks([...tasks, newTaskObj]);
      const updatedTask = category.tasks.concat(newTaskObj);
      category.tasks = updatedTask;
    }
  };

  const onBlur = (category) => {
    category.isAdding = false;
    doRefresh();
  };

  return (
    <>
      {categories.map((category) => (
        <StyledView>
          <CategoryBar
            key={category.id}
            onPressOut={() => {
              category.isAdding = true;
              doRefresh();
            }}
            title={category.title}
            zIndex={
              categories.length -
              categories.findIndex((element) => element.id === category.id)
            }
          />
          {category.tasks.map((item) => (
            <HomeTaskItem key={item.id} item={item} />
          ))}
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
`;

export default HomeTasks;
