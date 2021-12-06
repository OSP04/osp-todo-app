import React from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { theme } from "../theme";

const MenuBar = ({ stateCategory, setStateCategory, stateDay, setStateDay }) => {

  const width = Dimensions.get('window').width;

  return (
    <Wrapper width={width}>

      {stateCategory == true ? (<MenuView>
        <StyledText>Category</StyledText>
        <Underline />
      </MenuView>)
        : (<MenuView>
          <StyledText style={{ color: theme.light }}
            onPress={() => { setStateCategory(true); setStateDay(false) }}>Category</StyledText>
          <Underline style={{ backgroundColor: theme.light }} />
        </MenuView>)}

      {stateDay == true ? (<MenuView style={{ paddingLeft: 10 }}>
        <StyledText>Day</StyledText>
        <Underline style={{ width: 50 }} />
      </MenuView>)
        : (<MenuView style={{ paddingLeft: 10 }}>
          <StyledText style={{ color: theme.light }}
            onPress={() => { setStateCategory(false); setStateDay(true) }}>Day</StyledText>
          <Underline style={{ width: 50, backgroundColor: theme.light }} />
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
margin-left: 14px;
`;

export default MenuBar;