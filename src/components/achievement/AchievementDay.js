import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { theme } from "../../theme";
import DoneDay from "../achievement/DoneDay";

const AchievementDay = () => {

    const width = Dimensions.get('window').width;

    const [isReady, setIsReady] = useState(false);

    const [achieveDay, setAchieveDay] = useState({});
    const _loadAchieveDay = async () => {
    const loadedAchieveDay = await AsyncStorage.getItem("tasks");
    setAchieveDay(JSON.parse(loadedAchieveDay || "{}"));
    };

    console.log(achieveDay);

    return ( isReady ?
        (<Wrapper>
            <StyledScroll>
                <AchievementView width={width}>
                    <DoneDay key={achieveDay.id} item={achieveDay} />
                </AchievementView>
            </StyledScroll>
        </Wrapper>)
        : (
            <AppLoading
            startAsync={_loadAchieveDay}
            onFinish={() => setIsReady(true)}
            onError={console.error}/>
        )
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