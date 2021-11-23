import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../theme";
import CommonModal from "../components/CommonModal";

const EditPicture = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Pressable onPress={openModal}>
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <Text style={styles.modalText}>Picture</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </CommonModal>
      <FontAwesome
        name="picture-o"
        style={styles.icon}
        size={24}
        color="black"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 10,
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

export default EditPicture;
