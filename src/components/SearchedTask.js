import styled from "styled-components/native";
import * as React from "react";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
const SearchedTask = ({ index, text, category, date, due }) => {
  return (
    <TouchableOpacity
      style={{ marginRight: 10, marginTop: 17 }}
      onPress={() => alert(text)}
      //나중에 onpress 화면이동설정
    >
      <Card>
        <Card.Content>
          <StyledView>
            <FirstElements>
              <Index>{index + 1}. </Index>
              <TaskText>{text}</TaskText>
            </FirstElements>
            <Category> {category} </Category>
            <Date>
              {date && <StartDate>{date}</StartDate>}
              {due && <DueDate>~{due}</DueDate>}
            </Date>
          </StyledView>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
export default SearchedTask;
const StyledView = styled.Text`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;
const FirstElements = styled.Text``;
const TaskText = styled.Text``;
const Date = styled.Text``;
const DueDate = styled.Text`
  font-size: 12px;
`;
const StartDate = styled.Text`
  font-size: 12px;
`;
const Category = styled.Text`
  font-size: 12px;
`;
const Index = styled.Text``;
