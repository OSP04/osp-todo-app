import React from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { images } from "../images";
import { theme } from "../theme";
import IconButton from "./IconButton";

const Categories = ({ item }) => {

    const width = Dimensions.get('window').width;

    return (
        <Wrapper>
            <StyledView width={width}>
                <StyledText>{item.text}</StyledText>

                {item.task1 != null && <TaskView width={width}>
                    <IconButton type={images.uncomplete} />
                    <TaskText>{item.task1}</TaskText>
                </TaskView>}

                {item.task2 != null && <TaskView width={width}>
                    <IconButton type={images.uncomplete} />
                    <TaskText>{item.task2}</TaskText>
                </TaskView>}

                {item.task3 != null && <TaskView width={width}>
                    <IconButton type={images.uncomplete} />
                    <TaskText>{item.task3}</TaskText>
                </TaskView>}

                {item.task4 != null && <TaskView width={width}>
                    <IconButton type={images.uncomplete} />
                    <TaskText>{item.task4}</TaskText>
                </TaskView>}

                <MoreView width={width}>
                    <MoreButton title="See more tasks...">See more tasks...</MoreButton>
                </MoreView>
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
margin-left: 5px;
`;

const TaskView = styled.View`
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;
`;

const MoreView = styled.View`
align-items: flex-end;
padding-right: 30px;
`;

const StyledText = styled.Text`
font-weight: bold;
font-size: 22px;
margin-top: 20px;
margin-bottom: 6px;
`;

const TaskText = styled.Text`
font-size: 18px;
padding-top: 2px;
padding-bottom: 2px;
`;

const MoreButton = styled.Button`
background-color: ${theme.background};
color: ${theme.primary};
`;

export default Categories;