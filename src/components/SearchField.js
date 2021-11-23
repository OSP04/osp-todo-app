import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet } from "react-native";

export default SearchField = () => {
  const [searchKeyWord, setSearchKeyWord] = useState("");

  const updateSearch = (text) => {
    setSearchKeyWord(text);
    console.log(searchKeyWord);
  };

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={(text) => updateSearch(text)}
      value={searchKeyWord}
      containerStyle={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    top: 38 + getStatusBarHeight(),
  },
});
