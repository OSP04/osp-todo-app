import React, { useState } from "react";
import { StyleSheet } from "react-native";

import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";

const DropButton = ({ zIndex }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Due", value: "Due" },
        { label: "Added", value: "Added" },
    ])

    return (
        <StyledView>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                zIndex={zIndex}
                style={styles.container}
                labelStyle={styles.label}
                textStyle={styles.text} />
        </StyledView>
    );
};

const styles = StyleSheet.create({
    label: { fontSize: 12 },
    container: { height: 30, width: 88, marginRight: 20 },
    text: {
        fontSize: 12,
    },
});

const StyledView = styled.SafeAreaView``;

export default DropButton;