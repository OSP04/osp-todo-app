import { View } from "react-native";
import React from "react";
import { CalendarList } from "react-native-calendars";
import BackButton from "../components/common/BackButton";
const formatDate = (newDate) => {
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const formattedDate = `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
  return formattedDate;
};
const tasks = [
  {
    id: "1",
    text: "Buy Pizza",
    date: new Date("2021-11-10T03:00:00.000Z"),
    due: null,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    complete: false,
    created: new Date().setDate(10),
    owner: null,
  },
  {
    id: "2",
    text: "OpenSW Assignment",
    date: new Date("2021-11-20T03:00:00.000Z"),
    due: new Date("2021-11-23T03:00:00.000Z"),
    category: "School",
    image: null,
    complete: true,
    created: new Date().setDate(20),
  },
  {
    id: "3",
    text: "Buy noodle",
    date: new Date("2021-11-15T03:00:00.000Z"),
    due: new Date("2021-11-17T03:00:00.000Z"),
    category: "Food",
    image: null,
    complete: true,
    created: new Date().setDate(15),
    owenr: null,
  },
  {
    id: "4",
    text: "Submit report",
    date: new Date("2021-11-16T03:00:00.000Z"),
    due: null,
    category: "School",
    image: null,
    complete: false,
    created: new Date().setDate(16),
    owenr: null,
  },
];

const markingDates = tasks.map((task) => formatDate(task.date));

const mark = {};
markingDates.forEach((day) => {
  mark[day] = {
    marked: true,
    dotColor: "red",
  };
});

const CalendarScreen = ({ navigation }) => {
  console.log(markingDates);
  return (
    <View style={{ paddingtop: 50, flex: 1 }}>
      <BackButton onPressOut={() => navigation.goBack()} />
      <CalendarList
        current={formatDate(new Date())}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {
          console.log("now these months are visible", months);
        }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        onDayPress={(day) => {
          navigation.navigate("Home");
          //해당 날짜의 메인으로 이동
          console.log("selected day", day);
        }}
        markedDates={mark}
      />
    </View>
  );
};
export default CalendarScreen;
