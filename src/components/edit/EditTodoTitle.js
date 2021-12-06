import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { theme } from "../../theme";
import EditPicture from "./EditPicture";

const EditTodoTitle = ({}) => {
  const [text, setText] = useState("Title");
  const [edit, setEdit] = useState(false);

  return (
    <View style={styles.listItem}>
      <Pressable onPress={() => setEdit(true)}>
        {edit ? (
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={text}
            onChangeText={(text) => {
              setText(text);
            }}
          />
        ) : (
          <Text style={styles.title}>{text}</Text>
        )}
      </Pressable>
      <EditPicture></EditPicture>
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
    justifyContent: "space-between",
    marginTop: 5,
  },
  icon: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    color: theme.colors.primary,
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: theme.colors.surface,
    color: "#424242",
    overflow: "hidden",
    fontSize: 25,
    color: theme.colors.primary,
    fontWeight: "bold",
    justifyContent: "space-between",
  },
});

export default EditTodoTitle;
