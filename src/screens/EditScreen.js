import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Button } from "react-native-paper";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { FontAwesome5, FontAwesome, Entypo, Feather } from "@expo/vector-icons";
import { theme } from "../theme";
import Background from "../components/Background";

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
                console.log("Cancel");
                navigation.replace("Home");
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                console.log("Ok");
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
    return navigation.replace("Home");
  };

  return (
    <Background>
      <View style={styles.row}>
        <BackButton onPressOut={() => navigation.goBack()} />
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
      <FontAwesome5 name="calendar-check" size={24} color="black" />
      <FontAwesome name="picture-o" size={24} color="black" />
      <Entypo name="text" size={24} color="black" />
      <Feather name="repeat" size={24} color="black" />
      <Entypo name="location-pin" size={24} color="black" />
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 5,
  },
  link: {
    fontWeight: "bold",
  },
});

export default EditScreen;
