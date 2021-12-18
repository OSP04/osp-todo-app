import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import useSearchTask from "./useSearchTask";

function SearchField() {
  const { searchQuery, setSearchQuery, searchedTask } = useSearchTask("");

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
      {searchedTask}
    </ScrollView>
  );
}
export default SearchField;

const styles = StyleSheet.create({
  searchBar: {},
  container: {},
});
const TasksContainer = styled.View``;
