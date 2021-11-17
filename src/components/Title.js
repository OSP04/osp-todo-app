import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { images } from "../images";
import AddCategory from "../screens/AddCategory";
import IconButton from "./IconButton";

const Title = () => {

    const width = Dimensions.get('window').width;
    const [state, setState] = useState(false);

    return (
        <StyledView width={width - 20}>
            <IconButton type={images.back} />
            <StyledText>Category</StyledText>
            <IconButton type={images.add}
                onPressOut={() => { setState(true) }} />
            <AddCategory state={state} setState={setState} />
        </StyledView >
    );
};

const StyledView = styled.View`
margin-top: 5px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const StyledText = styled.Text`
font-weight: bold;
font-size: 24px;
`;

export default Title;