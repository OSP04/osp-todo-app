import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { useOnCellActiveAnimation } from "react-native-draggable-flatlist";

import { theme } from "../../theme";
import { images } from "../../images";
import IconButton from "../common/IconButton";
import TaskImage from "./TaskImage";

const TaskItem = ({
  item,
  drag,
  isSelecting,
  navigation,
  modalVisible,
  setModalVisible,
  setImagePath,
}) => {
  const [isCompleted, setIsCompleted] = useState(item.complete);
  const [refresh, setRefresh] = useState(false);

  const toggleItem = () => {
    item.complete = !item.complete;
    setIsCompleted(item.complete);
    // Store completed task
  };

  const returnIcon = () => {
    return isCompleted ? images.complete : images.uncomplete;
  };

  const selectItem = () => {
    if (isSelecting) {
      item.selected = !item.selected;
      setRefresh((current) => !current);
    }
  };

  const { isActive } = useOnCellActiveAnimation();

  return (
    <Touchable
      selected={item.selected}
      isSelecting={isSelecting}
      activeOpacity={1}
      onLongPress={drag}
      isActive={isActive}
      onPress={selectItem}
    >
      <Animated.View style={styles.animatedView}>
        <LeftItems>
          <IconButton type={returnIcon(item)} onPressOut={toggleItem} />
          <StyledText>
            <TaskText>{item.text}</TaskText>
            {item.due && (
              <DueDate>{new Date(item.due).toLocaleDateString()}</DueDate>
            )}
          </StyledText>
        </LeftItems>
        <RightItems>
          {item.image && (
            <TaskImage
              path={item.image}
              setModalVisible={setModalVisible}
              setImagePath={setImagePath}
            />
          )}
          <IconButton
            type={images.edit}
            onPressOut={() => navigation.navigate("EditScreen", { item })}
          />
        </RightItems>
      </Animated.View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isActive || props.selected ? theme.light : theme.background};
`;

const StyledText = styled.View`
  flex-direction: column;
  margin-left: 5px;
`;

const TaskText = styled.Text``;

const DueDate = styled.Text`
  color: ${theme.secondary};
  font-size: 12px;
`;

const LeftItems = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RightItems = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default TaskItem;
