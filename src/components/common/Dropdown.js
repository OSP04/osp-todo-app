import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Dropdown = ({ category, setRefresh, setSorting }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(category ? category.sorting : "added");
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
        zIndex={10}
        onChangeValue={(value) => {
          if (category) {
            category.sorting = value;
            setRefresh((current) => !current);
          } else {
            setSorting(value);
          }
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

const StyledView = styled.SafeAreaView`
  z-index: 10;
`;

export default Dropdown;
