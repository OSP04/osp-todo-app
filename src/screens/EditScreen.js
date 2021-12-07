import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Pressable, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackButton from "../components/common/BackButton";
import { theme } from "../theme";
import Background from "../components/common/Background";
import TopHeader from "../components/common/TopHeader";
import EditMemo from "../components/edit/EditMemo";
import EditStartDate from "../components/edit/EditStartDate";
import EditDueDate from "../components/edit/EditDueDate";
import EditLocation from "../components/edit/EditLocation";
import EditTodoTitle from "../components/edit/EditTodoTitle";
import EditCategory from "../components/edit/EditCategory";
import {
  addTodo,
  removeTodo,
  updateTodo,
  updateCategories,
} from "../editTasksFunc";
import { storeData, getData } from "../db";
import EditTaskContext from "../context/EditTask";

const EditScreen = ({ route, navigation }) => {
  const { selectedTask, category, isAddPressed } = route.params;
  const selectedId = selectedTask.id;

  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [updatedTodo, setUpdatedTodo] = useState(selectedTask);
  const [updatedCategory, setUpdatedCategory] = useState(category);

  useEffect(async () => {
    try {
      const taskObjs = await getData("tasks");
      setTasks(taskObjs);
      const categoryObjs = await getData("categories");
      setCategories(categoryObjs);
      console.log(taskObjs);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onDeletePressed = () => {
    Alert.alert("Delete", "Do you really want to delete this todo?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          removeTodo(tasks, selectedId);
          navigation.navigate("Home");
        },
      },
      { cancelable: true },
    ]);
  };

  const onConfirmPressed = () => {
    if (isAddPressed) {
      addTodo(tasks, selectedTask);
    } else {
      updateTodo(tasks, selectedTask, selectedId);
    }
    updateCategories(categories, category, selectedTask);
    navigation.navigate("Home");
  };

  return (
    <EditTaskContext.Provider
      value={{
        selectedTask: selectedTask,
        isAddPressed: isAddPressed,
        selectedId: selectedId,
        selectedCategory: category,
        updateTodo: setUpdatedTodo,
      }}
    >
      <Background type="main">
        <TopHeader>
          <BackButton onPressOut={() => navigation.goBack()} />
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
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Confirm
              </Text>
            </Pressable>
          </View>
        </TopHeader>

        <View style={styles.list}>
          <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
            <EditTodoTitle />
            <EditStartDate />
            <EditDueDate />
            <EditCategory />
            <EditLocation />
            <EditMemo selectedTask={selectedTask} />
          </KeyboardAwareScrollView>
        </View>
      </Background>
    </EditTaskContext.Provider>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  link: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    padding: 12,
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

export default EditScreen;
