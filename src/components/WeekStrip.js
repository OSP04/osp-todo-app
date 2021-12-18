import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import CalendarStrip from "react-native-calendar-strip";

import { theme } from "../theme";
import HomeTasks from "./task/HomeTasks";
import useSetDate from "../hooks/useSetDate";

import { useResultContext } from "../components/context";

const WeekStrip = ({
  tasks,
  setTasks,
  categories,
  setCategories,
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
  const { selectedDay } = useResultContext();
  // Get date from CalendarScreen
  useEffect(() => {
    console.log("4day: ", selectedDay);
    passDate(route);
    setRefresh((current) => !current); // Refresh screen
  }, [route.params]);

  // Mark date having tasks of categories
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
      {categories && tasks && (
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
            borderHighlightColor: "#560CCE",
          }}
          weekendDateNameStyle={styles.weekend}
          weekendDateNumberStyle={styles.weekend}
          highlightDateNumberStyle={styles.dateNumber}
          highlightDateNameStyle={styles.dateName}
          markedDates={markedDates}
          iconContainer={{ flex: 0.1 }}
          calendarHeaderFormat={`MMMM`}
          onHeaderSelected={() => {
            navigation.navigate("CalendarScreen", { selectedDate, tasks });
          }}
          onDateSelected={(date) => selectDate(date)}
        />
      )}

      {categories && tasks ? (
        <HomeTasks
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
          setCategories={setCategories}
          tasks={tasks}
          selectedDate={selectedDate}
          navigation={navigation}
          isSelecting={isSelecting}
        />
      ) : (
        <EmptyTask>
          <Text>Add a category in Category menu</Text>
        </EmptyTask>
      )}
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

const EmptyTask = styled.View``;

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 5,
    paddingBottom: 10,
  },

  header: {
    color: theme.text,
    fontSize: 20,
    fontWeight: "bold",
  },

  dateNumber: {
    color: theme.text,
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
