import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { getData } from "../../db";
import { addTodo, removeTodo, updateTodo } from "../../editTasksFunc";
import CommonModal from "../common/CommonModal";

const EditCategory = ({ selectedTask, selectedCategory }) => {
  const [category, setCategory] = useState(selectedTask.category);
  const [categoryData, setCategoryData] = useState([]);

  const [todo, setTodo] = useState(selectedTask);

  const [categoryId, setCategoryId] = useState("");
  const selectedId = selectedTask.id;

  useEffect(async () => {
    try {
      const categoryObjs = await getData("categories");
      setCategoryData(categoryObjs);
    } catch (error) {
      console.log(error);
    }

    if (selectedTask.category === null) {
      setCategory("Category");
    } else {
      setCategory(selectedTask.category);
      setCategoryId(selectedCategory.id);
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const renderCategory = ({ item }) => (
    <Pressable
      onPress={() => {
        setCategoryId(item.id);
        setCategory(item.title);
        setTodo({ ...todo, category: category });
        // updateTodo(todo, selectedId);
        setTimeout(() => {
          setShowModal(false);
        }, 50);
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
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.title}</Text>
          {categoryId === item.id ? (
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
