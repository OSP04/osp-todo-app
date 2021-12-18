import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo({ type }) {
  return type === "name" ? (
    <Image
      source={require("../../../assets/logo-name.png")}
      style={styles.logoName}
    />
  ) : (
    <Image source={require("../../../assets/logo.png")} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  logoName: {
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  image: {
    width: 140,
    height: 140,
  },
});
