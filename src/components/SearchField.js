import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, Text, View } from "react-native";
export default SearchField = () => {
  return (
    <SearchBar
      placeholder="Type Here..."
      //onChangeText={this.updateSearch}
      //value={search}
      containerStyle={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    top: 38 + getStatusBarHeight(),
  },
});
