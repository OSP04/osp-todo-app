import React, { useState } from "react";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { useOnCellActiveAnimation } from "react-native-draggable-flatlist";

import { theme } from "../../theme";
import { images } from "../../images";
import IconButton from "../common/IconButton";
import TaskImage from "./TaskImage";
import { storeData } from "../../db";

const TaskItem = ({
  item,
  categories,
  tasks,
  setCategories,
  setTasks,
  drag,
  isSelecting,
  navigation,
  setModalVisible,
  setImagePath,
}) => {
  const [isCompleted, setIsCompleted] = useState(item.complete);
  const [refresh, setRefresh] = useState(false);

  const toggleItem = () => {
    item.complete = !item.complete;
    setIsCompleted(item.complete);

    // Store completed task to tasks data
    let _tasks = tasks;
    let index = _tasks.findIndex((element) => element.id === item.id);
    _tasks.splice(index, 1, item);
    setTasks(_tasks);
    storeData("tasks", _tasks);

    // Store completed task to categories data
    const _categories = categories;
    for (let i = 0; i < _categories.length; i++) {
      index = _categories[i].tasks.findIndex(
        (element) => element.id === item.id
      );
      if (index >= 0) {
        _categories[i].tasks.splice(index, 1, item);
        break;
      }
    }
    setCategories(_categories);
    storeData("categories", _categories);
  };

  const returnIcon = () => {
    return item.complete ? images.complete : images.uncomplete;
  };

  const selectItem = () => {
    if (isSelecting) {
      item.selected = !item.selected;
      setRefresh((current) => !current);
    }
  };

  const findCategory = (item) => {
    const categoryTitle = item.category;
    const category = categories.find(
      (element) => element.title === categoryTitle
    );
    return category;
  };

  const { isActive } = useOnCellActiveAnimation();

  return (
    <Touchable
      selected={item.selected}
      isSelecting={isSelecting}
      activeOpacity={1}
      onLongPress={drag}
      isActive={isActive}
      onPress={selectItem}
    >
      <Animated.View style={styles.animatedView}>
        <LeftItems>
          <IconButton type={returnIcon(item)} onPressOut={toggleItem} />
          <StyledView>
            <TaskText completed={item.complete}>{item.text}</TaskText>
            {item.due && (
              <DueDate>{new Date(item.due).toLocaleDateString()}</DueDate>
            )}
          </StyledView>
        </LeftItems>
        <RightItems>
          {item.image !== "" && (
            <TaskImage
              path={item.image}
              setModalVisible={setModalVisible}
              setImagePath={setImagePath}
            />
          )}
          <IconButton
            type={images.edit}
            onPressOut={() =>
              navigation.navigate("EditScreen", {
                selectedTask: item, // 선택한 task
                category: findCategory(item), // 선택한 task가 속한 카테고리 객체
                isAddPressed: false, // 추가인지 편집인지 구분, 새로 추가면 true 편집이면 false
              })
            }
          />
        </RightItems>
      </Animated.View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isActive || props.selected ? theme.light : theme.background};
`;

// Prevent overflow of text --> flex: 1
const StyledView = styled.View`
  flex: 1;
  margin-left: 5px;
`;

const TaskText = styled.Text`
  text-decoration-line: ${(props) =>
    props.completed ? "line-through" : "none"};
`;

const DueDate = styled.Text`
  color: ${theme.secondary};
  font-size: 12px;
`;

const LeftItems = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const RightItems = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;

export default TaskItem;
