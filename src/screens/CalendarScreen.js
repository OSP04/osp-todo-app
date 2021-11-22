import { View } from "react-native";
import React from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import CalendarBox from "../components/CalendarBox";
export default CalendarScreen = () => {
  const unformattedCurrent = new Date();
  const year = unformattedCurrent.getFullYear();
  const month = unformattedCurrent.getMonth() + 1;
  const date = unformattedCurrent.getDate();
  const current = `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
  return (
    <View style={{ flex: 1 }}>
      <CalendarList
        current={current}
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
          console.log("selected day", day);
        }}
      />
    </View>
  );
};
