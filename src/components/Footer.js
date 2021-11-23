import React from "react";
import { Text } from "react-native";

import styled from "styled-components/native";

import { images } from "../images";
import { theme } from "../theme";
import IconButton from "./IconButton";

const Footer = ({ navigation }) => {
  return (
    <StyledView>
      <IconButton
        type={images.comment}
        onPressOut={() => navigation.navigate("Comments")}
      />
      <SelectButton>
        <Text>Select</Text>
      </SelectButton>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5%;
  position: absolute;
  bottom: 0;
`;

const SelectButton = styled.Pressable`
  border: 1px solid ${theme.primary};
  border-radius: 12px;
  padding: 5px 8px 5px 8px;
  color: ${theme.text};
`;

export default Footer;
