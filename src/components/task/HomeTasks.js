import React, { useState, useRef } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
} from "react-native-draggable-flatlist";

import TaskItem from "./TaskItem";
import CategoryBar from "../category/CategoryBar";
import { storeData } from "../../db";

const HomeTasks = ({
  navigation,
  tasks,
  setTasks,
  categories,
  selectedDate,
  setSelectedCategory,
}) => {
  const ref = useRef(null);
  const [refresh, setRefresh] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [isSelecting, setIsSelecting] = useState(false);

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

  const dragAndSave = (data, category) => {
    const sorting = category.sorting;

    if (sorting === "added") {
      category.tasks = data;
    } else if (sorting === "due") {
      console.log("Prevent");
    } else {
      let filteredTasks = category.tasks; // Tasks not included in data
      for (let i = 0; i < data.length; i++) {
        filteredTasks = filteredTasks.filter((item) => item.id !== data[i].id);
      }
      category.tasks = [...data, ...filteredTasks];
    }
    setRefresh((current) => !current);
  };

  const renderItem = ({ item, drag }) => {
    return (
      <ScaleDecorator>
        <OpacityDecorator activeOpacity={1}>
          <ShadowDecorator>
            {compareDate(new Date(item.date), new Date(selectedDate)) && (
              <TaskItem
                drag={drag}
                item={item}
                sorting={null}
                isSelecting={isSelecting}
                setSelectedCategory={setSelectedCategory}
              />
            )}
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  };

  return categories.map((category) => (
    <StyledView key={Date.now() + category.id}>
      <DraggableFlatList
        ListHeaderComponent={
          <CategoryBar
            key={category.id}
            category={category}
            title={category.title}
            setRefresh={setRefresh}
            navigation={navigation}
          />
        }
        ref={ref}
        data={sortTasks(category)}
        onDragEnd={({ data }) => {
          dragAndSave(data, category);
        }}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </StyledView>
  ));
};

const StyledView = styled.View`
  width: 98%;
  flex: 1;
  margin-bottom: 5%;
  min-height: 200px;
`;

export default HomeTasks;
