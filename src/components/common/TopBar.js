import React from "react";
import styled from "styled-components/native";

import IconButton from "../common/IconButton";

const TopBar = ({ types, screens, title, navigation }) => {
  return (
    <StyledView>
      <IconButton
        type={types[0]}
        onPressOut={() => screens[0] && navigation.navigate(screens[0])}
      />
      <Title>{title}</Title>
      <IconButton
        type={types[1]}
        onPressOut={() => screens[1] && navigation.navigate(screens[1])}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
  padding: 5%;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5%;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export default TopBar;
