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
                    <LeftView>
                        <IconButton type={images.uncomplete} />
                        <TaskText>{item.task1}</TaskText>
                    </LeftView>
                    <RightView>
                        <DueDate>{item.task1Due}</DueDate>
                    </RightView>
                </TaskView>}

                {item.task2 != null && <TaskView width={width}>
                    <LeftView>
                        <IconButton type={images.uncomplete} />
                        <TaskText>{item.task2}</TaskText>
                    </LeftView>
                    <RightView>
                        <DueDate>{item.task2Due}</DueDate>
                    </RightView>
                </TaskView>}

                {item.task3 != null && <TaskView width={width}>
                    <LeftView>
                        <IconButton type={images.uncomplete} />
                        <TaskText>{item.task3}</TaskText>
                    </LeftView>
                    <RightView>
                        <DueDate>{item.task3Due}</DueDate>
                    </RightView>
                </TaskView>}

                {item.task4 != null && <TaskView width={width}>
                    <LeftView>
                        <IconButton type={images.uncomplete} />
                        <TaskText>{item.task4}</TaskText>
                    </LeftView>
                    <RightView>
                        <DueDate>{item.task4Due}</DueDate>
                    </RightView>
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
margin-left: 10px;
`;

const LeftView = styled.View`
flex-direction: row;
padding-top:2px;
align-items: flex-end;
`;

const RightView = styled.View`
flex-direction: row;
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

const MoreView = styled.View`
align-items: flex-end;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
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