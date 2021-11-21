import React from "react";
import { Text } from "react-native";

import styled from "styled-components/native";

const AchievementDay = () => {

    return (
        <Wrapper>
            <StyledScroll>
                <Text>날짜별 성취도</Text>
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

export default AchievementDay;