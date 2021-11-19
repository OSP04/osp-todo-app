import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import Categories from "../components/Categories";
import IconButton from "../components/IconButton";
import { images } from "../images";
import { theme } from "../theme";
import AddCategory from "./AddCategory";

const AllCategory = () => {

    const width = Dimensions.get('window').width;
    const [state, setState] = useState(false);

    const [newCategory, setNewCategory] = useState("");

    const [categories, setCategories] = useState([
        {
            id: "1",
            text: "Study",
            task1: "Report Assignment",
            task2: "Study for JAVA quiz",
            task3: "Homework-Algebra",
            task4: "Exercise 6.6~6.8",
        },
        {
            id: "2",
            text: "Personal",
            task1: "Book a hairdresser",
            task2: "Write diary",
            task3: "Water plants",
            task4: "Visit Anne's market",
        },
        {
            id: "3",
            text: "Reading",
            task1: "Read Book1 ~chapter 2",
            task2: "Borrow Book2",
            task3: "Return Book3",
            task4: "Read Book4 ~chapter 5",
        },
    ]);

    const addCategory = () => {
        const ID = Date.now().toString();
        const newCategoryObj = {
            id: ID,
            text: newCategory,
            task1: null,
            task2: null,
            task3: null,
            task4: null,
        };
        setNewCategory("");
        setCategories([...categories, newCategoryObj]);
        setState(false);
    };

    const _onPressCancel = () => {
        setNewCategory("");
        setState(false);
    }

    const _handleTextChange = text => {
        setNewCategory(text);
    }

    return (
        <Wrapper>
            <StyledBar barStyle="default" />
            <StyledView width={width - 20}>
                <IconButton type={images.back} />
                <StyledText>Category</StyledText>
                <IconButton type={images.add}
                    onPressOut={() => { setState(true) }} />
                <AddCategory state={state} value={newCategory} onCancel={_onPressCancel}
                    onChangeText={_handleTextChange} onConfirm={addCategory} />
            </StyledView >
            <StyledScroll>
                {Object.values(categories).map(item => (
                    <Categories key={item.id} item={item} />
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
margin-top: 5px;
margin-bottom: 5px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const StyledText = styled.Text`
font-weight: bold;
font-size: 24px;
`;

const StyledScroll = styled.ScrollView``;

export default AllCategory;