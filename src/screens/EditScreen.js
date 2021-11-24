import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import BackButton from "../components/BackButton";
import { theme } from "../theme";
import Background from "../components/Background";
import { getStatusBarHeight } from "react-native-status-bar-height";
import EditMemo from "../components/EditMemo";
import EditDueDate from "../components/EditDueDate";
import EditRepeat from "../components/EditRepeat";
import EditLocation from "../components/EditLocation";
import EditTodoTitle from "../components/EditTodoTitle";

const EditScreen = ({ navigation }) => {
  const onDeletePressed = () => {
    const [visible, setVisible] = useState(false);
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
      <View style={styles.list}>
        <EditTodoTitle></EditTodoTitle>
        <EditDueDate></EditDueDate>
        <EditRepeat></EditRepeat>
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
  topbuttons: {
    flexDirection: "row",
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  icon: {
    alignItems: "center",
    padding: 12,
  },
});

export default EditScreen;
