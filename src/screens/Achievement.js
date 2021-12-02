import React from "react";
import { Dimensions, View } from "react-native";

import styled from "styled-components/native";
import IconButton from "../components/common/IconButton";
import MenuBar from "../components/MenuBar";
import { images } from "../../src/images";
import { theme } from "../../src/theme";

const Achievement = ({ navigation }) => {

    const width = Dimensions.get('window').width;

    return (
        <Wrapper>
            <StyledBar barStyle="default" />
            <StyledView width={width - 20}>
                <IconButton type={images.back} onPressout={() => navigation.navigate("Home")} />
                <StyledText>Achievement</StyledText>
                <View width={25} />
            </StyledView >

            <MenuBar />

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