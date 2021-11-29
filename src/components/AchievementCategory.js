import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { db } from "../db";
import DoneCategory from "./DoneCategory";

const AchievementCategory = () => {

    const width = Dimensions.get('window').width;

    const [achieveCate, setAchieveCate] = useState(db.categories);

    return (
        <Wrapper>
            <StyledScroll>
                <AchievementView width={width}>
                    {Object.values(achieveCate).map(item => (
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