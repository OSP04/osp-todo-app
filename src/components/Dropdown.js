import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";

import styled from "styled-components/native";

const Dropdown = ({ zIndex, category, doRefresh }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(category.sorting);
  const [items, setItems] = useState([
    { label: "Added", value: "added" },
    { label: "Done", value: "done" },
    { label: "Not", value: "not" },
    { label: "Due", value: "due" },
  ]);

  return (
    <StyledView>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        zIndex={zIndex}
        onChangeValue={(value) => {
          category.sorting = value;
          doRefresh();
        }}
        style={styles.container}
        labelStyle={styles.label}
        textStyle={styles.text}
      />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  label: { fontSize: 12 },
  container: { height: 30, width: 88 },
  text: {
    fontSize: 12,
  },
});

const StyledView = styled.SafeAreaView``;

export default Dropdown;