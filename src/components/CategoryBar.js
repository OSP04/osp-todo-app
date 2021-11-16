import React, { useState } from "react";

import styled from "styled-components/native";
import { theme } from "../theme";
import { images } from "../images";
import IconButton from "./IconButton";

const CategoryBar = ({ onPressOut, title }) => {
  return (
    <StyledView>
      <Category>
        <Title>{title}</Title>
        <IconButton onPressOut={onPressOut} type={images.add} />
      </Category>
      <Dropdown>Dropdown</Dropdown>
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
  font-size: 20px;
  background-color: ${theme.primary};
  border-radius: 12px;
  color: white;
`;

const Dropdown = styled.Text``;

export default CategoryBar;
