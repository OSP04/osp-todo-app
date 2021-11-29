import React, { useState } from "react";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { useOnCellActiveAnimation } from "react-native-draggable-flatlist";

import { theme } from "../theme";
import { images } from "../images";
import IconButton from "./IconButton";

const TaskItem = ({ item, drag }) => {
  const [isCompleted, setIsCompleted] = useState(item.complete);

  const toggleItem = () => {
    item.complete = !item.complete;
    setIsCompleted(item.complete);
  };

  const returnIcon = () => {
    return isCompleted ? images.complete : images.uncomplete;
  };

  const { isActive } = useOnCellActiveAnimation();

  return (
    <StyledView activeOpacity={1} onLongPress={drag} isActive={isActive}>
      <Animated.View style={styles.animatedView}>
        <LeftItems>
          <IconButton type={returnIcon(item)} onPressOut={toggleItem} />
          <StyledText>
            <TaskText>{item.text}</TaskText>
            {item.due && <DueDate>{item.due.toLocaleDateString()}</DueDate>}
          </StyledText>
        </LeftItems>
        <RightItems>
          <TaskImage source={{ uri: item.image }} />
          <IconButton type={images.move} />
        </RightItems>
      </Animated.View>
    </StyledView>
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

const StyledView = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isActive ? theme.light : theme.background};
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

const TaskImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 5px;
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
