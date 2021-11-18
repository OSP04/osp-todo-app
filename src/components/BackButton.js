import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack}>
      <Image
        source={require("../../assets/baseline_arrow_back_black_24.png")}
      />
    </TouchableOpacity>
  );
}
