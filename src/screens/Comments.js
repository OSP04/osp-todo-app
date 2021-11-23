import React from "react";
import { Text, View } from "react-native";

import styled from "styled-components/native";

import IconButton from "../components/IconButton";
import { db } from "../db";
import { images } from "../images";
import { theme } from "../theme";

const Comments = ({ navigation }) => {
  return (
    <Wrapper>
      <Header>
        <IconButton
          type={images.back}
          onPressOut={() => navigation.navigate("Home")}
        />
        <Title>Comments</Title>
        <IconButton />
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 5%;
  background-color: ${theme.background};
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export default Comments;
