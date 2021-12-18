import React, { useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import { images } from "../../images";
import { theme } from "../../theme";
import { storeData } from "../../db";
import IconButton from "./IconButton";

const Footer = ({
  navigation,
  type,
  screens,
  isSelecting,
  setIsSelecting,
  setTasks,
  tasks,
  setRefresh,
  categories,
  setCategories,
  where,
}) => {
  const [all, setAll] = useState(false);

  const pressSelectButton = () => {
    try {
      setIsSelecting((current) => !current);
      // reset tasks
      tasks.map((item) => (item.selected = false));
      // reset tasks of categories
      for (let i = 0; i < categories.length; i++) {
        categories[i].tasks.map((item) => (item.selected = false));
      }
      setAll(false);
    } catch (error) {
      console.log(error);
    }
  };

  const selectAll = () => {
    try {
      setAll((current) => !current);
      tasks.map((item) => (item.selected = all ? false : true));
      setRefresh((current) => !current);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTasks = () => {
    let _categories = categories;
    let _tasks = [];

    if (where === "all") {
      // Delete tasks
      const selectedTasks = tasks.filter((item) => item.selected === true);
      const unSelectedTasks = tasks.filter((item) => item.selected === false);
      setTasks(unSelectedTasks);
      storeData("tasks", unSelectedTasks);

      // Delete tasks in categories following all tasks
      for (const task of selectedTasks) {
        const { id } = task;
        for (let i = 0; i < _categories.length; i++) {
          const index = _categories[i].tasks.findIndex(
            (item) => item.id === id
          );
          if (index >= 0) {
            _categories[i].tasks.splice(index, 1);
            break;
          }
        }
      }
    } else {
      let unSelectedTasks;
      // Set selected tasks
      for (let i = 0; i < _categories.length; i++) {
        unSelectedTasks = _categories[i].tasks.filter(
          (item) => item.selected === false
        );
        // Delete tasks of all tasks
        _tasks.push(...unSelectedTasks);
        // Delete tasks of categories
        _categories[i].tasks = unSelectedTasks;
      }
      setTasks(_tasks);
      storeData("tasks", _tasks);
    }
    setCategories(_categories);
    storeData("categories", _categories);
    setIsSelecting(false);
    setAll(false);
    setRefresh((current) => !current);
  };

  return (
    <StyledView>
      {!isSelecting ? (
        <IconButton
          type={type}
          onPressOut={() => screens[0] && navigation.navigate(screens[0])}
        />
      ) : where === "all" ? (
        <AllButton all={all} onPress={selectAll} isSelecting={isSelecting}>
          <AllText all={all} isSelecting={isSelecting}>
            All
          </AllText>
        </AllButton>
      ) : (
        <View />
      )}

      <RightButtons>
        {isSelecting && (
          <IconButton type={images.remove} onPressOut={deleteTasks} />
        )}
        <SelectButton isSelecting={isSelecting} onPress={pressSelectButton}>
          <SelectText isSelecting={isSelecting}>
            {!isSelecting ? "Select" : "Cancel"}
          </SelectText>
        </SelectButton>
      </RightButtons>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  padding-top: 0;
  background-color: ${theme.background};
`;

const RightButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Button = styled.Pressable`
  border: 1px solid ${theme.primary};
  border-radius: 12px;
  width: 60px;
  padding-vertical: 5px;
  align-items: center;
`;

const AllButton = styled(Button)`
  ${(props) => props.all && `background-color: ${theme.primary}`};
`;

const SelectButton = styled(AllButton)`
  margin-left: 15px;
  border: ${(props) => (props.isSelecting ? theme.light : theme.text)};
`;

const AllText = styled.Text`
  color: ${(props) => (props.all ? "white" : theme.text)};
`;

const SelectText = styled.Text`
  color: ${(props) => (props.isSelecting ? theme.light : theme.text)};
`;

export default Footer;
