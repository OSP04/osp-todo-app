import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import { View } from "react-native";

export default SearchField = () => {
  return (
    <SearchBar
      placeholder="Type Here..."
      //onChangeText={this.updateSearch}
      value={search}
    />
  );
};
