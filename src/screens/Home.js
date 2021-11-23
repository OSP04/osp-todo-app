import React, { useState } from "react";

import styled from "styled-components/native";

import WeekStrip from "../components/WeekStrip";
import { theme } from "../theme";
import { db } from "../db";

const Home = () => {
  const [categories, setCategories] = useState(db.categories);

  const [tasks, setTasks] = useState(db.tasks);

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
