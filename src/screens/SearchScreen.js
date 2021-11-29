import React from "react";
import { View } from "react-native";
import BackButton from "../components/common/BackButton";
import SearchField from "../components/search/SearchField";

function SearchScreen({ navigation }) {
  return (
    <View>
      <BackButton onPressOut={() => navigation.goBack()} />
      <SearchField />
    </View>
  );
}
export default SearchScreen;
