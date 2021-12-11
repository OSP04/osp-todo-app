import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { theme } from "../../theme";

export default function Background({ type, children }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={type === "pre" ? styles.pre : styles.main}>
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  pre: {
    flex: 1,
    padding: 30,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  main: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
    alignSelf: "center",
    backgroundColor: theme.background,
  },
});
