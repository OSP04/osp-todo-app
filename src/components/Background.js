import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { theme } from "../theme";

export default function Background({ type, children }) {
  return (
    <KeyboardAvoidingView
      style={type === "pre" ? styles.pre : styles.main}
      behavior="padding"
    >
      {children}
    </KeyboardAvoidingView>
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
  },
  main: {
    flex: 1,
    padding: 10,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
});
