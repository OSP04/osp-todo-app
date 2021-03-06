import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
} from "react-native-draggable-flatlist";
import { useFocusEffect } from "@react-navigation/native";

import { theme } from "../theme";
import Dropdown from "../components/common/Dropdown";
import TaskItem from "../components/task/TaskItem";
import Footer from "../components/common/Footer";
import useGetData from "../hooks/useGetData";
import ImageDialog from "../components/task/ImageDialog";
import { storeData } from "../db";

const AllTasks = ({ navigation }) => {
  const { categories, tasks, setCategories, setTasks, getDataFirst } =
    useGetData();

  const ref = useRef(null);
  const [refresh, setRefresh] = useState(false);
  const [sorting, setSorting] = useState("added");
  const [isSelecting, setIsSelecting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [imagePath, setImagePath] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      getDataFirst();
      return () => {
        setIsSelecting(false);
      };
    }, [])
  );

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
        dueDates[i] = new Date(dueTasks[i].due).getTime();
      }
      // Sort dueTasks in the order of the deadline
      for (let i = 0; i < dueDates.length - 1; i++) {
        let recentIndex = i;
        for (let j = i + 1; j < dueDates.length; j++) {
          if (dueDates[recentIndex] > dueDates[j]) {
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

  const renderItem = ({ item, drag }) => {
    return (
      <ScaleDecorator>
        <OpacityDecorator activeOpacity={1}>
          <ShadowDecorator>
            <TaskItem
              item={item}
              categories={categories}
              setCategories={setCategories}
              setTasks={setTasks}
              tasks={tasks}
              drag={drag}
              sorting={sorting}
              isSelecting={isSelecting}
              navigation={navigation}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setImagePath={setImagePath}
            />
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  };

  const dragAndSave = (data) => {
    if (sorting === "added") {
      setTasks(data);
      storeData("tasks", data);
    } else if (sorting === "due") {
      console.log("Prevented");
    } else {
      let filteredTasks = tasks; // Tasks not included in data
      for (let i = 0; i < data.length; i++) {
        filteredTasks = filteredTasks.filter((item) => item.id !== data[i].id);
      }
      setTasks([...data, ...filteredTasks]);
      storeData("tasks", [...data, ...filteredTasks]);
    }
  };

  return (
    <Wrapper>
      <StyledView>
        <Dropdown
          category={false}
          setRefresh={setRefresh}
          setSorting={setSorting}
        />
      </StyledView>
      <ImageDialog
        modalVisible={modalVisible}
        imagePath={imagePath}
        setModalVisible={setModalVisible}
      />
      <Tasks>
        {tasks.length !== 0 && (
          <DraggableFlatList
            ref={ref}
            data={sortTasks(tasks)}
            onDragEnd={({ data }) => {
              dragAndSave(data);
            }}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        )}
      </Tasks>
      <Footer
        navigation={navigation}
        type={null}
        screens={[null, null]}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        tasks={tasks}
        setTasks={setTasks}
        setRefresh={setRefresh}
        categories={categories}
        setCategories={setCategories}
        where="all"
      />
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

const Tasks = styled.SafeAreaView`
  flex: 1;
  padding: 5%;
`;

export default AllTasks;
