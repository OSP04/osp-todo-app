import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { storeData } from "../../db";
import { theme } from "../../theme";
import DropButton from "../common/DropButton";
import ShowCateTask from "./ShowCateTask";

const Categories = ({ item, doRefresh, navigation, categories, setCategories, tasks, setTasks, setIsReady }) => {
  const width = Dimensions.get("window").width;
  const [sorting, setSorting] = useState("added");

  const sortTasks = (category) => {
    const sorting = category.sorting;
    const tasks = category.tasks;

    if (sorting === "added") {
      return tasks;
    } else if (sorting === "due") {
      const notDueTask = tasks.filter((task) => task.due === null);
      const dueTask = tasks.filter((task) => task.due != null);
      let dueDates = [];

      for (let i = 0; i < dueTask.length; i++) {
        dueDates[i] = dueTask[i].due;
      }
      for (let i = 0; i < dueDates.length - 1; i++) {
        let index = i;
        for (let j = i + 1; j < dueDates.length; j++) {
          if (dueDates[index] > dueDates[j]) {
            index = j;
          }
        }
        const temp = dueDates[i];
        dueDates[i] = dueDates[index];
        dueDates[index] = temp;

        temp = dueTask[i];
        dueTask[i] = dueTask[index];
        dueTask[index] = temp;
      }
      return dueTask.concat(notDueTask);
    }
  };

  const _deleteCate = () => {
    let _categories = categories;
    let _tasks = tasks;
    for(let i=0; i<_categories.length; i++) {
      if(_categories[i].id === item.id) {
        const index = i;
        _categories.splice(index, 1);
        break;
      }
    }
    for(let j=0; j<_tasks.length; j++) {
      if(_tasks[j].category === item.title) {
        const index = j;
        _tasks.splice(index, 1);
      }
    }
    setCategories(_categories);
    setTasks(_tasks);
    storeData("categories", _categories);
    storeData("tasks", _tasks);
    setIsReady(false);
    doRefresh();
  };

  return (
    <Wrapper>
      <StyledView width={width} style={{backgroundColor: theme.background}}>
        <View style={{flexDirection: "row", alignItems: "center", width: 200, justifyContent: "space-between"}}>
        <StyledText style={{ color: item.color }}
        onPress={() => {
          navigation.navigate("OneCategory", {
            key: item.id,
            item: item,
            sortTasks: sortTasks,
            setSorting: setSorting,
            doRefresh: doRefresh,
            tasks: tasks,
            setTasks: setTasks,
            categories: categories,
            setCategories: setCategories,
          })
        }}>{item.title}</StyledText>
        <TouchableOpacity onPress={() => {alert("Category deleted"), _deleteCate(item)}}>
          <Text style={{color: item.color, fontWeight: "bold", fontSize: 18}}>X</Text>
        </TouchableOpacity>
        </View>
        <DropButton
          setSorting={setSorting}
          category={item}
          doRefresh={doRefresh}
        />
      </StyledView>
      <Underline style={{ backgroundColor: item.color }} />
      <View style={{height: 6, backgroundColor: theme.background}}/>
      <View style={{height: 150, backgroundColor: theme.background}}>
        {item.tasks[0] != null ? (
          sortTasks(item).map((item) => (
            <ShowCateTask key={item.id} item={item} doRefresh={doRefresh} navigation={navigation}
            tasks={tasks} setTasks={setTasks} categories={categories} setCategories={setCategories}/>
          ))
        ) : (
          <View style={{ height: 50 }} />
        )}
      </View>
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
`;

const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;
const StyledText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const Underline = styled.View`
  width: 200px;
  height: 2px;
  margin-left: 10px;
`;

export default Categories;
