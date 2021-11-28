import { View } from "react-native";
import React from "react";
import { CalendarList } from "react-native-calendars";
import BackButton from "../components/BackButton";

export default CalendarScreen = (navigation) => {
  const unformattedCurrent = new Date();
  const year = unformattedCurrent.getFullYear();
  const month = unformattedCurrent.getMonth() + 1;
  const date = unformattedCurrent.getDate();
  const current = `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
  return (
    <View style={{ paddingtop: 50, flex: 1 }}>
      <BackButton onPressOut={() => navigation.goBack()} />
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
          //해당 날짜의 메인으로 이동
          console.log("selected day", day);
        }}
        markingType={"period"}
        markedDates={{
          [current]: { selected: true },
          "2021-11-15": { marked: true, dotColor: "#50cebb" },
          "2021-11-16": { marked: true, dotColor: "#50cebb" },
          "2021-11-21": {
            startingDay: true,
            color: "#50cebb",
            textColor: "white",
          },
          "2021-11-22": { color: "#70d7c7", textColor: "white" },
          "2021-11-23": {
            color: "#70d7c7",
            textColor: "white",
            marked: true,
            dotColor: "white",
          },
          "2021-11-24": { color: "#70d7c7", textColor: "white" },
          "2021-11-25": {
            endingDay: true,
            color: "#50cebb",
            textColor: "white",
          },
        }}
      />
    </View>
  );
};
