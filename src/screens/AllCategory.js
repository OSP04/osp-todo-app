import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import Categories from "../components/Categories";
import IconButton from "../components/IconButton";
import ShowCateTask from "../components/ShowCateTask";
import { images } from "../images";
import { theme } from "../theme";
import AddCategory from "./AddCategory";

const AllCategory = () => {

    const width = Dimensions.get('window').width;
    const [state, setState] = useState(false);
    const [color, setColor] = useState("black");
    const [refresh, setRefresh] = useState(true);

    const [newCategory, setNewCategory] = useState("");

    const [categories, setCategories] = useState([
        {
            id: "1",
            text: "Study",
            color: "black",
            task: "exist",
            tasks: [
                {
                    id: "1",
                    text: "Report Assignment",
                    due: "2021.11.19",
                    completed: false,
                },
                {
                    id: "2",
                    text: "Study for JAVA quiz",
                    due: "2021.11.29",
                    completed: false,
                },
                {
                    id: "3",
                    text: "Homework-Algebra",
                    due: "2021.12.01",
                    completed: false,
                },
                {
                    id: "4",
                    text: "Exercise 6.6~6.8",
                    due: "2021.12.09",
                    completed: false,
                },
                {
                    id: "5",
                    text: "Exam study",
                    due: "2021.12.13",
                    completed: false,
                },
            ],
        },
        {
            id: "2",
            text: "Personal",
            color: "black",
            task: "exist",
            tasks: [
                {
                    id: "1",
                    text: "Book a hairdresser",
                    due: "2021.11.19",
                    completed: false,
                },
                {
                    id: "2",
                    text: "Write diary",
                    due: "2021.11.29",
                    completed: false,
                },
                {
                    id: "3",
                    text: "Water plants",
                    due: "2021.12.01",
                    completed: false,
                },
                {
                    id: "4",
                    text: "Visit Anne's market",
                    due: "2021.12.09",
                    completed: false,
                },
                {
                    id: "5",
                    text: "Visit Tom",
                    due: "2021.12.13",
                    completed: false,
                },
            ],
        },
    ]);

    const addCategory = () => {
        const ID = Date.now().toString();
        const newCategoryObj = {
            id: ID,
            text: newCategory,
            color: color,
            task: null,
            tasks:
            {
                id: ID,
                text: null,
                due: null,
                completed: false,
            },
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
    };

    const doRefresh = () => {
        setRefresh((current) => setRefresh(!current));
    };

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
                        {item.task != null && Object.values(item.tasks).map(item => (
                            <ShowCateTask key={item.id} item={item} doRefresh={doRefresh} />
                        ))}
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