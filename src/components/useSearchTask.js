import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

const tasks = [
  {
    id: "1",
    text: "Buy Pizza",
    date: new Date("2021-11-10T03:00:00.000Z"),
    due: null,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    complete: false,
    created: new Date().setDate(10),
    owner: null,
  },
  {
    id: "2",
    text: "OpenSW Assignment",
    date: new Date("2021-11-20T03:00:00.000Z"),
    due: "2021. 12. 15",
    category: "School",
    image: null,
    complete: true,
    created: new Date().setDate(20),
  },
  {
    id: "3",
    text: "Buy noodle",
    date: new Date("2021-11-15T03:00:00.000Z"),
    due: "2022.1.5",
    category: "Food",
    image: null,
    complete: true,
    created: new Date().setDate(15),
    owenr: null,
  },
  {
    id: "4",
    text: "Submit report",
    date: new Date("2021-11-16T03:00:00.000Z"),
    due: null,
    category: "School",
    image: null,
    complete: false,
    created: new Date().setDate(16),
    owenr: null,
  },
];
function useSearchTask(query) {
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredTasks, setFilteredTasks] = useState([]);

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

  console.log(filteredTasks);

  const searchedTask = filteredTasks.map((task, index) => (
    <SearchedTask key={task.id} index={index} text={task.text}>
      {task.text}
    </SearchedTask>
  ));

  console.log(searchedTask);

  return { setSearchQuery, searchedTask };
}
export default useSearchTask;

const SearchedTask = styled.Text``;