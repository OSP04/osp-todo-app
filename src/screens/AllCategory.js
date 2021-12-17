import React, { useState } from "react";
import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Categories from "../components/category/Categories";
import { theme } from "../../src/theme";
import AddCategory from "../screens/AddCategory";
import { storeData } from "../../src/db";
import AppLoading from "expo-app-loading";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const AllCategory = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const [state, setState] = useState(false);
  const [color, setColor] = useState(theme.category.red);
  const [refresh, setRefresh] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const _loadCategories = async () => {
    const loadedCategories = await AsyncStorage.getItem("categories");
    setCategories(JSON.parse(loadedCategories || "{}"));
  };

  const addCategory = () => {
    const ID = Date.now().toString();
    const newCategoryObj = {
      id: ID,
      title: newCategory,
      color: color,
      isAdding: false,
      sorting: "added",
      tasks: {
        id: "",
        count: "0",
        text: "",
        date: null,
        due: null,
        category: newCategory,
        image: "",
        complete: false,
        selected: false,
        created: "",
        location: {
            text: "",
            region: {},
            locationData: {
              mainText: "",
              address: "",
            },
          },
        memo: "",
      },
    };
    setNewCategory("");
    setColor(theme.category.red);
    categories.push(newCategoryObj);
    storeData("categories", [...categories]);
    setState(false);
  };
  
  const _onPressCancel = () => {
    setNewCategory("");
    setState(false);
  };

  const _handleTextChange = (text) => {
    setNewCategory(text);
  };

  const doRefresh = () => {
    setRefresh((current) => setRefresh(!current));
  };

  const renderItem = ({item, index}) => {
      return (
        <Categories
        key={index}
        item={item}
        doRefresh={doRefresh}
        navigation={navigation}
        categories={categories}
        setCategories={setCategories}
        setRefresh={doRefresh}
      />
      )
  }
  
  return isReady ? (
    <Wrapper>
      <FlatList style={{backgroundColor: theme.background}}
      data={categories}
      renderItem={renderItem}
      />
      <StyledView width={width - 20}>
        <TouchableOpacity onPress={() => setState(true)}>
          <Text style={{fontSize: 16, margin: 10, fontWeight: "bold"}}>+ Add Category</Text>
        </TouchableOpacity>
          <AddCategory
              state={state}
              value={newCategory}
              onCancel={_onPressCancel}
              setColor={setColor}
              onChangeText={_handleTextChange}
              onConfirm={addCategory}
          />
      </StyledView>
    </Wrapper>
  ) : (
    <AppLoading
      startAsync={_loadCategories}
      onFinish={() => setIsReady(true)}
      onError={console.error}
    />
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background_color: ${theme.background};
`;

const StyledView = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: flex-end;
`;

export default AllCategory;
