import React, { useState } from "react";
import { StyleSheet } from "react-native";

import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";

const DropButton = ({ category, doRefresh, setSorting }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(category ? category.sorting : "added");
    const [items, setItems] = useState([
        { label: "Due", value: "due" },
        { label: "Added", value: "added" },
    ]);

    return (
        <StyledView>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                zIndex={1000}
                dropDownContainerStyle={{ width: 90 }}
                onChangeValue={(value) => {
                    if (category) {
                        category.sorting = value;
                        doRefresh();
                    } else {
                        setSorting(value);
                    }
                }}
                style={styles.container}
                labelStyle={styles.label}
                textStyle={styles.text} />
        </StyledView>
    );
};

const styles = StyleSheet.create({
    label: { fontSize: 12 },
    container: { height: 30, width: 90, marginRight: 20 },
    text: {
        fontSize: 12,
    },
});

const StyledView = styled.SafeAreaView``;

export default DropButton;