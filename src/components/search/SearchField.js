import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import useSearchTask from "./useSearchTask";

function SearchField() {
  const { searchQuery, setSearchQuery, searchedTask } = useSearchTask("");

  const updateSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchQuery}
        containerStyle={styles.searchBar}
      />
      <TasksContainer style={styles.container}>{searchedTask}</TasksContainer>
    </View>
  );
}
export default SearchField;

const styles = StyleSheet.create({
  searchBar: {
    top: 38 + getStatusBarHeight(),
  },
  container: { top: 50 + getStatusBarHeight() },
});
const TasksContainer = styled.View``;
