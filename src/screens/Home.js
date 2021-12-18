import React, { useState } from "react";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";

import Footer from "../components/common/Footer";
import WeekStrip from "../components/WeekStrip";
import { theme } from "../theme";
import { images } from "../images";
import useGetData from "../hooks/useGetData";

const Home = ({ navigation, route }) => {
  const { categories, tasks, setCategories, setTasks, getDataFirst } =
    useGetData();

  useFocusEffect(
    React.useCallback(() => {
      getDataFirst();
      return;
    }, [])
  );

  const [isSelecting, setIsSelecting] = useState(false);
  const [refresh, setRefresh] = useState(false);

  return (
    <Wrapper>
      <StyledBar barStyle="auto" />
      <Body>
        <WeekStrip
          tasks={tasks}
          setTasks={setTasks}
          setCategories={setCategories}
          categories={categories}
          navigation={navigation}
          isSelecting={isSelecting}
          route={route}
        />
      </Body>
      {categories && tasks && (
        <Footer
          navigation={navigation}
          type={images.comment}
          screens={["Comments", null]}
          isSelecting={isSelecting}
          setIsSelecting={setIsSelecting}
          tasks={tasks}
          setTasks={setTasks}
          categories={categories}
          setCategories={setCategories}
          setRefresh={setRefresh}
          where="home"
        />
      )}
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
