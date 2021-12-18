import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, Pressable, View, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";
import CalendarBox from "./CalendarBox";
import EditTaskContext from "../../context/EditTask";

const EditStartDate = () => {
  const { editingTask, isAddPressed, updateDate } = useContext(EditTaskContext);

  const [startDate, setStartDate] = useState("Date");
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [markedDates, setMarkedDates] = useState({});

  const formatDate = (unformatted) => {
    const unformattedDate = new Date(unformatted);
    const year = unformattedDate.getFullYear();
    const month = unformattedDate.getMonth() + 1;
    const date = unformattedDate.getDate();
    const formatted = `${year}-${month >= 10 ? month : "0" + month}-${
      date >= 10 ? date : "0" + date
    }`;
    return formatted;
  };

  useEffect(() => {
    if (editingTask.date !== null || isAddPressed !== true) {
      setStartDate(formatDate(editingTask.date));
    }
  }, []);

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
        <View style={styles.container}>
          <CalendarBox
            current={current}
            onDayPress={(day) => {
              onDayPress(day.dateString);
            }}
            markedDates={markedDates}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.selected}>{selectedDate}</Text>
          <Pressable
            style={{
              ...styles.button,
              backgroundColor: theme.colors.primary,
            }}
            onPress={() => {
              setStartDate(selectedDate);
              updateDate(new Date(selectedDate));
              setShowModal(false);
            }}
          >
            <Text style={{ ...styles.buttonText, color: "white" }}>
              Confirm
            </Text>
          </Pressable>
        </View>
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
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    borderRadius: 50,
    width: 80,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default EditStartDate;
