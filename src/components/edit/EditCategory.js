import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../theme";
import { db } from "../../db";
import CommonModal from "../common/CommonModal";

const EditCategory = ({}) => {
  const [category, setCategory] = useState("Category");
  const categoryData = db.categories;
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const renderCategory = ({ item }) => (
    <Pressable
      onPress={() => {
        setCategory(item.title);
        setShowModal(false);
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
        <View style={{ width: 60 }}>
          <Text style={{ fontSize: 17, textAlign: "center" }}>
            {item.title}{" "}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <Pressable style={styles.listItem} onPress={openModal}>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        headerText="Category"
        onCancelPressed={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.flatlist}>
          <FlatList
            data={categoryData}
            renderItem={renderCategory}
            keyExtractor={(title) => title.id}
          />
        </View>
      </CommonModal>
      <FontAwesome5
        name="hashtag"
        style={styles.icon}
        size={22}
        color="black"
      />
      <Text style={styles.category}>{category}</Text>
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
  icon: {
    padding: 10,
  },
  flatlist: {
    width: "95%",
    margin: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  category: {
    fontWeight: "bold",
    padding: 12,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
});

export default EditCategory;
