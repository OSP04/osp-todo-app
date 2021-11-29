import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";

const EditDueDate = ({}) => {
  const [date, setDate] = useState("DueDate");

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Pressable style={styles.listItem} onPress={openModal}>
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <Text style={styles.modalText}>calendar</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </CommonModal>
      <View style={styles.leftItem}>
        <Entypo name="calendar" style={styles.icon} size={24} color="black" />
        <Text style={styles.dueDate}>{date}</Text>
      </View>
      <Pressable onPress={() => setDate("Please set your Due Date")}>
        <Entypo name="cross" style={styles.icon} size={24} color="black" />
      </Pressable>
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
    justifyContent: "space-between",
  },
  icon: {
    padding: 10,
  },
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  dueDate: {
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

export default EditDueDate;
