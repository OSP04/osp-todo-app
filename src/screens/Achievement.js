import React, { useState } from "react";
import { Dimensions, View } from "react-native";

import styled from "styled-components/native";
import AchievementCategory from "../components/AchievementCategory";
import AchievementDay from "../components/AchievementDay";
import IconButton from "../components/IconButton";
import MenuBar from "../components/MenuBar";
import { images } from "../images";
import { theme } from "../theme";

const Achievement = () => {

    const width = Dimensions.get('window').width;
    const [stateCategory, setStateCategory] = useState(true);
    const [stateDay, setStateDay] = useState(false);

    return (
        <Wrapper>
            <StyledBar barStyle="default" />
            <StyledView width={width - 20}>
                <IconButton type={images.back} />
                <StyledText>Achievement</StyledText>
                <View width={25} />
            </StyledView >

            <MenuBar stateCategory={stateCategory} setStateCategory={setStateCategory}
                stateDay={stateDay} setStateDay={setStateDay} />

            {stateCategory == true ? (<AchievementCategory />)
                : <AchievementDay />}
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
justify-content: flex-start;
align-items: center;
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