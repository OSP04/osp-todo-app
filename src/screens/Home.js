import React, { useState } from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";

import HomeTasks from "../components/HomeTasks";
import { theme } from "../theme";

const Home = () => {
  const [categories, setCategories] = useState([
    {
      id: "5",
      title: "Food",
      color: theme.primary,
      owner: null,
      isAdding: false,
      tasks: [
        {
          id: "1",
          text: "Buy Pizza",
          date: "Thu Nov 16 2021",
          due: null,
          category: "Food",
          image:
            "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
          complete: false,
          created: new Date().setDate(9),
          owner: null,
        },
        {
          id: "3",
          text: "Buy noodle",
          date: "Thu Nov 16 2021",
          due: "2022.1.5",
          category: "Food",
          image: null,
          complete: true,
          created: new Date().setDate(3),
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
      tasks: [
        {
          id: "2",
          text: "OpenSW Assignment",
          date: "Thu Nov 16 2021",
          due: "2021. 12. 15",
          category: "School",
          image: null,
          complete: true,
          created: new Date().setDate(5),
          owenr: null,
        },
        {
          id: "4",
          text: "Submit report",
          date: "Thu Nov 17 2021",
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
      date: "Thu Nov 16 2021",
      due: null,
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      complete: false,
      created: new Date().setDate(9),
      owner: null,
    },
    {
      id: "2",
      text: "OpenSW Assignment",
      date: "Thu Nov 16 2021",
      due: "2021. 12. 15",
      category: "School",
      image: null,
      complete: true,
      created: new Date().setDate(5),
    },
    {
      id: "3",
      text: "Buy noodle",
      date: "Thu Nov 16 2021",
      due: "2022.1.5",
      category: "Food",
      image: null,
      complete: true,
      created: new Date().setDate(3),
      owenr: null,
    },
    {
      id: "4",
      text: "Submit report",
      date: "Thu Nov 17 2021",
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
      <StyledScroll>
        <HomeTasks
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
          setCategories={setCategories}
        />
      </StyledScroll>
    </Wrapper>
  );
};

const window = Dimensions.get("window");

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

const StyledScroll = styled.ScrollView`
  width: ${window.width - 20};
`;

export default Home;
