import React from "react";
import { Modal, View } from "react-native";

import styled from "styled-components/native";
import { theme } from "../../src/theme";

const AddCategory = ({ state, value, onChangeText, setColor, onConfirm, onCancel }) => {

    return (
        <Modal
            transparent={true} visible={state} animationType="fade">
            <ModalView>
                <ModalInnerView>
                    <StyledText>Add category</StyledText>
                    <StyledInput
                        placeholder="Enter text..."
                        placeholderTextColor={theme.light}
                        maxLength={20}
                        autoFocus={true}
                        value={value}
                        onChangeText={onChangeText}>
                    </StyledInput>
                    <ColorView>
                        <ColorBox style={{ backgroundColor: theme.category.red }} onPress={() => { setColor(theme.category.red) }} />
                        <ColorBox style={{ backgroundColor: theme.category.yellow }} onPress={() => { setColor(theme.category.yellow) }} />
                        <ColorBox style={{ backgroundColor: theme.category.blue }} onPress={() => { setColor(theme.category.blue) }} />
                    </ColorView>
                    <ButtonView>
                        <ButtonText style={{ color: theme.light }} onPress={onCancel}>Cancel</ButtonText>
                        <View style={{ padding: 8 }} />
                        <ButtonText onPress={onConfirm}>Confirm</ButtonText>
                    </ButtonView>
                </ModalInnerView>
            </ModalView>
        </Modal>
    );
};

const ModalView = styled.View`
flex-direction: column;
background-color: #000000aa;
flex: 1;
`;

const ModalInnerView = styled.View`
background-color: #ffffff;
margin: 40px;
marginTop: 140px;
padding: 20px;
`;

const StyledText = styled.Text`
font-size: 20px;
font-weight: bold;
padding-bottom: 10px;
`;

const StyledInput = styled.TextInput`
border-width:1px;
padding: 5px;
`;

const ColorView = styled.View`
flex-direction: row;
padding-top: 10px;
`;

const ColorBox = styled.TouchableOpacity`
width:22px;
height:22px;
margin-right: 12px;
`;

const ButtonView = styled.View`
flex-direction: row;
justify-content: flex-end;
padding-top: 16px;
`;

const ButtonText = styled.Text`
font-size: 16px;
font-weight: bold;
padding-right: 6px;
`;

export default AddCategory;