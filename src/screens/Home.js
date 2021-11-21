import React, { useState } from "react";

import styled from "styled-components/native";

import WeekStrip from "../components/WeekStrip";
import { theme } from "../theme";

const Home = () => {
  const [categories, setCategories] = useState([
    {
      id: "5",
      title: "Food",
      color: theme.primary,
      owner: null,
      isAdding: false,
      sorting: "added",
      tasks: [
        {
          id: "1",
          text: "Buy Pizza",
          date: new Date("2021-11-10T03:00:00.000Z"),
          due: "2023.12.28",
          category: "Food",
          image:
            "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
          complete: false,
          created: new Date().setDate(10),
          owner: null,
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
      ],
    },
    {
      id: "6",
      title: "School",
      color: theme.secondary,
      owner: null,
      isAdding: false,
      sorting: "added",
      tasks: [
        {
          id: "2",
          text: "OpenSW Assignment",
          date: new Date("2021-11-20T03:00:00.000Z"),
          due: "2021.12.15",
          category: "School",
          image: null,
          complete: true,
          created: new Date().setDate(20),
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
      ],
    },
  ]);

  const [tasks, setTasks] = useState([
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
  ]);

  return (
    <Wrapper>
      <StyledBar barStyle="default" />
      <WeekStrip
        tasks={tasks}
        setTasks={setTasks}
        categories={categories}
        setCategories={setCategories}
      />
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

export default Home;
