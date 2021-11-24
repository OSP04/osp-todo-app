import React from "react";
import { StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function TopHeader({ children }) {
  return <View style={styles.header}>{children}</View>;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 20 + getStatusBarHeight(),
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
