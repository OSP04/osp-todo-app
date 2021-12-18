import { View } from "react-native";
import React from "react";
import { CalendarList } from "react-native-calendars";
import BackButton from "../components/common/BackButton";
import { useResultContext } from "../components/context";
import { theme } from "../theme";
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
  const { setSelectedDay } = useResultContext();

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
          navigation.navigate("Drawer");
          setSelectedDay(day);

          //해당 날짜의 메인으로 이동
        }}
        markedDates={mark}
        theme={{
          todayTextColor: theme.colors.primary,
          dayTextColor: "#222222",
          textDisabledColor: "#d9e1e8",
          monthTextColor: "#222222",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "400",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          selectedDayBackgroundColor: theme.colors.primary,
          selectedDayTextColor: "white",
          textDayHeaderFontSize: 8,
          "stylesheet.calendar.header": {
            dayTextAtIndex0: {
              color: "red",
            },
            dayTextAtIndex6: {
              color: "blue",
            },
          },
        }}
      />
    </View>
  );
};
export default CalendarScreen;
