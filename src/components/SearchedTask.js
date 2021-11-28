import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const SearchedTask = ({ index, text, category, date, due }) => {
  return (
    <StyledView>
      <StyledText>
        <FirstElements>
          <Index>{index}. </Index>
          <Category>{category}</Category>
        </FirstElements>
        <TaskText>{text}</TaskText>
        <Date>
          {date && <StartDate>{date}</StartDate>}
          {due && <DueDate>~{due}</DueDate>}
        </Date>
      </StyledText>
    </StyledView>
  );
};
export default SearchedTask;

const StyledView = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`;

const StyledText = styled.View`
  flex-direction: column;
  margin-left: 5px;
`;
const TaskText = styled.Text``;
const Date = styled.Text``;
const DueDate = styled.Text`
  font-size: 12px;
`;
const StartDate = styled.Text`
  font-size: 12px;
`;
const Category = styled.Text``;
const Index = styled.Text``;
const FirstElements = styled.Text`
  font-size: 12px;
`;
