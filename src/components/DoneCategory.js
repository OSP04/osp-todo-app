import React, { useState } from "react";
import { Dimensions, View, Text } from "react-native";

import styled from "styled-components/native";

const DoneCategory = ({ item, doneTask }) => {

    const width = Dimensions.get('window').width;

    const box =
        <View style={{ borderWidth: 2, borderColor: item.color, width: 124, height: 90, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ padding: 20, fontSize: 32, fontWeight: "bold", color: item.color }}>
                {Math.round((item.length / item.tasks.length).toFixed(2) * 100)}%
            </Text>
        </View>

    return (

        <Wrapper width={width}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: item.color, paddingBottom: 10 }}>{item.title}</Text>
            <AchievementView width={width - 80}>
                <View>{box}</View>
                <DoneView>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <DoneText>Completed</DoneText>
                        <DoneText style={{ fontSize: 28, fontWeight: "bold", color: item.color }}>{item.length}</DoneText>
                        <DoneText>tasks</DoneText>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <DoneText>out of</DoneText>
                        <DoneText style={{ fontSize: 22, fontWeight: "bold", color: item.color }}>{item.tasks.length}</DoneText>
                        <DoneText>tasks</DoneText>
                    </View>
                </DoneView>
            </AchievementView>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
flex-direction: column;
align-items: flex-start;
padding-left: 14px;
`;

const AchievementView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-bottom: 30px;
`;

const DoneView = styled.View`
flex-direction: column;
align-items: center;
margin-left: 30px;
`;

const DoneText = styled.Text`
font-size: 18px;
padding: 2px;
`;

export default DoneCategory;