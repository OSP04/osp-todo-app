import React, { useState } from "react";

import styled from "styled-components/native";
import { theme } from "../theme";
import { images } from "../images";
import IconButton from "./IconButton";
import Dropdown from "./Dropdown";

const CategoryBar = ({ onPressOut, zIndex, category, doRefresh }) => {
  return (
    <StyledView>
      <Category>
        <Title>{category.title}</Title>
        <IconButton onPressOut={onPressOut} type={images.add} />
      </Category>
      <Dropdown zIndex={zIndex} category={category} doRefresh={doRefresh} />
    </StyledView>
  );
};

const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
  background-color: ${theme.primary};
  border-radius: 10px;
  color: white;
`;

export default CategoryBar;
