import React, { useState } from "react";

import styled from "styled-components/native";

import { db } from "../db";
import { images } from "../images";
import { theme } from "../theme";

import TopBar from "../components/TopBar";
import Dropdown from "../components/Dropdown";
import HomeTaskItem from "../components/HomeTaskItem";
import Footer from "../components/Footer";

const AllTasks = ({ navigation }) => {
  const [tasks, setTasks] = useState(db.tasks);
  const [refresh, setRefresh] = useState(false);
  const [sorting, setSorting] = useState("added");

  const sortTasks = () => {
    const _tasks = tasks;
    if (sorting === "added") {
      return _tasks;
    } else if (sorting === "done") {
      return _tasks.filter((task) => task.complete === true);
    } else if (sorting === "not") {
      return _tasks.filter((task) => task.complete === false);
    } else {
      const notDueTasks = _tasks.filter((task) => task.due === null); // Tasks not having due date
      const dueTasks = _tasks.filter((task) => task.due !== null); // Tasks having due date
      let dueDates = []; // Due dates

      // Get due dates
      for (let i = 0; i < dueTasks.length; i++) {
        dueDates[i] = dueTasks[i].due.getTime();
      }
      // Sort dueTasks in the order of the deadline
      for (let i = 0; i < dueDates.length - 1; i++) {
        let recentIndex = i;
        for (let j = i + 1; j < dueDates.length; j++) {
          if (dueDates[recentIndex] > dueDates[j]) {
            console.log(true);
            recentIndex = j;
          }
        }
        const temp = dueDates[i];
        dueDates[i] = dueDates[recentIndex];
        dueDates[recentIndex] = temp;

        temp = dueTasks[i];
        dueTasks[i] = dueTasks[recentIndex];
        dueTasks[recentIndex] = temp;
      }

      return dueTasks.concat(notDueTasks);
    }
  };

  const doRefresh = () => {
    setRefresh((current) => !current);
  };

  return (
    <Wrapper>
      <TopBar
        types={[images.back, images.search]}
        title="All Tasks"
        screens={["Home", null]}
        navigation={navigation}
      />
      <StyledView>
        <Dropdown setSorting={setSorting} category={false} />
      </StyledView>
      <Tasks>
        {sortTasks(tasks).map((item) => (
          <HomeTaskItem key={item.id} item={item} doRefresh={doRefresh} />
        ))}
      </Tasks>
      <Footer navigation={navigation} type={null} screens={[null, null]} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${theme.background};
  flex: 1;
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 5%;
`;

const Tasks = styled.View`
  padding: 5%;
`;

export default AllTasks;
