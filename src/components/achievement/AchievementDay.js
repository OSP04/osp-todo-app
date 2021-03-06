import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../theme";
import DoneDay from "../achievement/DoneDay";

const AchievementDay = ({ tasks }) => {

    const width = Dimensions.get('window').width;

    return (
        <Wrapper>
            <StyledScroll>
                <AchievementView width={width}>
                    <DoneDay key={tasks.id} item={tasks} />
                </AchievementView>
            </StyledScroll>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
justify-content: flex-start;
align-items: center;
background-color: ${theme.background};
`;

const AchievementView = styled.View`
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const StyledScroll = styled.ScrollView``;

export default AchievementDay;