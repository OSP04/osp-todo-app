import React from "react";

import styled from "styled-components/native";

import { images } from "../images";
import IconButton from "./IconButton";

const Footer = ({ navigation }) => {
  return (
    <StyledView>
      <IconButton
        type={images.comment}
        onPressOut={() => navigation.navigate("Comments")}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
  background-color: tomato;
  position: absolute;
  bottom: 0;
`;

export default Footer;
