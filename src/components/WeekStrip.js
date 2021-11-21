import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import styled from "styled-components/native";
import CalendarStrip from "react-native-calendar-strip";

import { theme } from "../theme";

const WeekStrip = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selected, setSelected] = useState(new Date());

  const getYear = (date) => {
    const selectedYear = date.getFullYear();
    setYear(selectedYear);
  };

  const selectDate = (date) => {
    const selectedDate = new Date(date);
    getYear(selectedDate);
    setSelected(selectedDate);
  };

  return (
    <StyledView>
      <Year>{year}</Year>
      <CalendarStrip
        scrollable
        selectedDate={selected}
        style={styles.container}
        calendarHeaderStyle={styles.header}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: "black",
        }}
        // weekendDateNameStyle={styles.weekend}
        // weekendDateNumberStyle={styles.weekend}
        highlightDateNumberStyle={styles.dateNumber}
        highlightDateNameStyle={styles.dateName}
        iconContainer={{ flex: 0.1 }}
        calendarHeaderFormat={`MMMM`}
        onHeaderSelected={() => console.log("Navigate to calender page")}
        onDateSelected={(date) => selectDate(date)}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
  display: flex;
  width: 100%;
`;

const Year = styled.Text`
  color: ${theme.secondary};
  text-align: center;
`;

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 5,
    paddingBottom: 10,
  },

  header: {
    color: theme.primary,
    fontSize: 20,
    fontWeight: "bold",
  },

  dateNumber: {
    color: theme.primary,
    fontWeight: "bold",
    fontSize: 14,
  },

  dateName: {
    color: theme.secondary,
    fontSize: 9,
  },

  weekend: {
    color: "tomato",
  },
});

export default WeekStrip;
