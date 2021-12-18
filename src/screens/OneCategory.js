import React, { useState } from "react";
import { Dimensions, View } from "react-native";

import styled from "styled-components/native";
import DropButton from "../components/common/DropButton";
import ShowTaskOne from "../components/category/ShowTaskOne";
import { theme } from "../theme";
import BackButton from "../components/common/BackButton";

const OneCategory = ({ route, navigation }) => {

  const { item, sortTasks, doRefresh, setSorting, tasks, setTasks, categories, setCategories } = route.params;
  const [refresh, setRefresh] = useState(true);
  const width = Dimensions.get("window").width;

  const screenRefresh = () => {
    setRefresh((current) => setRefresh(!current));
};

  return (
    <Wrapper>
          <StyledBar barStyle="default" />
          <StyledView width={width}>
            <BackButton
              onPressOut={() => {
                doRefresh();
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
              doRefresh={screenRefresh}
            />
          </StyledView>
          <StyledScroll>
            {item.tasks[0] != null &&
              sortTasks(item).map((item) => (
                <ShowTaskOne key={item.id} item={item} doRefresh={screenRefresh} navigation={navigation}
                tasks={tasks} setTasks={setTasks} categories={categories} setCategories={setCategories}/>
              ))}
          </StyledScroll>
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
