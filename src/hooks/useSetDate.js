import React, { useState } from "react";

const useSetDate = () => {
  const [markedDates, setMarkedDates] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const passDate = (route) => {
    if (route.params) {
      const { day } = route.params;
      const date = new Date(day.timestamp);
      setSelectedDate(date);
      setYear(day.year);
    }
  };

  const markDate = (categories) => {
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
