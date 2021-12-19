import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import CalendarStrip from "react-native-calendar-strip";

import { theme } from "../theme";
import HomeTasks from "./task/HomeTasks";
import useSetDate from "../hooks/useSetDate";
import ImageDialog from "./task/ImageDialog";
import { useResultContext } from "../components/context";

const WeekStrip = ({
  tasks,
  setTasks,
  categories,
  setCategories,
  navigation,
  isSelecting,
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

  const { selectedDay } = useResultContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [imagePath, setImagePath] = useState(null);

  // Get date from CalendarScreen
  useEffect(() => {
    passDate(selectedDay);
  }, [selectedDay]);

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
      <ImageDialog
        modalVisible={modalVisible}
        imagePath={imagePath}
        setModalVisible={setModalVisible}
      />
      {categories.length !== 0 ? (
        <ScrollView>
          <HomeTasks
            tasks={tasks}
            setTasks={setTasks}
            categories={categories}
            setCategories={setCategories}
            tasks={tasks}
            selectedDate={selectedDate}
            navigation={navigation}
            isSelecting={isSelecting}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setImagePath={setImagePath}
          />
        </ScrollView>
      ) : (
        <EmptyView>
          <Welcome>Welcome to 4TODO 🎉</Welcome>
          <Text>Add your first category in Category menu</Text>
        </EmptyView>
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
  margin-top: 10px;
`;

const EmptyView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Welcome = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

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
