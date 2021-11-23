import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { theme } from "../theme";
import CommonModal from "../components/CommonModal";

const EditDueDate = ({}) => {
  const [date, setDate] = useState("DueDate");

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <View style={styles.listItem}>
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <Text style={styles.modalText}>calendar</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </CommonModal>
      <FontAwesome5
        name="calendar-check"
        style={styles.icon}
        size={24}
        color="black"
      />
      <Pressable onPress={openModal}>
        <Text style={styles.dueDate}>{date}</Text>
      </Pressable>
      <Pressable onPress={() => setDate("Please set your Due Date")}>
        <FontAwesome
          name="remove"
          style={styles.icon}
          size={24}
          color="black"
        />
      </Pressable>
    </View>
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
