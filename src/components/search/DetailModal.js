import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { useState } from "react";
import CommonModal from "../common/CommonModal";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  FontAwesome5,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { theme } from "../../theme";
const DetailModal = ({
  due,
  date,
  task,
  category,
  showModal,
  setShowModal,
  headerText,
  onCancelPressed,
  children,
  text,
  pickedImagePath, // 컴포넌트를 자식으로 넘겨받는다.
}) => {
  const openModal = () => {
    setShowPicture((prev) => !prev);
  };
  const [showPicture, setShowPicture] = useState(false);
  const openPicture = () => {
    setShowPicture((prev) => !prev);
  };
  return (
    <>
      {showModal ? (
        <SafeAreaView>
          <StatusBar hidden />
          <KeyboardAvoidingView enabled={false} behavior="position">
            <Modal
              animationType="fade"
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                setShowModal(!showModal);
              }}
              statusBarTranslucent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>{headerText}</Text>
                    <Pressable onPress={onCancelPressed}>
                      <Entypo name="cross" size={24} color="black" />
                    </Pressable>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.title}>{text}</Text>
                  </View>
                  <View>
                    <CommonModal
                      showModal={showPicture}
                      setShowModal={setShowPicture}
                      headerText="Picture"
                      onCancelPressed={() => setShowPicture(false)}
                    >
                      {pickedImagePath !== "" && (
                        <Image
                          source={{ uri: pickedImagePath }}
                          style={styles.fullImage}
                        />
                      )}
                    </CommonModal>
                    <Pressable onPress={openModal}>
                      {pickedImagePath !== "" ? (
                        <Image
                          source={{ uri: pickedImagePath }}
                          style={styles.image}
                        />
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
                  <FontAwesome5
                    name="hashtag"
                    style={styles.icon}
                    size={22}
                    color="black"
                  />
                  <Text style={styles.category}>{category}</Text>
                  <MaterialCommunityIcons
                    name="calendar-today"
                    style={styles.icon}
                    size={24}
                    color="black"
                  />
                  <Text style={styles.startDate}>{date}</Text>
                  <View>
                    <MaterialCommunityIcons
                      name="clock-end"
                      style={styles.icon}
                      size={24}
                      color="black"
                    />
                    <Text style={styles.dueDate}>{due}</Text>
                    <MapView
                      style={styles.map}
                      region={task.location.region}
                      pitchEnabled={false}
                      rotateEnabled={false}
                      scrollEnabled={false}
                      zoomEnabled={false}
                      zoomTapEnabled={false}
                    >
                      <Marker
                        coordinate={{
                          latitude: task.location.region.latitude,
                          longitude: task.location.region.longitude,
                        }}
                      />
                    </MapView>
                    <Text style={styles.address}>
                      {task.location.locationData.address}
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>{children}</View>
                </View>
              </View>
            </Modal>
          </KeyboardAvoidingView>
        </SafeAreaView>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  map: {
    width: 120,
    height: 90,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  address: {
    marginBottom: 10,
    marginHorizontal: 5,
    flexShrink: 1,
  },
  dueDate: {
    fontWeight: "bold",
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
  icon: {
    padding: 10,
  },
  category: {
    fontWeight: "bold",
    padding: 12,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 5,
    marginRight: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    color: theme.colors.primary,
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: 15,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // borderRadius: 15,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 50,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "space-between",
    marginTop: 5,
  },
  fullImage: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.5,
    resizeMode: "contain",
    marginBottom: 10,
  },
  startDate: {
    fontWeight: "bold",
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
});

export default DetailModal;
