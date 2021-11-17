import React from "react";
import { TextInput } from "react-native";

import styled from "styled-components";
import { theme } from "../theme";

const Input = ({ value, onChangeText, onSubmitEditing, onBlur }) => {
    return (
        <StyledInput
            placeholder="Enter text..."
            placeholderTextColor={theme.light}
            maxLength={20}
            value={value} onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}>
        </StyledInput>
    );
};

const StyledInput = styled.styled.TextInput`
border-width:1px;
padding: 5px;
`;

export default Input;