import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Button,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { theme } from "../theme";
import CommonModal from "../components/CommonModal";

const EditPicture = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [showPicture, setShowPicture] = useState(false);
  const openPicture = () => {
    setShowPicture((prev) => !prev);
  };

  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState("");

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setShowModal(false);
    }
  };

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setShowModal(false);
    }
  };

  return (
    <View>
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <Text style={styles.modalText}>Upload your picture</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={showImagePicker} title="Select an image" />
          <Button onPress={openCamera} title="Open camera" />
          <Button
            onPress={() => {
              setShowModal(false);
            }}
            title="Cancel"
          />
        </View>
      </CommonModal>
      <CommonModal showModal={showPicture} setShowModal={setShowPicture}>
        <Image source={{ uri: pickedImagePath }} style={styles.fullImage} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              setShowPicture(false);
              setPickedImagePath("");
            }}
            title="Delete"
            color="red"
          />
          <Button
            onPress={() => {
              setShowPicture(false);
            }}
            title="Cancel"
          />
        </View>
      </CommonModal>
      <View style={styles.row}>
        {pickedImagePath !== "" && (
          <Pressable onPress={openPicture}>
            <Image source={{ uri: pickedImagePath }} style={styles.image} />
          </Pressable>
        )}
        <Pressable onPress={openModal}>
          <FontAwesome
            name="picture-o"
            style={styles.icon}
            size={25}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: 15,
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: undefined,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 5,
    marginRight: 5,
  },
  fullImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 0.7,
    resizeMode: "contain",
    marginBottom: 20,
  },
  modalText: {
    textAlign: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "space-between",
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default EditPicture;
