import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import Categories from "../components/Categories";
import IconButton from "../components/IconButton";
import ShowCateTask from "../components/ShowCateTask";
import { images } from "../images";
import { theme } from "../theme";
import AddCategory from "./AddCategory";
import OneCategory from "./OneCategory";
import { db } from "../db";

const AllCategory = () => {

    const width = Dimensions.get('window').width;
    const [state, setState] = useState(false);
    const [color, setColor] = useState("black");
    const [refresh, setRefresh] = useState(true);
    const [visible, setVisible] = useState(false);

    const [newCategory, setNewCategory] = useState("");

    const [categories, setCategories] = useState(db.categories);
    const [tasks, setTasks] = useState(db.tasks);

    const addCategory = () => {
        const ID = Date.now().toString();
        const newCategoryObj = {
            id: ID,
            title: newCategory,
            color: color,
            isAdding: false,
            sorting: "added",
            tasks:
            {
                id: null,
                count: "0",
                text: null,
                date: null,
                due: null,
                category: newCategory,
                image: null,
                complete: false,
                created: null,
                owner: null,
            },
        };
        setNewCategory("");
        setColor(theme.category.red);
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
                        {item.tasks[0] != null && Object.values(item.tasks).map(item => (
                            <ShowCateTask key={item.id} item={item} doRefresh={doRefresh} />
                        ))}
                        <MoreView width={width}>
                            <MoreButton onPress={() => { setVisible(true) }}>+ See more tasks...</MoreButton>
                            <OneCategory key={item.id} item={item} visible={visible} setVisible={setVisible} doRefresh={doRefresh} />
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