import React from "react";
import { Dimensions, View } from "react-native";

import styled from "styled-components/native";
import IconButton from "../components/common/IconButton";
import { images } from "../../src/images";
import { theme } from "../../src/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import AchievementDay from "../components/achievement/AchievementDay";

const Achievement2 = ({ navigation }) => {

    const width = Dimensions.get('window').width;

    return (
        <Wrapper>
            <StyledBar barStyle="default" />
            <StyledView width={width - 20}>
                <IconButton type={images.back} onPressOut={() => navigation.navigate("Home")} />
                <StyledText>Achievement</StyledText>
                <View width={25} />
            </StyledView>
            <StyledView width={width - 20} style={{ justifyContent: "flex-start" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Achievement")}>
                    <StyledText style={{ fontSize: 22, color: theme.light }}>Category</StyledText>
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 30 }} />
                <TouchableOpacity onPress={() => navigation.navigate("Achievement2")}>
                    <StyledText style={{ fontSize: 22 }}>Day</StyledText>
                </TouchableOpacity>
            </StyledView>
            <AchievementDay />
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

export default Achievement2;
