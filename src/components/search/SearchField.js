import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import useSearchTask from "./useSearchTask";
import SearchedTask from "./SearchedTask";

function SearchField() {
  const { searchQuery, setSearchQuery, filteredTasks } = useSearchTask("");

  const updateSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <ScrollView>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchQuery}
        containerStyle={styles.searchBar}
        lightTheme={true}
        containerStyle={{ backgroundColor: "#FFFFFF" }}
        inputContainerStyle={{ backgroundColor: "#ece6ff" }}
        inputStyle={{ backgroundColor: "#ece6ff" }}
        leftIconContainerStyle={{ backgroundColor: "#ece6ff" }}
      />
      {filteredTasks &&
        filteredTasks.map((task, index) => (
          <SearchedTask
            task={task}
            key={new Date().toString() + task.text}
            index={index}
            text={task.text}
            category={task.category}
            date={task.date.split("T")[0]}
            due={task.due && task.due.split("T")[0]}
          />
        ))}
    </ScrollView>
  );
}
export default SearchField;

const styles = StyleSheet.create({
  searchBar: {},
  container: {},
});
const TasksContainer = styled.View``;
