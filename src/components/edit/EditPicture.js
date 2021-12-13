import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CommonModal from "../common/CommonModal";
import EditTaskContext from "../../context/EditTask";

const EditPicture = () => {
  const { editingTask, updateImage } = useContext(EditTaskContext);

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

  useEffect(() => {
    if (editingTask.image !== null || editingTask.image !== "") {
      setPickedImagePath(editingTask.image);
    }
  }, []);

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
      updateImage(result.uri);
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
      updateImage(result.uri);
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
          <Pressable
            onPress={() => {
              setShowModal(false);
              setPickedImagePath("");
              updateImage("");
            }}
            style={styles.buttonList}
          >
            <Feather name="trash-2" style={styles.icon} size={24} color="red" />
            <Text style={{ fontSize: 17, color: "red" }}>Delete</Text>
          </Pressable>
        )}
        <Pressable onPress={showImagePicker} style={styles.buttonList}>
          <Feather name="image" style={styles.icon} size={24} color="black" />
          <Text style={{ fontSize: 17 }}>Select an image</Text>
        </Pressable>
        <Pressable onPress={openCamera} style={styles.buttonList}>
          <Feather name="camera" style={styles.icon} size={24} color="black" />
          <Text style={{ fontSize: 17 }} style={{ fontSize: 17 }}>
            Open camera
          </Text>
        </Pressable>
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
  buttonList: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "flex-start",
    padding: 10,
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
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.5,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default EditPicture;
