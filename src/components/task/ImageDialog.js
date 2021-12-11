import React from "react";
import styled from "styled-components/native";
import { Modal, Image } from "react-native";
import { theme } from "../../theme";

const ImageDialog = ({ modalVisible, imagePath, setModalVisible }) => {
  return (
    <Modal visible={modalVisible}>
      <StyledView>
        <TaskImage source={{ uri: imagePath }} />
        <CloseButton
          onPressOut={() => {
            console.log(modalVisible);
            setModalVisible(false);
          }}
        >
          <ButtonText>Close</ButtonText>
        </CloseButton>
      </StyledView>
    </Modal>
  );
};

const StyledView = styled.View`
  justify-content: center;
  background-color: tomato;
  align-items: center;
`;

const CloseButton = styled.Pressable`
  background-color: ${theme.primary};
  padding-vertical: 2%;
  padding-horizontal: 5%;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const TaskImage = styled.Image`
  background-color: white;
`;

export default ImageDialog;
