import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { db } from "../db";
import DoneCategory from "./DoneCategory";

const AchievementCategory = () => { //카테고리별 성취도 보여주는 화면

    const width = Dimensions.get('window').width;

    const [achieveCate, setAchieveCate] = useState(db.categories);

    // 끝난 task 세는 기능 구현 아직 못함

    // const [doneTask, setDoneTask] = useState(0);

    // const countDone = ({ item }) => {
    //     for (var i = 0; i < item.tasks.length; i++) {
    //         if (item.tasks[i].complete === true) {
    //             setDoneTask(doneTask + 1);
    //         }
    //     }
    //     doneArr.push(doneTask);
    //     setDoneTask(0);
    // };

    // const doneArr = [];

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