import React, { useState } from "react";
import { StyleSheet, View, Alert, Pressable, Text } from "react-native";
import BackButton from "../components/BackButton";
import { theme } from "../theme";
import Background from "../components/Background";
import TopHeader from "../components/TopHeader";
import EditMemo from "../components/EditMemo";
import EditDueDate from "../components/EditDueDate";
import EditRepeat from "../components/EditRepeat";
import EditLocation from "../components/EditLocation";
import EditTodoTitle from "../components/EditTodoTitle";
import EditCategory from "../components/EditCategory";

const EditScreen = ({ navigation }) => {
  const onDeletePressed = () => {
    Alert.alert("Delete", "Do you really want to delete this todo?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Home") },
      { cancelable: true },
    ]);
  };

  const onConfirmPressed = () => {
    return navigation.navigate("Home");
  };

  return (
    <Background type="main">
      <TopHeader>
        <BackButton onPressOut={() => navigation.goBack()} />
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={onDeletePressed}>
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
          <Pressable
            style={{ ...styles.button, backgroundColor: theme.colors.primary }}
            onPress={onConfirmPressed}
          >
            <Text style={{ ...styles.buttonText, color: "white" }}>
              Confirm
            </Text>
          </Pressable>
        </View>
      </TopHeader>

      <View style={styles.list}>
        <EditTodoTitle></EditTodoTitle>
        <EditDueDate></EditDueDate>
        <EditRepeat></EditRepeat>
        <EditCategory></EditCategory>
        <EditLocation></EditLocation>
        <EditMemo></EditMemo>
      </View>
    </Background>
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
