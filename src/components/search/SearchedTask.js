import styled from "styled-components/native";
import * as React from "react";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
const SearchedTask = ({
  task,
  index,
  text,
  category,
  categoryObj,
  date,
  due,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={{ marginBottom: 3 }}
      onPress={() =>
        navigation.navigate("EditScreen", {
          selectedTask: task,
          category: categoryObj,
          isAddPressed: true,
        })
      }
    >
      <Card>
        <Card.Title
          title={index + 1 + ". " + text}
          titleStyle={{ fontSize: 15, fontWeight: "bold" }}
        />
        <Card.Content>
          <StyledView>
            <Category>
              {category} {"  "}
            </Category>
            <Date>
              {date && <StartDate>{date}</StartDate>}
              {due && (
                <DueDate>
                  {" ~ "}
                  {due}
                </DueDate>
              )}
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
  margin-horizontal: 10px;
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
  font-size: 13px;
  font-weight: bold;
`;
const Index = styled.Text``;
