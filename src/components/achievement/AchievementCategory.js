import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../theme";
import DoneCategory from "../achievement/DoneCategory";

const AchievementCategory = ({ categories }) => {
  const width = Dimensions.get("window").width;

  return (
    <Wrapper>
      <StyledScroll>
        <AchievementView width={width}>
          {Object.values(categories).map((item) => (
            <DoneCategory key={item.id} item={item} />
          ))}
        </AchievementView>
      </StyledScroll>
    </Wrapper>
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
