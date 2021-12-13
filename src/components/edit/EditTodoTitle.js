import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { theme } from "../../theme";
import EditPicture from "./EditPicture";
import { addTodo, removeTodo, updateTodo } from "../../editTasksFunc";
import EditTaskContext from "../../context/EditTask";

const EditTodoTitle = () => {
  const { editingTask, updateText } = useContext(EditTaskContext);

  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (editingTask.text !== null || editingTask.text !== "") {
      setText(editingTask.text);
      setEdit(true);
    }
  }, []);

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
              updateText(text);
            }}
            onEndEditing={() => {
              updateText(text);
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
