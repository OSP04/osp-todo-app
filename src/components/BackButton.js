import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const BackButton = ({ onPressOut }) => {
  return (
    <TouchableOpacity onPressOut={onPressOut} style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/baseline_arrow_back_black_24.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});

BackButton.propTypes = {
  onPressOut: PropTypes.func,
};

export default BackButton;