import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Categories from "../components/category/Categories";
import IconButton from "../components/common/IconButton";
import { images } from "../../src/images";
import { theme } from "../../src/theme";
import AddCategory from "../screens/AddCategory";
import { db, getData, storeData } from "../../src/db";
import BackButton from "../components/common/BackButton";
import AppLoading from "expo-app-loading";

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
                    latitude: null,
                    longitude: null,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                },
            },
        };
        setNewCategory("");
        setColor(theme.category.red);
        categories.push(newCategoryObj);
        storeData("categories", [...categories]);
        setState(false);
    };

    console.log(categories);

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

    return ( isReady ?
        (<Wrapper>
            <StyledBar barStyle="default" />
            <StyledView width={width - 20}>
                <BackButton onPressOut={() => navigation.navigate("Home")} />
                <StyledText>Category</StyledText>
                <IconButton
                    type={images.add}
                    onPressOut={() => {
                        setState(true);
                    }}
                />
                <AddCategory
                    state={state}
                    value={newCategory}
                    onCancel={_onPressCancel}
                    setColor={setColor}
                    onChangeText={_handleTextChange}
                    onConfirm={addCategory}
                />
            </StyledView>
            <StyledScroll nestedScrollEnabled={true}>
                {categories != null && Object.values(categories).map((item) => (
                    <Categories
                        key={item.id}
                        item={item}
                        doRefresh={doRefresh}
                        navigation={navigation}
                    />
                ))}
            </StyledScroll>
        </Wrapper>)
        : (
            <AppLoading
      startAsync={_loadCategories}
      onFinish={() => setIsReady(true)}
      onError={console.error}/>
        )
    );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background_color: ${theme.background};
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

const StyledView = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 26px;
`;

const StyledScroll = styled.ScrollView``;

export default AllCategory;
