import React, { useState } from "react";
import { Dimensions, View } from "react-native";

import styled from "styled-components/native";
import { theme } from "../../src/theme";
import AchievementCategory from "../components/achievement/AchievementCategory";
import MenuBar from "../MenuBar";
import AchievementDay from "../components/achievement/AchievementDay";
import BackButton from "../components/common/BackButton";

const Achievement = ({ navigation }) => {

    const width = Dimensions.get('window').width;
    const [stateCategory, setStateCategory] = useState(true);
    const [stateDay, setStateDay] = useState(false);

    return (
        <Wrapper>
            <StyledBar barStyle="default" />
            <StyledView width={width - 20}>
                <BackButton onPressOut={() => navigation.navigate("Home")} />
                <StyledText>Achievement</StyledText>
                <View width={25} />
            </StyledView>

            <MenuBar stateCategory={stateCategory} setStateCategory={setStateCategory}
                stateDay={stateDay} setStateDay={setStateDay} />

            {stateCategory == true ? (<AchievementCategory stateCategory={stateCategory} />)
                : <AchievementDay stateDay={stateDay} />}
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
justify-content: flex-start;
align-items: center;
background-color: ${theme.background};
`;

const StyledBar = styled.StatusBar`
background-color: ${theme.background};
`;

const StyledView = styled.View`
margin-top: 10px;
margin-bottom: 10px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const StyledText = styled.Text`
font-weight: bold;
font-size: 24px;
`;

export default Achievement;