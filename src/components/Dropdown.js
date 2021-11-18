import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";

import styled from "styled-components/native";
import { theme } from "../theme";

const Dropdown = ({ zIndex }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("added");
  const [items, setItems] = useState([
    { label: "Added", value: "added" },
    { label: "Done", value: "done" },
    { label: "Not", value: "not" },
    { label: "due", value: "due" },
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
        // onChangeValue={(value) => console.log(value)}
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
