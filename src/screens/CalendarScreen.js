import { View } from "react-native";
import React from "react";
import { CalendarList } from "react-native-calendars";
import BackButton from "../components/common/BackButton";

const formatDateObj = (newDate) => {
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const formattedDate = `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
  return formattedDate;
};

const CalendarScreen = ({ route, navigation }) => {
  const { selectedDate, tasks } = route.params;
  //console.log("Chekc", tasks);
  //console.log(selectedDate);
  //console.log(typeof tasks);

  const markingDates = tasks.map((task) => task.date.split("T")[0]);
  //task.date는 스트링

  const mark = { [formatDateObj(selectedDate)]: { selected: true } };
  markingDates.forEach((day) => {
    mark[day] = {
      marked: true,
      dotColor: "red",
    };
  });

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <BackButton onPressOut={() => navigation.goBack()} />
      <CalendarList
        current={formatDateObj(selectedDate)}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        onDayPress={(day) => {
          navigation.navigate("Home", { day });
          //해당 날짜의 메인으로 이동
        }}
        markedDates={mark}
      />
    </View>
  );
};
export default CalendarScreen;
