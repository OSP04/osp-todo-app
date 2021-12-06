import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  Button,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";

const EditRepeat = ({}) => {
  const [repeat, setRepeat] = useState("Add Todo for Next Day");
  const [selectedId, setSelectedId] = useState("");
  useEffect(() => {}, [selectedId]);

  const nextDayMenu = [
    { id: 1, title: "Repeat Next day" },
    { id: 2, title: "Put the date off to next day" },
  ];
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const onConfirmPressed = () => {
    const tommorrow = new Date();
    tommorrow.setDate(tommorrow.getDate() + 1);
    console.log(tommorrow);
    if (selectedId === 1) {
      console.log("다음날 할일에 복사하기");
    } else {
      console.log("다음날로 미루기(시작일 변경)");
    }
    setShowModal(false);
  };

  const renderNextDayMenu = ({ item }) => (
    <Pressable
      onPress={() => {
        setSelectedId(item.id);
      }}
    >
      <View
        style={{
          justifyContent: "center",
          padding: 15,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 17 }}>{item.title}</Text>
          {selectedId === item.id ? (
            <MaterialCommunityIcons
              name="radiobox-marked"
              size={24}
              color={theme.colors.primary}
            />
          ) : (
            <MaterialCommunityIcons
              name="radiobox-blank"
              size={24}
              color={theme.colors.primary}
            />
          )}
        </View>
      </View>
    </Pressable>
  );

  return (
    <Pressable style={styles.listItem} onPress={openModal}>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        headerText="Add Todo for Tommorrow"
        onCancelPressed={() => setShowModal(false)}
      >
        <View style={styles.flatlist}>
          <FlatList
            data={nextDayMenu}
            renderItem={renderNextDayMenu}
            keyExtractor={(title) => title.id}
          />
        </View>
        <Button onPress={onConfirmPressed} title="Confirm" />
      </CommonModal>
      <FontAwesome name="repeat" style={styles.icon} size={22} color="black" />
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
  flatlist: {
    width: "95%",
    margin: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  icon: {
    padding: 10,
  },
  repeat: {
    fontWeight: "bold",
    padding: 14,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
});

export default EditRepeat;
