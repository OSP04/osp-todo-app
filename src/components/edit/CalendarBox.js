import { Calendar } from "react-native-calendars";
import PropTypes from "prop-types";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../theme";

const CalendarBox = ({ onDayPress, current, markedDates }) => {
  return (
    <Calendar
      // Initially visible month. Default = Date()
      current={current}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={"2018-01-01"}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={"2025-12-31"}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={onDayPress}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      markedDates={markedDates}
      // {'YYYY MM'}, Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={(month) => {}}
      // Hide month navigation arrows. Default = false
      hideArrows={false}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      renderArrow={(direction) =>
        direction === "left" ? (
          <AntDesign name="left" size={20} color="black" />
        ) : (
          <AntDesign name="right" size={20} color="black" />
        )
      }
      // Do not show days of other months in month page. Default = false
      hideExtraDays={false}
      // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange={false}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
      firstDay={7}
      // Hide day names. Default = false
      hideDayNames={false}
      // Show week numbers to the left. Default = false
      showWeekNumbers={false}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={(subtractMonth) => subtractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={(addMonth) => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={false}
      // Disable right arrow. Default = false
      disableArrowRight={false}
      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
      disableAllTouchEventsForDisabledDays={false}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
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
  );
};

CalendarBox.propTypes = {
  onDayPress: PropTypes.func,
};

export default CalendarBox;
