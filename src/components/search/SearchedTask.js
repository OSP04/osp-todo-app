import styled from "styled-components/native";
import * as React from "react";
import { Text, View } from "react-native";
import { useState } from "react";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import DetailModal from "./DetailModal";

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
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <TouchableOpacity
      style={{ marginRight: 10, marginTop: 17 }}
      onPress={openModal}
    >
      <DetailModal
        showModal={showModal}
        setShowModal={setShowModal}
        headerText="Detail"
        onCancelPressed={() => setShowModal(false)}
        text={text}
        pickedImagePath={task.image}
        category={category}
        due={due}
        date={date}
        task={task}
      ></DetailModal>
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
