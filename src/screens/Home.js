import React, { useState } from "react";

import styled from "styled-components/native";

import Footer from "../components/common/Footer";
import WeekStrip from "../components/WeekStrip";
import TopBar from "../components/common/TopBar";

import { theme } from "../theme";
import { db } from "../db";
import { images } from "../images";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState(db.categories);
  const [tasks, setTasks] = useState(db.tasks);

  return (
    <Wrapper>
      <StyledBar barStyle="auto" />
      <TopBar
        types={[images.search, images.menu]}
        screens={[null, "AllTasks"]}
        title=""
        navigation={navigation}
      />
      <Body>
        <WeekStrip tasks={tasks} setTasks={setTasks} categories={categories} />
      </Body>
      <Footer
        navigation={navigation}
        type={images.comment}
        screens={["Comments", null]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${theme.background};
  flex: 1;
`;

const Body = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 5%;
  padding-top: 0;
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

export default Home;
