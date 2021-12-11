import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { theme } from "../../theme";
import { images } from "../../images";
import IconButton from "../common/IconButton";
import Dropdown from "../common/Dropdown";

const CategoryBar = ({ selectedDate, category, setRefresh, navigation }) => {
  const moveToEditScreen = () => {
    navigation.navigate("EditScreen", {
      selectedTask: {
        id: Math.random().toString(36),
        title: "",
        date: selectedDate,
        due: null,
        category: category.title,
        image: "",
        location: {
          text: "",
          region: {},
          locationData: {
            mainText: "",
            address: "",
          },
        },
        memo: "",
        completed: false,
        selected: false,
        created: Date.now(),
      },
      category,
      selectedDate,
      isAddPressed: true,
    });
  };

  return (
    <StyledView>
      <Category>
        <Title category={category}>{category.title}</Title>
        <IconButton onPressOut={moveToEditScreen} type={images.add} />
      </Category>
      <Dropdown category={category} setRefresh={setRefresh} />
    </StyledView>
  );
};

const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  elevation: 1;
`;

const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
  padding: 5px 10px 5px 10px;
  margin-right: 5px;
  min-width: 80px;
  font-size: 15px;
  background-color: ${(props) => props.category.color};
  border-radius: 10px;
  color: ${theme.text};
  font-weight: bold;
`;

export default CategoryBar;
