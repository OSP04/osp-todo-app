import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { theme } from "../../src/theme";
import AchievementCategory from "../components/achievement/AchievementCategory";
import MenuBar from "../MenuBar";
import AchievementDay from "../components/achievement/AchievementDay";
import { useFocusEffect } from "@react-navigation/native";

const Achievement = () => {
  const [stateCategory, setStateCategory] = useState(true);
  const [stateDay, setStateDay] = useState(false);
  const [refresh, setRefresh] = useState(true);

  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const _loadData = async () => {
    const loadedCategories = await AsyncStorage.getItem("categories");
    const loadedTasks = await AsyncStorage.getItem("tasks");
    setCategories(JSON.parse(loadedCategories || "{}"));
    setTasks(JSON.parse(loadedTasks || "{}"));
  };

  const item =
  useFocusEffect(
    React.useCallback(() => {
      _loadData();
      return () => {};
    }, [])
  );

  const doRefresh = () => {
    setRefresh((current) => setRefresh(!current));
  };

  return (
    <Wrapper>
      <StyledBar barStyle="default" />

      <MenuBar
        stateCategory={stateCategory}
        setStateCategory={setStateCategory}
        stateDay={stateDay}
        setStateDay={setStateDay}
      />

      {stateCategory == true ? (
        <AchievementCategory
          categories={categories}
        />
      ) : (
        <AchievementDay
          tasks={tasks}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.background};
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

export default Achievement;
