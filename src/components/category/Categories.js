import React, { useState } from "react";
import { Dimensions, View } from "react-native";

import styled from "styled-components/native";
import { theme } from "../../theme";
import DropButton from "../common/DropButton";
import ShowCateTask from "./ShowCateTask";

const Categories = ({ item, doRefresh, navigation }) => {
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

  return (
    <Wrapper>
      <StyledView width={width}>
        <StyledText style={{ color: item.color }}>{item.title}</StyledText>
        <DropButton
          setSorting={setSorting}
          category={item}
          doRefresh={doRefresh}
        />
      </StyledView>
      <Underline style={{ backgroundColor: item.color }} />
      <View>
        {item.tasks[0] != null ? (
          sortTasks(item).map((item) => (
            <ShowCateTask key={item.id} item={item} doRefresh={doRefresh} />
          ))
        ) : (
          <View style={{ height: 50 }} />
        )}
      </View>
      <MoreView width={width}>
        <MoreButton
          onPress={() => {
            navigation.navigate("OneCategory", {
              key: item.id,
              item: item,
              sortTasks: sortTasks,
              setSorting: setSorting,
              doRefresh: doRefresh,
            })
          }}
        >
          + See more tasks...
        </MoreButton>
      </MoreView>
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
  margin-bottom: 6px;
`;

const MoreView = styled.View`
  align-items: flex-end;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const MoreButton = styled.Text`
  color: ${theme.light};
`;

export default Categories;
