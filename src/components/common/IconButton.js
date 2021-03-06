import React from "react";
import { Pressable } from "react-native";
import PropTypes from "prop-types";

import styled from "styled-components/native";

const IconButton = ({ onPressOut, type }) => {
  return (
    <Pressable onPressOut={onPressOut}>
      <Icon source={type} />
    </Pressable>
  );
};

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

IconButton.propTypes = {
  onPressOut: PropTypes.func,
};

export default IconButton;
