import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";

function SearchField() {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const updateSearch = (text) => {
    setSearchKeyWord(text);
    console.log(searchKeyWord);
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchKeyWord}
        containerStyle={styles.searchBar}
      />
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
