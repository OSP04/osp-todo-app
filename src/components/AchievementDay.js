import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import DoneDay from "./DoneDay";

const AchievementDay = () => {

    const width = Dimensions.get('window').width;

    const [tasks, setTasks] = useState([
        {
            id: "1",
            date: "2021.11.21",
            total: "17",
            complete: "10",
        },
    ])

    return (
        <Wrapper>
            <StyledScroll>
                <AchievementView width={width}>
                    {Object.values(tasks).map(item => (
                        <DoneDay key={item.id} item={item} />
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

export default AchievementDay;