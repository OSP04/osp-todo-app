import React from "react";
import styled from "styled-components/native";
import { Modal } from "react-native";
import { theme } from "../../theme";

const ImageDialog = ({ modalVisible, imagePath, setModalVisible }) => {
  //   console.log(imagePath);
  return (
    <Modal transparent={true} visible={modalVisible} animationType="fade">
      <StyledView>
        <ModalView>
          <TaskImage
            source={{
              uri: imagePath,
            }}
          />
          <CloseButton
            onPressOut={() => {
              setModalVisible(false);
            }}
          >
            <ButtonText>Close</ButtonText>
          </CloseButton>
        </ModalView>
      </StyledView>
    </Modal>
  );
};

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;

const ModalView = styled.View`
  background-color: white;
  align-items: center;
  padding: 4%;
  border-radius: 10px;
`;

const CloseButton = styled.Pressable`
  width: 40%;
  background-color: ${theme.primary};
  padding-vertical: 2%;
  padding-horizontal: 5%;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const TaskImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 4%;
`;

export default ImageDialog;
