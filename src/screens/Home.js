import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Footer from "../components/common/Footer";
import WeekStrip from "../components/WeekStrip";
import TopBar from "../components/common/TopBar";
import { theme } from "../theme";
import { images } from "../images";
import useGetData from "../hooks/useGetData";

const Home = ({ navigation, route }) => {
  const {categories, tasks, setCategories, setTasks, getDataFirst} = useGetData();
  useEffect(getDataFirst, []);

  const [isSelecting, setIsSelecting] = useState(false);
  const [refresh, setRefresh] = useState(false);

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
            navigation={navigation}
            isSelecting={isSelecting}
          />
        )}
      </Body>
      {tasks && categories && (
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
