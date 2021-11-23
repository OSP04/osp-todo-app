import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import DoneCategory from "./DoneCategory";

const AchievementCategory = () => {

    const width = Dimensions.get('window').width;

    const [categories, setCategories] = useState([
        {
            id: "1",
            text: "Study",
            color: "black",
            total: "23",
            complete: "23",
        },
        {
            id: "2",
            text: "Personal",
            color: "blue",
            total: "50",
            complete: "30",
        },
    ])

    return (
        <Wrapper>
            <StyledScroll>
                <AchievementView width={width}>
                    {Object.values(categories).map(item => (
                        <DoneCategory key={item.id} item={item} />
                    ))}
                </AchievementView>
            </StyledScroll>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
justify-content: flex-start;
align-items: center;
`;

const AchievementView = styled.View`
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const StyledScroll = styled.ScrollView``;

export default AchievementCategory;