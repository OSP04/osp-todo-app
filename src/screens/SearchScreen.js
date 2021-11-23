import React, { useState } from "react";
import { View } from "react-native";
import SearchField from "../components/SearchField";
import BackButton from "../components/BackButton";
export default SearchScreen = () => {
  return (
    <View>
      <BackButton />
      <SearchField />
    </View>
  );
};
