import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Footer from "../components/common/Footer";
import WeekStrip from "../components/WeekStrip";
import TopBar from "../components/common/TopBar";
import { theme } from "../theme";
import { db, getData, storeData } from "../db";
import { images } from "../images";

const Home = ({ navigation, route }) => {
  const [categories, setCategories] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(async () => {
    try {
      storeData("tasks", db.tasks);
      storeData("categories", db.categories);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const categoryObjs = await getData("categories");
      const taskObjs = await getData("tasks");
      setCategories(categoryObjs);
      setTasks(taskObjs);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Wrapper>
      <StyledBar barStyle="auto" />
      <TopBar
        types={[images.search, images.menu]}
        screens={["SearchScreen", "AllTasks"]}
        title={null}
        navigation={navigation}
      />
      <Body>
        {tasks && categories && (
          <WeekStrip
            tasks={tasks}
            setTasks={setTasks}
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            navigation={navigation}
          />
        )}
      </Body>
      <Footer
        navigation={navigation}
        type={images.comment}
        screens={["Comments", null]}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        tasks={tasks}
        setTasks={setTasks}
        selectedCategory={selectedCategory}
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
