import React, { useState } from "react";

const useSetDate = () => {
  const [markedDates, setMarkedDates] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get date from CalendarScreen by route
  const passDate = (selectedDay) => {
    console.log(selectedDay);
    if (selectedDay.length !== 0) {
      console.log(selectedDay);
      const date = new Date(selectedDay.timestamp);
      setSelectedDate(date);
      setYear(selectedDay.year);
    }
  };

  // Mark date having tasks of categories
  const markDate = (categories) => {
    if (categories.length !== 0) {
      let marked = [];
      for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < categories[i].tasks.length; j++) {
          marked.push({
            date: categories[i].tasks[j].date,
            dots: [
              {
                color: categories[i].color,
              },
            ],
          });
        }
      }
      setMarkedDates(marked);
    }
  };

  return {
    markedDates,
    year,
    setYear,
    selectedDate,
    setSelectedDate,
    passDate,
    markDate,
  };
};

export default useSetDate;
