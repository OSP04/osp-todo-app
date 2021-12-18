import React from "react";
import { Dimensions, View } from "react-native";
import styled from "styled-components/native";
import { storeData } from "../../db";
import { images } from "../../images";
import { theme } from "../../theme";
import IconButton from "../common/IconButton";

const ShowCateTask = ({ item, doRefresh, tasks, setTasks, categories, setCategories, navigation }) => {
  const width = Dimensions.get("window").width;

  const toggleItem = () => {
    item.complete = !item.complete;
    const _tasks = tasks;
    const _categories = categories;
    
    for(let i=0; i<_tasks.length; i++) {
      if(_tasks[i].id === item.id) {
        const index = i;
        _tasks.splice(index, 1, item);
        break;
      }
    }
    setTasks(_tasks);
    storeData("tasks", _tasks);

    for(let i=0; i<_categories.length; i++) {
      for(let j=0; j<_categories[i].tasks.length; j++) {
        if(_categories[i].tasks[j].id === item.id) {   
          const index = j;
          _categories[i].tasks.splice(index, 1, item);
          break;
        }
      }
    }
    setCategories(_categories);
    storeData("categories", _categories);
    doRefresh();
  };

  const returnIcon = (item) => {
    return item.complete ? images.complete : images.uncomplete;
  };

  const findCategory = (item) => {
    const categoryTitle = item.category;
    const category = categories.find(
      (element) => element.title === categoryTitle
    );
    return category;
  };

  return (
    <StyledView>
      {item.id != null && (
        <TaskView style={{height: 38, width: width, backgroundColor: theme.background}}>
          <LeftView>
            <IconButton type={returnIcon(item)} onPressOut={toggleItem} />
            <View style={{marginLeft: 4, backgroundColor: theme.background}}>
            <TaskText
              style={{
                textDecorationLine: item.complete ? "line-through" : "none",
                width: width - 100,
              }}
            >
              {item.text}
            </TaskText>
            {item.due && <DueDate>{new Date(item.due).toLocaleDateString()}</DueDate>}
            </View>
          </LeftView>
          <RightView>
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
`;

const LeftView = styled.View`
  flex-direction: row;
  padding-top: 2px;
  align-items: center;
  margin-left: 15px;
`;

const RightView = styled.View`
  flex-direction: row;
  padding-top: 2px;
  margin-right: 15px;
`;

const DueDate = styled.Text`
  font-size: 12px;
  color: ${theme.light};
`;

const TaskView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskText = styled.Text`
  font-size: 16px;
`;

export default ShowCateTask;
