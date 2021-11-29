import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";

const EditRepeat = ({}) => {
  const [repeat, setRepeat] = useState("Repeat");

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Pressable style={styles.listItem} onPress={openModal}>
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <Text style={styles.modalText}>Repeat</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </CommonModal>
      <Feather name="repeat" style={styles.icon} size={24} color="black" />
      <Text style={styles.repeat}>{repeat}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  icon: {
    padding: 10,
  },
  repeat: {
    fontWeight: "bold",
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default EditRepeat;
