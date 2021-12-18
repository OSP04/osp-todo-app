import React from "react";
import { Dimensions, View, Text } from "react-native";

import styled from "styled-components/native";

const DoneDay = ({ item }) => {

    const width = Dimensions.get('window').width;
    const today = new Date();

    const countTodayTask = (tasks) => { // count tasks for today
        const todayTasks = tasks.filter((task) => task.date === today);

        return todayTasks.length;
    };

    const countTodayDoneTask = (tasks) => { // count tasks that are completed for today
        const todayTasks = tasks.filter((task) => task.date === today);
        const todayDoneTasks = todayTasks.filter((task) => task.complete === true);

        return todayDoneTasks.length;
    };

    // show the percentage of completed tasks
    const box =
        <BoxView>
            {countTodayTask(item) != 0 ?
                (<Text style={{ padding: 20, fontSize: 32, fontWeight: "bold", color: item.color }}>
                    {Math.round((countTodayDoneTask(item) / countTodayTask(item)).toFixed(2) * 100)}%
                </Text>)
                : (<Text style={{ padding: 20, fontSize: 32, fontWeight: "bold", color: item.color }}>
                    0%
                </Text>)}
        </BoxView>

    return (
        <Wrapper width={width}>
            <Text style={{ fontSize: 24, fontWeight: "bold", paddingBottom: 10 }}>{today.getFullYear()}.{today.getMonth() + 1}.{today.getDate()}</Text>
            <AchievementView width={width - 80}>
                <View>{box}</View>
                <DoneView>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <DoneText>Completed</DoneText>
                        <DoneText style={{ fontSize: 28, fontWeight: "bold" }}>{countTodayDoneTask(item)}</DoneText>
                        <DoneText>tasks</DoneText>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <DoneText>out of</DoneText>
                        <DoneText style={{ fontSize: 22, fontWeight: "bold" }}>{countTodayTask(item)}</DoneText>
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

export default DoneDay;