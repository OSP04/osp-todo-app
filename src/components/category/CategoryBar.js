import React from "react";
import styled from "styled-components/native";

import { theme } from "../../theme";
import { images } from "../../images";
import IconButton from "../common/IconButton";
import Dropdown from "../common/Dropdown";

const CategoryBar = ({ category, setRefresh, navigation }) => {
  const moveToEditScreen = () => {
    navigation.navigate("EditScreen", { selectedTask: null, category });
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

const StyledView = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  elevation: 100;
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
