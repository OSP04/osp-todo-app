import React from "react";
import { Dimensions, View, Modal } from "react-native";

import styled from "styled-components/native";
import DropButton from "../components/DropButton";
import IconButton from "../components/IconButton";
import ShowTaskOne from "../components/ShowTaskOne";
import { images } from "../images";
import { theme } from "../theme";

const OneCategory = ({ item, visible, setVisible, doRefresh }) => {

    const width = Dimensions.get('window').width;

    return (
        <Wrapper>
            <Modal
                transparent={true} visible={visible}>
                <ModalView>
                    <StyledBar barStyle="default" />
                    <StyledView width={width - 20}>
                        <IconButton type={images.back} onPressOut={() => { setVisible(false) }} />
                        <StyledText style={{ color: item.color }}>{item.text}</StyledText>
                        <View width={25} />
                    </StyledView >
                    <StyledView>
                        <StyledText style={{ marginLeft: 10 }}>Tasks</StyledText>
                        <DropButton />
                    </StyledView>
                    <StyledScroll>
                        {item.task != null && Object.values(item.tasks).map(item => (
                            <ShowTaskOne key={item.id} item={item} doRefresh={doRefresh} />
                        ))}
                    </StyledScroll>
                </ModalView>
            </Modal>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex: 1;
justify-content: flex-start;
align-items: center;
`;

const ModalView = styled.View`
background-color: ${theme.background};
flex: 1;
`;

const StyledBar = styled.StatusBar`
background-color: ${theme.background};
`;

const StyledView = styled.View`
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const StyledText = styled.Text`
font-weight: bold;
font-size: 24px;
`;

const StyledScroll = styled.ScrollView``;

export default OneCategory;