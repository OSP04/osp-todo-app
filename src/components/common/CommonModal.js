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
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const CommonModal = ({
  showModal,
  setShowModal,
  headerText,
  onCancelPressed,
  children, // 컴포넌트를 자식으로 넘겨받는다.
}) => {
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    justifyContent: "space-between",
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
});

export default CommonModal;
