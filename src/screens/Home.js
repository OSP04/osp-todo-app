import React, { useState } from "react";

import styled from "styled-components/native";

import Footer from "../components/Footer";
import WeekStrip from "../components/WeekStrip";

import { theme } from "../theme";
import { db } from "../db";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState(db.categories);
  const [tasks, setTasks] = useState(db.tasks);

  return (
    <Wrapper>
      <StyledBar barStyle="default" />
      <WeekStrip tasks={tasks} setTasks={setTasks} categories={categories} />
      <Footer navigation={navigation} />
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 5%;
  position: relative;
  background-color: ${theme.background};
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

export default Home;
