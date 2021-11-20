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
    const [color, setColor] = useState("black");

    const [newCategory, setNewCategory] = useState("");

    const [categories, setCategories] = useState([
        {
            id: "1",
            text: "Study",
            color: "black",
            task1: "Report Assignment",
            task1Due: "2021.11.19",
            task2: "Study for JAVA quiz",
            task2Due: "2021.11.29",
            task3: "Homework-Algebra",
            task3Due: "2021.12.01",
            task4: "Exercise 6.6~6.8",
            task4Due: "2021.12.09",
            task5: "Exam study",
            task5Due: "2021.12.13",
        },
        {
            id: "2",
            text: "Personal",
            color: "black",
            task1: "Book a hairdresser",
            task1Due: "2021.11.19",
            task2: "Write diary",
            task2Due: "2021.11.23",
            task3: "Water plants",
            task3Due: "2021.12.11",
            task4: "Visit Anne's market",
            task4Due: "2021.12.29",
            task5: "Visit Anne's market",
            task5Due: "2021.12.31",
        },
    ]);

    const addCategory = () => {
        const ID = Date.now().toString();
        const newCategoryObj = {
            id: ID,
            text: newCategory,
            color: color,
            task1: null,
            task2: null,
            task3: null,
            task4: null,
        };
        setNewCategory("");
        setColor("black");
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
                <AddCategory state={state} value={newCategory} onCancel={_onPressCancel} setColor={setColor}
                    onChangeText={_handleTextChange} onConfirm={addCategory} />
            </StyledView >
            <StyledScroll>
                {Object.values(categories).map(item => (
                    <Wrapper>
                        <Categories key={item.id} item={item} color={color} />
                        <MoreView width={width}>
                            <MoreButton>+ See more tasks...</MoreButton>
                        </MoreView>
                    </Wrapper>
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
font-size: 24px;
`;

const MoreView = styled.View`
align-items: flex-end;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
`;

const MoreButton = styled.Text`
color: ${theme.light};
`;

const StyledScroll = styled.ScrollView``;

export default AllCategory;