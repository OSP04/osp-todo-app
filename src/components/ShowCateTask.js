import React from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { images } from "../images";
import { theme } from "../theme";
import IconButton from "./IconButton";


const ShowCateTask = ({ item, doRefresh }) => {

    const width = Dimensions.get('window').width;

    const toggleItem = () => {
        item.complete = !item.complete;
        doRefresh();
    };

    const returnIcon = (item) => {
        return item.complete ? images.complete : images.uncomplete;
    };


    return (
        <StyledView>
            {item.id != null && item.id < 5 && <TaskView width={width}>
                <LeftView>
                    <IconButton type={returnIcon(item)} onPressOut={toggleItem} />
                    <TaskText style={
                        { textDecorationLine: (item.complete ? "line-through" : "none") }
                    }>{item.text}</TaskText>
                </LeftView>
                <RightView>
                    <DueDate>{item.due}</DueDate>
                </RightView>
            </TaskView>}
        </StyledView >
    );
};

const StyledView = styled.View`
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-left: 10px;
`;

const LeftView = styled.View`
flex-direction: row;
padding-top:2px;
align-items: flex-end;
`;

const RightView = styled.View`
flex-direction: row;
padding-top:2px;
padding-right: 24px;
`;

const DueDate = styled.Text`
font-size: 18px;
color: ${theme.light};
`;

const TaskView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const TaskText = styled.Text`
font-size: 18px;
padding: 2px;
color: ${theme.primary};
`;

export default ShowCateTask;