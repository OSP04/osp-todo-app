import React, { useState } from "react";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { theme } from "../../theme";
import DoneCategory from "../achievement/DoneCategory";
import AppLoading from "expo-app-loading";

const AchievementCategory = () => {
  const width = Dimensions.get("window").width;
  const [isReady, setIsReady] = useState(false);

  const [achieveCate, setAchieveCate] = useState({});
  const _loadAchieveCate = async () => {
    const loadedAchieveCate = await AsyncStorage.getItem("categories");
    setAchieveCate(JSON.parse(loadedAchieveCate || "{}"));
  };

  return ( isReady ? 
    (<Wrapper>
      <StyledScroll>
        <AchievementView width={width}>
          {Object.values(achieveCate).map((item) => (
            <DoneCategory key={item.id} item={item} />
          ))}
        </AchievementView>
      </StyledScroll>
    </Wrapper>)
    : (
      <AppLoading
      startAsync={_loadAchieveCate}
      onFinish={() => setIsReady(true)}
      onError={console.error}/>
    )
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background_color: ${theme.background};
`;

const AchievementView = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledScroll = styled.ScrollView``;

export default AchievementCategory;
