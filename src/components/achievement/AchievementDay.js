import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../theme";
import DoneDay from "../achievement/DoneDay";

const AchievementDay = () => {

    const width = Dimensions.get('window').width;
    
    const [achieveDay, setAchieveDay] = useState({});

    const _loadAchieveDay = async () => {
    const loadedAchieveDay = await AsyncStorage.getItem("tasks");
    setAchieveDay(JSON.parse(loadedAchieveDay || "{}"));
    };

    const item =
    useFocusEffect(
        React.useCallback(() => {
        _loadAchieveDay();
        return () => {};
        }, [])
    );

    return (
        <Wrapper>
            <StyledScroll>
                <AchievementView width={width}>
                    <DoneDay key={achieveDay.id} item={achieveDay} />
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