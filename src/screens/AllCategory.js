import React, { useState } from "react";
import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Categories from "../components/category/Categories";
import { theme } from "../../src/theme";
import AddCategory from "../screens/AddCategory";
import { storeData } from "../../src/db";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

const AllCategory = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  const [state, setState] = useState(false);
  const [color, setColor] = useState(theme.category.red);
  const [refresh, setRefresh] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const _loadData = async () => {
    const loadedCategories = await AsyncStorage.getItem("categories");
    const loadedTasks = await AsyncStorage.getItem("tasks");
    setCategories(JSON.parse(loadedCategories || "{}"));
    setTasks(JSON.parse(loadedTasks || "{}"));
  };

  const item =
  useFocusEffect(
    React.useCallback(() => {
      _loadData();
      return () => {};
    }, [])
  );

  const addCategory = () => {
    const ID = Date.now().toString();
    const newCategoryObj = {
      id: ID,
      title: newCategory,
      color: color,
      isAdding: false,
      sorting: "added",
      tasks: [],
    };
    setNewCategory("");
    console.log(newCategoryObj);
    if(newCategoryObj.title != "") {
      setColor(theme.category.red);
      categories.push(newCategoryObj);
      storeData("categories", [...categories]);
      doRefresh();
      setIsReady(false);
    }
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

  const renderItem = ({ item, index }) => {
    return (
      <Categories
        key={index}
        item={item}
        doRefresh={doRefresh}
        navigation={navigation}
        categories={categories}
        setCategories={setCategories}
        tasks={tasks}
        setTasks={setTasks}
        setIsReady={setIsReady}
      />
    );
  };

  return isReady ? (
    <Wrapper>
      <FlatList
        style={{ backgroundColor: theme.background }}
        data={categories}
        renderItem={renderItem}
      />
      <StyledView width={width - 20}>
        <TouchableOpacity onPress={() => setState(true)}>
          <Text style={{ fontSize: 18, margin: 10, fontWeight: "bold", color: theme.primary }}>
            + Add Category
          </Text>
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
    startAsync={_loadData}
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
