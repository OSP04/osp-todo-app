import React, { useState, useEffect, useRef } from "react";
import SearchedTask from "./SearchedTask";
import { getData } from "../../db";
import { useFocusEffect } from "@react-navigation/native";

function useSearchTask(query) {
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState(null);

  const [categories, setCategories] = useState(null);

  useFocusEffect(
    React.useCallback(async () => {
      try {
        const taskObjs = await getData("tasks");
        const categoryObjs = await getData("categories");
        setTasks(taskObjs);
        setCategories(categoryObjs);
        searchedTask();
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

  const findCategory = (task) => {
    const categoryTitle = task.category;
    const category = categories.find(
      (element) => element.title === categoryTitle
    );

    return category;
  };

  const searchedTask =
    filteredTasks &&
    filteredTasks.map((task, index) => (
      <SearchedTask
        task={task}
        key={task.created}
        index={index}
        text={task.text}
        categoryObj={findCategory(task)}
        category={task.category}
        date={task.date.split("T")[0]}
        due={task.due && task.due.split("T")[0]}
      />
    ));

  return { searchQuery, setSearchQuery, searchedTask };
}
export default useSearchTask;
