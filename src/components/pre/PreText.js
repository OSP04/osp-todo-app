import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../../theme";

export default function PreText(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 50,
    textAlign: "center",
  },
});
