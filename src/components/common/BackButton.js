import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const BackButton = ({ type, onPressOut }) => {
  return (
    <TouchableOpacity
      onPressOut={onPressOut}
      style={type === "pre" ? styles.pre : styles.main}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/baseline_arrow_back_black_24.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pre: {
    position: "absolute",
    top: 20 + getStatusBarHeight(),
    left: 25,
  },
  main: {},
  image: {
    width: 24,
    height: 24,
  },
});

BackButton.propTypes = {
  onPressOut: PropTypes.func,
};

export default BackButton;
