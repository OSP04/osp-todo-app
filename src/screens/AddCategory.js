import React from "react";
import { Button, Modal, Text, View } from "react-native";

import styled from "styled-components/native";
import Input from "../components/Input";

const AddCategory = ({ state, setState }) => {

    return (
        <Modal
            transparent={true} visible={state}>
            <ModalView>
                <ModalInnerView>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 10 }}>Add category</Text>
                    <StyledInput
                        placeholder="Enter text..."
                        placeholderTextColor={theme.light}
                        maxLength={20}
                        autoFocus={true}
                        value={value}
                        onChangeText={onChangeText}>
                    </StyledInput>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 30 }}>
                        <Button title="Cancel" onPress={onCancel} />
                        <View style={{ padding: 5 }} />
                        <Button title="Confirm" onPress={onConfirm} />
                    </View>
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

const StyledInput = styled.TextInput`
border-width:1px;
padding: 5px;
`;

export default AddCategory;