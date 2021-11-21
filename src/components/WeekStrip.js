import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

import styled from "styled-components/native";
import CalendarStrip from "react-native-calendar-strip";

import { theme } from "../theme";

const WeekStrip = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const getYear = (date) => {
    const selectedYear = new Date(date).getFullYear();
    setYear(selectedYear);
  };

  return (
    <StyledView>
      <Year>{year}</Year>
      <CalendarStrip
        ref={strip}
        scrollable
        style={styles.weekStrip}
        calendarHeaderStyle={styles.header}
        calendarHeaderContainerStyle={styles.headerContainer}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: "black",
        }}
        weekendDateNameStyle={styles.weekendDate}
        highlightDateNumberStyle={styles.dateNumber}
        highlightDateNameStyle={styles.dateName}
        iconContainer={{ flex: 0.1 }}
        calendarHeaderFormat={`MMMM`}
        onHeaderSelected={() => console.log("Navigate to calender page")}
        onDateSelected={(date) => getYear(date)}
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
  weekStrip: {
    height: 130,
    paddingTop: 5,
    paddingBottom: 10,
  },

  header: {
    color: theme.primary,
    fontSize: 20,
    fontWeight: "bold",
  },

  headerContainer: {},

  dateNumber: {
    color: theme.primary,
    fontWeight: "bold",
    fontSize: 14,
  },

  dateName: {
    color: theme.secondary,
    fontSize: 9,
  },

  weekendDate: {
    color: "tomato",
  },
});

export default WeekStrip;
