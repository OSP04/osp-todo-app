import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import { db } from "../../db";
import CommonModal from "../common/CommonModal";
import CalendarBox from "./CalendarBox";

const date = db.tasks.date;
const EditStartDate = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setSelectedDate(startDate);
    if (startDate !== "Date") setMarkedDates(makeSelectedTrue(startDate));
    setShowModal((prev) => !prev);
  };

  const unformattedCurrent = new Date();
  const year = unformattedCurrent.getFullYear();
  const month = unformattedCurrent.getMonth() + 1;
  const date = unformattedCurrent.getDate();
  const current = `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;

  const [startDate, setStartDate] = useState("Date");
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [markedDates, setMarkedDates] = useState({});

  const makeSelectedTrue = (day) => {
    let markedDates = {};
    markedDates[day] = {
      selected: true,
    };
    return markedDates;
  };

  const onDayPress = (day) => {
    setSelectedDate(day);
    setMarkedDates(makeSelectedTrue(day));
  };

  return (
    <Pressable style={styles.listItem} onPress={openModal}>
      <CommonModal
        showModal={showModal}
        setShowModal={setShowModal}
        headerText="Date"
        onCancelPressed={() => {
          setSelectedDate(startDate);
          setShowModal(false);
        }}
      >
        <Text style={styles.selected}>{selectedDate}</Text>
        <View style={styles.container}>
          <CalendarBox
            current={current}
            onDayPress={(day) => {
              onDayPress(day.dateString);
            }}
            markedDates={markedDates}
          />
        </View>
        <Button
          onPress={() => {
            setStartDate(selectedDate);
            setShowModal(false);
          }}
          title="Confirm"
        />
      </CommonModal>
      <MaterialCommunityIcons
        name="calendar-today"
        style={styles.icon}
        size={24}
        color="black"
      />
      <Text style={styles.startDate}>{startDate}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  icon: {
    padding: 10,
  },
  startDate: {
    fontWeight: "bold",
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
  selected: {
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: 17,
    alignContent: "flex-start",
  },
  container: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    margin: 10,
  },
});

export default EditStartDate;
