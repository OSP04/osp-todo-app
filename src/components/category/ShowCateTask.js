import React, { useState } from "react";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { storeData } from "../../db";
import { images } from "../../images";
import { theme } from "../../theme";
import IconButton from "../common/IconButton";

const ShowCateTask = ({ item, doRefresh }) => {
  const width = Dimensions.get("window").width;

  const [tasks, setTasks] = useState({});
  const _loadTasks = async () => {
    const loadedTasks = await AsyncStorage.getItem("tasks");
    setTasks(JSON.parse(loadedTasks || "{}"));
  };

  const [categories, setCategories] = useState([]);
  const _loadCategories = async () => {
    const loadedCategories = await AsyncStorage.getItem("categories");
    setCategories(JSON.parse(loadedCategories || "{}"));
  };

  const _saveTasks = async tasks => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      await AsyncStorage.setItem("categories", JSON.stringify(categories));
      setTasks(tasks);
    }
    catch (e) {
      console.error(e);
    }
  };

  const _saveCategory = async categories => {
    try {
      await AsyncStorage.setItem("categories", JSON.stringify(categories));
      setTasks(tasks);
    }
    catch (e) {
      console.error(e);
    }
  };

  const toggleItem = () => {
    const currentTasks = Object.assign({}, tasks);
    const currentCate = Object.assign({}, categories);
    item.complete = !item.complete;
    _saveTasks(currentTasks);
    _saveCategory(currentCate);
    doRefresh();
  };

  const returnIcon = (item) => {
    return item.complete ? images.complete : images.uncomplete;
  };

  return (
    <StyledView>
      {item.id != null && item.count < 5 && (
        <TaskView width={width}>
          <LeftView>
            <IconButton type={returnIcon(item)} onPressOut={toggleItem} />
            <TaskText
              style={{
                textDecorationLine: item.complete ? "line-through" : "none",
              }}
            >
              {item.text}
            </TaskText>
          </LeftView>
          <RightView>
            {item.due && <DueDate>{new Date(item.due).toLocaleDateString()}</DueDate>}
          </RightView>
        </TaskView>
      )}
    </StyledView>
  );
};

const StyledView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 10px;
`;

const LeftView = styled.View`
  flex-direction: row;
  padding-top: 2px;
  align-items: flex-end;
`;

const RightView = styled.View`
  flex-direction: row;
  padding-top: 2px;
  padding-right: 24px;
`;

const DueDate = styled.Text`
  font-size: 18px;
  color: ${theme.light};
`;

const TaskView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskText = styled.Text`
  font-size: 18px;
  padding: 2px;
  color: ${theme.primary};
`;

export default ShowCateTask;
