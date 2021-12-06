import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Footer from "../components/common/Footer";
import WeekStrip from "../components/WeekStrip";
import TopBar from "../components/common/TopBar";
import { theme } from "../theme";
import { getData } from "../db";
import { images } from "../images";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(async () => {
    const categoryObjs = await getData("categories");
    const taskObjs = await getData("tasks");
    setCategories(categoryObjs);
    setTasks(taskObjs);
  }, []);

  return (
    <Wrapper>
      <StyledBar barStyle="auto" />
      <TopBar
        types={[images.search, images.menu]}
        screens={[null, "AllTasks"]}
        title={null}
        navigation={navigation}
      />
      <Body>
        {tasks && categories && (
          <WeekStrip
            tasks={tasks}
            setTasks={setTasks}
            categories={categories}
          />
        )}
      </Body>
      <Footer
        navigation={navigation}
        type={images.comment}
        screens={["Comments", null]}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
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
