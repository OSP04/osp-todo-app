import React, { useState, useEffect, useRef } from "react";
import SearchedTask from "./SearchedTask";
import { getData } from "../../db";

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

function useSearchTask(query) {
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState(null);

  useEffect(async () => {
    try {
      const taskObjs = await getData("tasks");
      setTasks(taskObjs);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useDidMountEffect(() => {
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

  console.log(filteredTasks);

  const searchedTask = filteredTasks.map((task, index) => (
    <SearchedTask
      task={task}
      key={task.created}
      index={index}
      text={task.text}
      category={task.category}
      date={task.date.split("T")[0]}
      due={task.due && task.due.split("T")[0]}
    />
  ));

  console.log(searchedTask);

  return { searchQuery, setSearchQuery, searchedTask };
}
export default useSearchTask;
