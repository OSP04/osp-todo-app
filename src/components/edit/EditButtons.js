import { theme } from "../../theme";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Alert, Pressable, Text } from "react-native";
import EditTaskContext from "../../context/EditTask";
import {
  addTodo,
  removeTodo,
  updateTodo,
  updateCategories,
} from "../../editTasksFunc";
import { storeData, getData } from "../../db";

const EditButtons = ({ selectedTask, goHome }) => {
  const {
    editingText,
    editingImage,
    editingDate,
    editingDue,
    editingLocation,
    editingMemo,
    editingCategory,
    editingId,
    isAddPressed,
  } = useContext(EditTaskContext);

  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const taskObjs = await getData("tasks");
      setTasks(taskObjs);
      const categoryObjs = await getData("categories");
      setCategories(categoryObjs);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onDeletePressed = () => {
    Alert.alert(
      "Delete",
      "Do you really want to delete this todo?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            removeTodo(tasks, editingId);
            goHome();
          },
        },
      ],
      { cancelable: true }
    );
  };

  const onConfirmPressed = () => {
    if (editingText === "") {
      Alert.alert(
        "Error",
        "No title entered.\nPlease enter the title of Todo.",
        [
          {
            text: "OK",
            onPress: () => null,
          },
        ],
        { cancelable: false }
      );
    } else {
      const updatedtask = {
        ...selectedTask,
        text: editingText,
        image: editingImage,
        date: editingDate,
        due: editingDue,
        location: editingLocation,
        memo: editingMemo,
      };
      if (isAddPressed) {
        addTodo(tasks, updatedtask);
      } else {
        updateTodo(tasks, updatedtask, editingId);
      }
      updateCategories(
        categories,
        editingCategory,
        editingCategory.tasks,
        updatedtask,
        editingCategory.id,
        isAddPressed
      );
      goHome();
    }
  };
  return (
    <View style={styles.row}>
      <Pressable style={styles.button} onPress={onDeletePressed}>
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.button,
          backgroundColor: theme.colors.primary,
        }}
        onPress={onConfirmPressed}
      >
        <Text style={{ ...styles.buttonText, color: "white" }}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    padding: 7,
    borderRadius: 50,
    width: 80,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default EditButtons;
