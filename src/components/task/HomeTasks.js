import React, { useState, useRef } from "react";
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
  categories,
  setCategories,
  setTasks,
  selectedDate,
  isSelecting,
  tasks,
  modalVisible,
  setModalVisible,
  setImagePath,
}) => {
  const ref = useRef(null);
  const [refresh, setRefresh] = useState(true);

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
        dueDates[i] = new Date(dueTasks[i].due).getTime();
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

  const storeCategory = (category) => {
    const index = categories.findIndex((item) => item.id === category.id);
    categories.splice(index, 1, category);
    storeData("categories", categories);
  };

  const dragAndSave = (data, category) => {
    const sorting = category.sorting;

    if (sorting === "added") {
      category.tasks = data;
      storeCategory(category);
    } else if (sorting === "due") {
      console.log("Prevented");
    } else {
      let filteredTasks = category.tasks; // Tasks not included in data
      for (let i = 0; i < data.length; i++) {
        filteredTasks = filteredTasks.filter((item) => item.id !== data[i].id);
      }
      category.tasks = [...data, ...filteredTasks];
      storeCategory(category);
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
                tasks={tasks}
                categories={categories}
                setCategories={setCategories}
                setTasks={setTasks}
                sorting={null}
                isSelecting={isSelecting}
                navigation={navigation}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setImagePath={setImagePath}
              />
            )}
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  };

  return categories.map((category) => (
    <StyledView key={Date.now() + category.id}>
      <CategoryBar
        key={category.id}
        category={category}
        title={category.title}
        setRefresh={setRefresh}
        navigation={navigation}
        selectedDate={selectedDate}
      />
      {tasks.length !== 0 && (
        <DraggableFlatList
          ref={ref}
          data={sortTasks(category)}
          onDragEnd={({ data }) => {
            dragAndSave(data, category);
          }}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </StyledView>
  ));
};

const StyledView = styled.View`
  flex: 1;
  margin-bottom: 5%;
  min-height: 200px;
`;

export default HomeTasks;
