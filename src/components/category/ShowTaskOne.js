import React from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { images } from "../../images";
import { theme } from "../../theme";
import IconButton from "../common/IconButton";
import { storeData } from "../../db";
import { View } from "react-native";


const ShowTaskOne = ({ item, doRefresh, tasks, setTasks, categories, setCategories, navigation }) => {

    const width = Dimensions.get('window').width;

    const toggleItem = () => {
        item.complete = !item.complete;
    
        const _tasks = tasks;
        const _categories = categories;
    
        const index = _tasks.findIndex((element) => element.id === item.id);
        _tasks.splice(index, 1, item);
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
            {item.id != null && <TaskView style={{width: width, height: 38}}>
                <LeftView>
                    <IconButton type={returnIcon(item)} onPressOut={toggleItem} />
                    <View style={{marginLeft: 4}}>
                    <TaskText style={
                    { textDecorationLine: (item.complete ? "line-through" : "none"),
                    width: width - 100 }
                    }>{item.text}</TaskText>
                    {item.due && <DueDate>{new Date(item.due).toLocaleDateString()}</DueDate>}
                    </View>
                </LeftView>
                <RightView>
                <IconButton
            type={images.edit}
            onPressOut={() =>
              navigation.navigate("EditScreen", {
                selectedTask: item, // ????????? task
                category: findCategory(item), // ????????? task??? ?????? ???????????? ??????
                isAddPressed: false, // ???????????? ???????????? ??????, ?????? ????????? true ???????????? false
              })
            }
          />
                </RightView>
            </TaskView>}
        </StyledView >
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
align-items: center;
`;

const RightView = styled.View`
flex-direction: row;
padding-top:2px;
padding-right: 24px;
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

export default ShowTaskOne;