import React from "react";
import styled from "styled-components/native";

const TaskImage = ({ path, setModalVisible, setImagePath }) => {
  return (
    <Touchable
      onPress={() => {
        setModalVisible(true);
        setImagePath(path);
      }}
    >
      <StyledImage source={{ uri: path }} />
    </Touchable>
  );
};

const Touchable = styled.TouchableOpacity``;

const StyledImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

export default TaskImage;
