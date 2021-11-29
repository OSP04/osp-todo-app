import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { db } from "../db";
import DoneDay from "./DoneDay";

const AchievementDay = () => {

    const width = Dimensions.get('window').width;

    const [tasks, setTasks] = useState(db.tasks);

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
`;

const AchievementView = styled.View`
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const StyledScroll = styled.ScrollView``;

export default AchievementDay;