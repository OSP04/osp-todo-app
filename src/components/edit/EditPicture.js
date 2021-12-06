import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Image, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CommonModal from "../common/CommonModal";
import { updateTodo } from "../../editTasksFunc";

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

  if (selectedTask.image === null) {
    setPickedImagePath("");
  } else {
    setPickedImagePath(selectedTask.image);
  }
  const selectedId = selectedTask.id;
  const [todo, setTodo] = useState(selectedTask);

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
      setTodo({ ...todo, image: pickedImagePath });
      updateTodo(todo, selectedId);
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
      setTodo({ ...todo, image: pickedImagePath });
      updateTodo(todo, selectedId);
      setShowModal(false);
    }
  };

  return (
    <View>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        headerText="Picture"
        onCancelPressed={() => setShowModal(false)}
      >
        {pickedImagePath !== "" && (
          <Image source={{ uri: pickedImagePath }} style={styles.fullImage} />
        )}

        {pickedImagePath !== "" && (
          <Button
            onPress={() => {
              setShowModal(false);
              setPickedImagePath("");
            }}
            title="Delete"
            color="red"
          />
        )}
        <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" />
      </CommonModal>
      <Pressable onPress={openModal}>
        {pickedImagePath !== "" ? (
          <Image source={{ uri: pickedImagePath }} style={styles.image} />
        ) : (
          <FontAwesome
            name="picture-o"
            style={styles.icon}
            size={25}
            color="black"
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    width: 270,
  },
  icon: {
    paddingRight: 15,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 5,
    marginRight: 5,
  },
  fullImage: {
    width: "95%",
    height: undefined,
    aspectRatio: 0.7,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default EditPicture;
