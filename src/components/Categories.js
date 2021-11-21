import React from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";

const Categories = ({ item }) => {

    const width = Dimensions.get('window').width;

    return (
        <Wrapper>
            <StyledView width={width}>
                <StyledText style={{ color: item.color }}>{item.text}</StyledText>
            </StyledView>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
justify-content: flex-start;
align-items: center;
`;

const StyledView = styled.View`
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-left: 10px;
`;
const StyledText = styled.Text`
font-weight: bold;
font-size: 22px;
margin-top: 6px;
margin-bottom: 6px;
`;

export default Categories;