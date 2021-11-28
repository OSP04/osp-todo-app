import React, { useState } from "react";
import { Dimensions, View } from "react-native";

import styled from "styled-components/native";
import OneCategory from "../screens/OneCategory";
import { theme } from "../theme";
import ShowCateTask from "./ShowCateTask";

const Categories = ({ item, doRefresh }) => {

    const width = Dimensions.get('window').width;
    const [visible, setVisible] = useState(false);

    return (
        <Wrapper>
            <StyledView width={width}>
                <StyledText style={{ color: item.color }}>{item.title}</StyledText>
            </StyledView>
            <View>
                {item.tasks[0] != null && Object.values(item.tasks).map(item => (
                    <ShowCateTask key={item.id} item={item} doRefresh={doRefresh} />
                ))}
            </View>
            <MoreView width={width}>
                <MoreButton onPress={() => { setVisible(true) }}>+ See more tasks...</MoreButton>
                <OneCategory key={item.id} item={item} visible={visible} setVisible={setVisible} doRefresh={doRefresh} />
            </MoreView>
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

const MoreView = styled.View`
align-items: flex-end;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
`;

const MoreButton = styled.Text`
color: ${theme.light};
`;

export default Categories;