import React from "react";
import ReactNative, {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import styled from "styled-components/native";
import { findNodeHandle } from "react-native";

import { theme } from "../theme";
import { images } from "../images";
import IconButton from "./IconButton";

const Input = ({
  newTask,
  isAdding,
  onSubmitEditing,
  onChangeText,
  onBlur,
}) => {
  return (
    isAdding && (
      <StyledView>
        <IconButton type={images.uncomplete} />
        <StyledInput
          value={newTask}
          placeholder="Add a task"
          autoFocus={true}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={false}
          onChangeText={onChangeText}
        />
      </StyledView>
    )
  );
};

const StyledInput = styled.TextInput`
  margin-left: 5px;
`;

const StyledView = styled.View`
  flex-direction: row;
  padding: 5px;
  color: ${theme.secondary};
`;

export default Input;
