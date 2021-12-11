import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import CalendarStrip from "react-native-calendar-strip";

import { theme } from "../theme";
import HomeTasks from "./task/HomeTasks";
import useSetDate from "../hooks/useSetDate";

const WeekStrip = ({
  tasks,
  setTasks,
  categories,
  navigation,
  isSelecting,
  route,
}) => {
  const {
    markedDates,
    year,
    setYear,
    selectedDate,
    setSelectedDate,
    passDate,
    markDate,
  } = useSetDate();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    passDate(route);
    setRefresh((current) => !current);
  }, [route.params]);

  useEffect(() => markDate(categories), [tasks, categories]);

  const getYear = (date) => {
    const selectedYear = date.getFullYear();
    setYear(selectedYear);
  };

  const selectDate = (date) => {
    const selected = new Date(date);
    getYear(selected);
    setSelectedDate(selected);
  };

  return (
    <StyledView>
      <Year>{year}</Year>
      <CalendarStrip
        scrollable
        selectedDate={selectedDate}
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
        markedDates={markedDates}
        iconContainer={{ flex: 0.1 }}
        calendarHeaderFormat={`MMMM`}
        onHeaderSelected={() => {
          navigation.navigate("CalendarScreen", { selectedDate });
        }}
        onDateSelected={(date) => selectDate(date)}
      />
      <HomeTasks
        tasks={tasks}
        setTasks={setTasks}
        categories={categories}
        tasks={tasks}
        selectedDate={selectedDate}
        navigation={navigation}
        isSelecting={isSelecting}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
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
    fontSize: 12,
  },

  dateName: {
    color: theme.secondary,
    fontSize: 7,
  },

  weekend: {
    color: "tomato",
  },
});

export default WeekStrip;
