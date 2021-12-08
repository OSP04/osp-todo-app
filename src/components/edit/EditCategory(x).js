import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { getData } from "../../db";
import { addTodo, removeTodo, updateTodo } from "../../editTasksFunc";
import CommonModal from "../common/CommonModal";
import EditTaskContext from "../../context/EditTask";

const EditCategory = ({ categoryArr }) => {
  const {
    editingTask,
    editingCategory,
    editingId,
    updateCategoryData,
    updateCategory,
  } = useContext(EditTaskContext);
  const [category, setCategory] = useState(editingTask.category);
  const [categoryData, setCategoryData] = useState(categoryArr);

  const [categoryId, setCategoryId] = useState("");
  const [prevId, setPrevId] = useState[""];

  useEffect(async () => {
    if (editingTask.category === null) {
      setCategory("Category");
    } else {
      setCategory(editingTask.category);
      setCategoryId(editingCategory.id);
      setPrevId(editingCategory.id);
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const changeCategory = (prevId, id, task) => {
    const prevIndex = categoryData.findIndex((e) => e.id === prevId);
    const prevTaskIndex = categoryData[prevIndex].tasks.findIndex(
      (e) => e.id === editingId
    );
    categoryData[prevId].tasks.splice(prevTaskIndex, 1); //전에 속해 있던 카테고리의 task 배열에서 삭제

    const index = categoryData.findIndex((e) => e.id === id);
    const newCategoryObj = {
      ...categoryData[index],
      tasks: [...categoryData[index].tasks, task],
    };
    setCategoryData([...categoryData, newCategoryObj]);
    updateCategory(newCategoryObj);
    updateCategoryData(categoryData);
  };

  const renderCategory = ({ item }) => (
    <Pressable
      onPress={() => {
        setPrevId(categoryId);
        setCategoryId(item.id);
        setCategory(item.title);
        changeCategory(prevId, item.id, {
          ...editingTask,
          category: item.title,
        });
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
