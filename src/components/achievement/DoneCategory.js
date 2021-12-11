import React from "react";
import { Dimensions, View, Text } from "react-native";

import styled from "styled-components/native";

const DoneCategory = ({ item }) => {

    const width = Dimensions.get('window').width;

    const countDone = (category) => { //count completed tasks per category
        const tasks = category.tasks;
        const doneTasks = tasks[0] != null ? Object.values(tasks).filter((task) => task.complete === true) : [];
        return doneTasks.length;
    };

    // show the percentage of completed tasks
    const box =
        <BoxView style={{ borderColor: item.color }}>
            {item.tasks.length != null ?
                (<Text style={{ padding: 20, fontSize: 32, fontWeight: "bold", color: item.color }}>
                    {Math.round((countDone(item) / item.tasks.length).toFixed(2) * 100)}%
                </Text>)
                : ((<Text style={{ padding: 20, fontSize: 32, fontWeight: "bold", color: item.color }}>
                    0%
                </Text>))}
        </BoxView>

    return (

        <Wrapper width={width}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: item.color, paddingBottom: 10 }}
            onPress={console.log(item)}>{item.title}</Text>
            <AchievementView width={width - 80}>
                <View>{box}</View>
                <DoneView>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <DoneText>Completed</DoneText>
                        <DoneText style={{ fontSize: 28, fontWeight: "bold", color: item.color }}>{countDone(item)}</DoneText>
                        <DoneText>tasks</DoneText>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <DoneText>out of</DoneText>
                        {item.tasks.length != null ?
                        (<DoneText style={{ fontSize: 22, fontWeight: "bold", color: item.color }}>{item.tasks.length}</DoneText>)
                    : (<DoneText style={{ fontSize: 22, fontWeight: "bold", color: item.color }}>0</DoneText>)}
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

const BoxView = styled.View`
align-items: center;
justify-content: center;
border-width: 2px;
width: 124px;
height: 90px;
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