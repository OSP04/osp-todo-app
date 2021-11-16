import React, { useState } from "react";

import styled from "styled-components/native";

import { theme } from "../theme";
import HomeTaskItem from "./HomeTaskItem";
import CategoryBar from "../components/CategoryBar";
import Input from "./Input";

const HomeTasks = ({ tasks, setTasks, categories, setCategories }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState("");

  const onPressOut = () => {
    setIsAdding(true);
  };

  const addTask = (category) => {
    setNewTask("");
    const ID = Date.now().toString();
    const newTaskObj = {
      id: ID,
      text: newTask,
      date: null,
      due: null,
      category,
      image: null,
      complete: false,
      created: Date.now(),
    };
    setTasks([...tasks, newTaskObj]);
  };

  return (
    <>
      {categories.map((category) => (
        <StyledView>
          <CategoryBar
            key={category.id}
            onPressOut={onPressOut}
            title={category.title}
          />
          {category.tasks.map((item) => (
            <HomeTaskItem key={item.id} item={item} />
          ))}
        </StyledView>
      ))}
      <Input
        isAdding={isAdding}
        setIsAdding={setIsAdding}
        onSubmitEditing={addTask}
        onChangeText={setNewTask}
      />
    </>
  );
};

const StyledView = styled.View`
  margin-bottom: 10px;
`;

export default HomeTasks;
