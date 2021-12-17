import React, { useState } from "react";

import styled from "styled-components/native";
import { theme } from "../../src/theme";
import AchievementCategory from "../components/achievement/AchievementCategory";
import MenuBar from "../MenuBar";
import AchievementDay from "../components/achievement/AchievementDay";

const Achievement = () => {
  const [stateCategory, setStateCategory] = useState(true);
  const [stateDay, setStateDay] = useState(false);
  const [refresh, setRefresh] = useState(true);

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
          stateCategory={stateCategory}
          doRefresh={doRefresh}
        />
      ) : (
        <AchievementDay stateDay={stateDay} />
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
