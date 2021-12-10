import React from "react";
import { Dimensions, View, Modal } from "react-native";

import styled from "styled-components/native";
import DropButton from "../components/common/DropButton";
import IconButton from "../components/common/IconButton";
import ShowTaskOne from "../components/category/ShowTaskOne";
import { images } from "../images";
import { theme } from "../theme";

const OneCategory = ({ route, navigation }) => {

  const { item, doRefresh, sortTasks, setSorting } = route.params;
  const width = Dimensions.get("window").width;

  return (
    <Wrapper>
          <StyledBar barStyle="default" />
          <StyledView width={width}>
            <IconButton
              type={images.back}
              onPressOut={() => {
                navigation.navigate("AllCategory");
              }}
            />
            <StyledText style={{ color: item.color }}>{item.title}</StyledText>
            <View width={25} />
          </StyledView>
          <StyledView width={width}>
            <StyledText style={{ marginLeft: 10 }}>Tasks</StyledText>
            <DropButton
              setSorting={setSorting}
              category={item}
              doRefresh={doRefresh}
            />
          </StyledView>
          <StyledScroll>
            {item.tasks[0] != null &&
              sortTasks(item).map((item) => (
                <ShowTaskOne key={item.id} item={item} doRefresh={doRefresh} />
              ))}
          </StyledScroll>
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

const StyledView = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 26px;
`;

const StyledScroll = styled.ScrollView``;

export default OneCategory;
