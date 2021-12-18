import React, { useState } from "react";

const useSetDate = () => {
  const [markedDates, setMarkedDates] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get date from CalendarScreen by route
  const passDate = (selectedDay) => {
    if (selectedDay !== []) {
      const date = new Date(selectedDay.timestamp);
    }
  };

  // Mark date having tasks of categories
  const markDate = (categories) => {
    if (categories) {
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
