import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";
import CalendarBox from "../CalendarBox";

const EditDueDate = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
    if (dueDate !== "Due Date" || dueDate !== "Please set your Due Date")
      setMarkedDates(makeSelectedTrue(dueDate));
  };

  const unformattedCurrent = new Date();
  const year = unformattedCurrent.getFullYear();
  const month = unformattedCurrent.getMonth() + 1;
  const date = unformattedCurrent.getDate();
  const current = `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;

  const [dueDate, setDueDate] = useState("Due Date");
  const [selectedDate, setSelectedDate] = useState(dueDate);
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
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <Text style={styles.modalText}>Set your Due Date</Text>
        <Text style={styles.selected}>{selectedDate}</Text>
        <CalendarBox
          current={current}
          onDayPress={(day) => {
            onDayPress(day.dateString);
          }}
          markedDates={markedDates}
        />
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              setSelectedDate(dueDate);
              setShowModal(false);
            }}
            title="Cancel"
            color="red"
          />
          <Button
            onPress={() => {
              setDueDate(selectedDate);
              setShowModal(false);
            }}
            title="Confirm"
          />
        </View>
      </CommonModal>
      <View style={styles.leftItem}>
        <Entypo name="calendar" style={styles.icon} size={24} color="black" />
        <Text style={styles.dueDate}>{dueDate}</Text>
      </View>
      <Pressable onPress={() => setDueDate("Please set your Due Date")}>
        <Entypo name="cross" style={styles.icon} size={24} color="black" />
      </Pressable>
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
    justifyContent: "space-between",
  },
  icon: {
    padding: 10,
  },
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  dueDate: {
    fontWeight: "bold",
    padding: 10,
    backgroundColor: theme.colors.surface,
    color: "#424242",
  },
  selected: {
    fontWeight: "bold",
    padding: 5,
    color: theme.colors.primary,
    fontSize: 15,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  modalText: {
    textAlign: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "space-between",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default EditDueDate;
