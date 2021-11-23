import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../theme";

const EditMemo = ({}) => {
  const [memo, setMemo] = useState("");

  return (
    <View style={styles.listItem}>
      <Entypo name="text" style={styles.icon} size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Memo"
        value={memo}
        onChangeText={(memo) => setMemo(memo)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
});

export default EditMemo;
