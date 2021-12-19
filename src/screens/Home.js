import React, { useState } from "react";
import styled from "styled-components/native";
import { BackHandler, Alert, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import Footer from "../components/common/Footer";
import WeekStrip from "../components/WeekStrip";
import { theme } from "../theme";
import { images } from "../images";
import useGetData from "../hooks/useGetData";

const Home = ({ navigation }) => {
  const { categories, tasks, setCategories, setTasks, getDataFirst } =
    useGetData();

  const [isSelecting, setIsSelecting] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Canel",
            onPress: () => null,
          },
          { text: "OK", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      getDataFirst();
      return () => {
        setIsSelecting(false);
      };
    }, [])
  );

  return (
    <Wrapper>
      <StyledBar barStyle="auto" />
      {tasks && categories ? (
        <>
          <Body>
            <WeekStrip
              tasks={tasks}
              setTasks={setTasks}
              setCategories={setCategories}
              categories={categories}
              navigation={navigation}
              isSelecting={isSelecting}
            />
          </Body>

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
        </>
      ) : (
        <EmptyView>
          <Welcome>Welcome to 4TODO 🎉</Welcome>
          <Text>Add your first category in Category menu</Text>
        </EmptyView>
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

const EmptyView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Welcome = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default Home;
