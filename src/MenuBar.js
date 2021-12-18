import React from "react";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styled from "styled-components/native";
import { theme } from "./theme";

const MenuBar = ({ stateCategory, setStateCategory, stateDay, setStateDay }) => {

    const width = Dimensions.get('window').width;

    return (
        <Wrapper width={width}>

            {stateCategory == true ? (<MenuView>
                <TouchableOpacity>
                <StyledText>Category</StyledText>
                <Underline />
                </TouchableOpacity>
            </MenuView>)
                : (<MenuView>
                    <TouchableOpacity>
                    <StyledText style={{ color: theme.light }}
                        onPress={() => { setStateCategory(true); setStateDay(false) }}>Category</StyledText>
                    <Underline style={{ backgroundColor: theme.light }} />
                    </TouchableOpacity>
                </MenuView>)}

            {stateDay == true ? (<MenuView style={{ paddingLeft: 10 }}>
                <TouchableOpacity>
                <StyledText>Day</StyledText>
                <Underline style={{ width: 50 }} />
                </TouchableOpacity>
            </MenuView>)
                : (<MenuView style={{ paddingLeft: 10 }}>
                    <TouchableOpacity>
                    <StyledText style={{ color: theme.light }}
                        onPress={() => { setStateCategory(false); setStateDay(true) }}>Day</StyledText>
                    <Underline style={{ width: 50, backgroundColor: theme.light }} />
                    </TouchableOpacity>
                </MenuView>)}
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;

const MenuView = styled.View`
margin-top: 10px;
margin-bottom: 10px;
flex-direction: column;
justify-content: flex-start;
`;

const StyledText = styled.Text`
color: ${theme.primary};
font-weight: bold;
font-size: 22px;
padding-left: 20px;
`;

const Underline = styled.View`
background-color: ${theme.primary};
width: 100px;
height: 4px;
margin-top: 4px;
margin-left: 16px;
`;

export default MenuBar;