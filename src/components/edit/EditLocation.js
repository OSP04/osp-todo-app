import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../theme";
import CommonModal from "../components/CommonModal";

const EditLocation = ({}) => {
  const [location, setLocation] = useState("");

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <View style={styles.listItem}>
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <Text style={styles.modalText}>Map</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </CommonModal>
      <Entypo name="location-pin" style={styles.icon} size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={(location) => setLocation(location)}
      />
      <Pressable onPress={openModal}>
        <Entypo name="map" style={styles.icon} size={20} color="black" />
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

export default EditLocation;
