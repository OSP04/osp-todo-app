import React from "react";
import { Button, Modal, View } from "react-native";

import styled from "styled-components/native";
import { theme } from "../theme";

const AddCategory = ({ state, value, onChangeText, onConfirm, onCancel }) => {

    return (
        <Modal
            transparent={true} visible={state}>
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
                    <ButtonView>
                        <Button title="Cancel" onPress={onCancel} />
                        <View style={{ padding: 5 }} />
                        <Button title="Confirm" onPress={onConfirm} />
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
margin: 50px;
marginTop: 80px;
padding: 20px;
`;

const StyledText = styled.Text`
font-size: 18px;
font-weight: bold;
padding-bottom: 10px;
`;

const StyledInput = styled.TextInput`
border-width:1px;
padding: 5px;
`;

const ButtonView = styled.View`
flex-direction: row;
justify-content: flex-end;
padding-top: 30px;
`;

export default AddCategory;