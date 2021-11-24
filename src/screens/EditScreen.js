import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import BackButton from "../components/BackButton";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../theme";
import Background from "../components/Background";
import { getStatusBarHeight } from "react-native-status-bar-height";
import EditMemo from "../components/EditMemo";
import EditDueDate from "../components/EditDueDate";
import EditRepeat from "../components/EditRepeat";
import EditLocation from "../components/EditLocation";
import EditPicture from "../components/EditPicture";

const EditScreen = ({ navigation }) => {
  const onDeletePressed = () => {
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);

    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Actions>
            <Dialog.Title>Do you really want to delete this todo?</Dialog.Title>
            <Button
              onPress={() => {
                navigation.replace("Home");
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                navigation.replace("Home");
              }}
            >
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  };

  const onConfirmPressed = () => {
    return navigation.navigate("Home");
  };

  return (
    <Background type="main">
      <BackButton onPressOut={() => navigation.goBack()} />
      <View style={styles.topbuttons}>
        <Button mode="outlined" onPress={onDeletePressed} color={theme.primary}>
          Delete
        </Button>
        <Button
          mode="contained"
          onPress={onConfirmPressed}
          color={theme.primary}
        >
          Confirm
        </Button>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>todo.text</Text>
        <EditPicture></EditPicture>
      </View>
      <View style={styles.list}>
        <EditDueDate></EditDueDate>
        <EditMemo></EditMemo>
        <EditRepeat></EditRepeat>
        <EditLocation></EditLocation>
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
  topbuttons: {
    flexDirection: "row",
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
    height: 60,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    color: theme.colors.primary,
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    alignItems: "center",
    padding: 12,
  },
});

export default EditScreen;
