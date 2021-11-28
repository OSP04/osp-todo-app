import React from "react";

import styled from "styled-components/native";

import { images } from "../images";
import { theme } from "../theme";
import IconButton from "./IconButton";

const CommentInput = ({ newComment, onChangeText, onSubmitEditing }) => {
  return (
    <StyledView>
      <StyledInput
        value={newComment}
        multiline={true}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <IconButton type={images.send} onPressOut={onSubmitEditing} />
    </StyledView>
  );
};

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 3% 3% 3% 5%;
  border-top-width: 1px;
  border-color: ${theme.light}
  align-items: center;
`;

const StyledInput = styled.TextInput`
  font-size: 17px;
  width: 90%;
`;

export default CommentInput;
