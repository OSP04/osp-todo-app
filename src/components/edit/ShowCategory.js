import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, Pressable, View, FlatList } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { getData } from "../../db";
import { addTodo, removeTodo, updateTodo } from "../../editTasksFunc";
import EditTaskContext from "../../context/EditTask";

const ShowCategory = () => {
  const { editingTask, updateTodo, updateCategory } =
    useContext(EditTaskContext);
  const [category, setCategory] = useState(editingTask.category);

  useEffect(async () => {
    if (editingTask.category === null) {
      setCategory("Category");
    } else {
      setCategory(editingTask.category);
    }
  }, []);

  return (
    <View style={styles.listItem}>
      <FontAwesome5
        name="hashtag"
        style={styles.icon}
        size={22}
        color="black"
      />
      <Text style={styles.category}>{category}</Text>
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
});

export default ShowCategory;
