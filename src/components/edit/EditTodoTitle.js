import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { theme } from "../../theme";
import EditPicture from "./EditPicture";
import { addTodo, removeTodo, updateTodo } from "../../editTasksFunc";

const EditTodoTitle = ({ selectedTask }) => {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (selectedTask.title !== null || selectedTask.title !== "") {
      setText(selectedTask.title);
      setEdit(true);
    }
  }, []);

  const selectedId = selectedTask.id;
  const [todo, setTodo] = useState(selectedTask);

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
            onEndEditing={() => {
              setTodo({ ...todo, title: text });
              // updateTodo(todo, selectedId);
            }}
          />
        ) : (
          <Text style={styles.title}>{text}</Text>
        )}
      </Pressable>
      <EditPicture selectedTask={selectedTask}></EditPicture>
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
