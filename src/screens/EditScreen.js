import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Pressable, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { theme } from "../theme";
import BackButton from "../components/common/BackButton";
import Background from "../components/common/Background";
import TopHeader from "../components/common/TopHeader";
import EditButtons from "../components/edit/EditButtons";
import EditMemo from "../components/edit/EditMemo";
import EditStartDate from "../components/edit/EditStartDate";
import EditDueDate from "../components/edit/EditDueDate";
import EditLocation from "../components/edit/EditLocation";
import EditTodoTitle from "../components/edit/EditTodoTitle";
import ShowCategory from "../components/edit/ShowCategory";
import { db, getData, storeData } from "../db";
import EditTaskContext from "../context/EditTask";

const EditScreen = ({ route, navigation }) => {
  const { selectedTask, category, isAddPressed } = route.params;
  const selectedId = selectedTask.id;

  const [categoryArr, setCategoryArr] = useState([]);

  const [editingTask, setEditingTask] = useState(selectedTask);
  const [editingCategory, setEditingCategory] = useState(category);
  const [editingTitle, setEditingTitle] = useState(selectedTask.title);
  const [editingImage, setEditingImage] = useState(selectedTask.image);
  const [editingDate, setEditingDate] = useState(selectedTask.date);
  const [editingDue, setEditingDue] = useState(selectedTask.due);
  const [editingLocation, setEditingLocation] = useState(selectedTask.location);
  const [editingMemo, setEditingMemo] = useState(selectedTask.memo);

  useEffect(async () => {
    try {
      const categoryObjs = await getData("categories");
      setCategoryArr(categoryObjs);
      const taskObjs = await getData("tasks");
      console.log(taskObjs);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onBackPressed = () => {
    Alert.alert(
      "Discard Changes",
      "You have unsaved changes. Are you sure to discard them and leave the screen?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
        { cancelable: true },
      ]
    );
  };

  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <EditTaskContext.Provider
      value={{
        editingTask: editingTask,
        editingTitle: editingTitle,
        editingImage: editingImage,
        editingDate: editingDate,
        editingDue: editingDue,
        editingLocation: editingLocation,
        editingMemo: editingMemo,
        isAddPressed: isAddPressed,
        editingId: selectedId,
        editingCategory: editingCategory,
        updateTask: setEditingTask,
        updateTitle: setEditingTitle,
        updateImage: setEditingImage,
        updateDate: setEditingDate,
        updateDue: setEditingDue,
        updateLocation: setEditingLocation,
        updateMemo: setEditingMemo,
      }}
    >
      <Background type="main">
        <TopHeader>
          <BackButton selectedTask={selectedTask} onPressOut={onBackPressed} />
          <EditButtons goHome={goHome} />
        </TopHeader>
        <View style={styles.list}>
          <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
            <EditTodoTitle />
            <ShowCategory />
            <EditStartDate />
            <EditDueDate />
            <EditLocation />
            <EditMemo />
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
  icon: {
    alignItems: "center",
    padding: 12,
  },
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

export default EditScreen;
