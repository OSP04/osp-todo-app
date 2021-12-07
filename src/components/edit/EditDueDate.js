import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Pressable, View, Button } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme";
import CommonModal from "../common/CommonModal";
import CalendarBox from "./CalendarBox";
import { addTodo, removeTodo, updateTodo } from "../../editTasksFunc";

const EditDueDate = ({ selectedTask, isAddPressed }) => {
  const [dueDate, setDueDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(dueDate);
  const [markedDates, setMarkedDates] = useState({});
  const selectedId = selectedTask.id;

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
    if (selectedTask.due === null || isAddPressed === true) {
      setDueDate("Due Date");
    } else {
      setDueDate(formatDate(selectedTask.due));
    }
  }, []);

  const [todo, setTodo] = useState(selectedTask);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setSelectedDate(dueDate);
    if (dueDate !== "Due Date" || dueDate !== "Please set your Due Date")
      setMarkedDates(makeSelectedTrue(dueDate));
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
        headerText="Due Date"
        onCancelPressed={() => {
          setSelectedDate(dueDate);
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
              setDueDate(selectedDate);
              setTodo({ ...todo, due: Date(dueDate) });
              // updateTodo(todo, selectedId);
              setShowModal(false);
            }}
          >
            <Text style={{ ...styles.buttonText, color: "white" }}>
              Confirm
            </Text>
          </Pressable>
        </View>
      </CommonModal>
      <View style={styles.leftItem}>
        <MaterialCommunityIcons
          name="clock-end"
          style={styles.icon}
          size={24}
          color="black"
        />
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

export default EditDueDate;
