import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { theme } from "../theme";
import IconButton from "./IconButton";

const Footer = ({ navigation, type, screens }) => {
  return (
    <StyledView>
      <IconButton
        type={type}
        onPressOut={() => screens[0] && navigation.navigate(screens[0])}
      />
      <SelectButton>
        <Text>Select</Text>
      </SelectButton>
    </StyledView>
  );
};

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  position: absolute;
  bottom: 0;
  background-color: ${theme.background};
`;

const SelectButton = styled.Pressable`
  border: 1px solid ${theme.primary};
  border-radius: 12px;
  padding: 5px 8px 5px 8px;
  color: ${theme.text};
`;

export default Footer;
