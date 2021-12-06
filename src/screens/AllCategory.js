import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import Categories from "../components/category/Categories";
import IconButton from "../components/common/IconButton";
import { images } from "../../src/images";
import { theme } from "../../src/theme";
import AddCategory from "../screens/AddCategory";
import { getData, storeData } from "../../src/db";

const AllCategory = ({ navigation }) => {
    const width = Dimensions.get("window").width;
    const [state, setState] = useState(false);
    const [color, setColor] = useState(theme.category.red);
    const [refresh, setRefresh] = useState(true);

    const [newCategory, setNewCategory] = useState("");
    const [categories, setCategories] = useState(null);

    useEffect(async () => {
        try {
            const categoryObjs = await getData("categories");
            setCategories(categoryObjs);
        } catch (error) {
            console.log(error);
        }
    }, []);

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
        setCategories([...categories, newCategoryObj]);
        storeData("categories", [...categories, newCategoryObj]);
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

    return (
        <Wrapper>
            <StyledBar barStyle="default" />
            <StyledView width={width - 20}>
                <IconButton type={images.back} onPressOut={() => navigation.navigate("Home")} />
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
                        color={color}
                        doRefresh={doRefresh}
                        navigation={navigation}
                    />
                ))}
            </StyledScroll>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
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
