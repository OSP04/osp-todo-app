import React from "react";
import { Text } from "react-native";

import styled from "styled-components/native";

const AchievementCate = () => {

    return (
        <Wrapper>
            <StyledScroll>
                <Text>카테고리별 성취도</Text>
            </StyledScroll>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
justify-content: flex-start;
align-items: center;
`;

const StyledScroll = styled.ScrollView``;

export default AchievementCate;