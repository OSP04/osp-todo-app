import React, { useState, useEffect, useRef } from "react";

import { getData } from "../../db";
import { useFocusEffect } from "@react-navigation/native";

function useSearchTask(query) {
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState(null);

  useFocusEffect(
    React.useCallback(async () => {
      try {
        const taskObjs = await getData("tasks");
        setTasks(taskObjs);
      } catch (error) {
        console.log(error);
      }
      return setSearchQuery(null), setFilteredTasks(null);
    }, [])
  );

  useEffect(() => {
    const filterTasks = async () => {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.text
              .toString()
              .toLowerCase()
              .indexOf(searchQuery.toString().toLowerCase()) > -1
        )
      );
    };
    filterTasks();
  }, [searchQuery]);

  return { searchQuery, setSearchQuery, filteredTasks };
}
export default useSearchTask;
