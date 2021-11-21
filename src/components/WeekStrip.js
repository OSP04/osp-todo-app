import React, { useState } from "react";
import { StyleSheet } from "react-native";

import styled from "styled-components/native";
import CalendarStrip from "react-native-calendar-strip";

import { theme } from "../theme";

const WeekStrip = () => {
  return (
    <StyledView>
      <CalendarStrip
        scrollable
        style={styles.weekStrip}
        calendarHeaderStyle={styles.header}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: "black",
        }}
        highlightDateNumberStyle={styles.dateNumber}
        highlightDateNameStyle={styles.dateName}
        iconContainer={{ flex: 0.1 }}
        onDateSelected={(date) => console.log(date)}
        onHeaderSelected={() => console.log("Navigate to calender page")}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
  display: flex;
  width: 100%;
`;

const styles = StyleSheet.create({
  weekStrip: {
    height: 130,
    paddingTop: 20,
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
});

export default WeekStrip;
