import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Keyboard } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../theme";

const EditMemo = ({}) => {
  const [memo, setMemo] = useState("");
  const [height, setHeight] = useState(60);
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(true);

  const updateSize = (height) => {
    setHeight(height);
  };

  const onSubmitPressed = () => {
    setSubmit(true);
    if (submit) {
      Keyboard.dismiss();
    }
    setShow(false);
  };

  return (
    <View style={styles.listItem}>
      <Entypo name="text" style={styles.icon} size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Memo"
        multiline={true}
        value={memo}
        onChange={() => setShow(true)}
        onChangeText={(memo) => {
          setMemo(memo);
        }}
        onContentSizeChange={(e) =>
          updateSize(e.nativeEvent.contentSize.height)
        }
      />
      <Pressable onPress={onSubmitPressed} disabled={!show}>
        {show && (
          <Entypo name="check" style={styles.icon} size={20} color="black" />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 60,
    maxHeight: 180,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "space-between",
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
    overflow: "hidden",
  },
});

export default EditMemo;
