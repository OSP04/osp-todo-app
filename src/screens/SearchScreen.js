import React from "react";
import { View } from "react-native";
import BackButton from "../components/BackButton";
import SearchField from "../components/SearchField";

function SearchScreen({ navigation }) {
  return (
    <View>
      <BackButton onPressOut={() => navigation.goBack()} />
      <SearchField />
    </View>
  );
}
export default SearchScreen;
