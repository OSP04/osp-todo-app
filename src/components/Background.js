import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { theme } from "../theme";

export default function Background({ type, children }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={type === "pre" ? styles.pre : styles.main}
        behavior="padding"
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  pre: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  main: {
    flex: 1,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    justifyContent: "space-around",
    backgroundColor: theme.background,
  },
});
