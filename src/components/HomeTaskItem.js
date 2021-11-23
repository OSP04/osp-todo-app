import React from "react";

import styled from "styled-components/native";
import { theme } from "../theme";
import { images } from "../images";
import IconButton from "./IconButton";

const HomeTaskItem = ({ item, doRefresh }) => {
  const toggleItem = () => {
    item.complete = !item.complete;
    doRefresh();
  };

  const returnIcon = (item) => {
    return item.complete ? images.complete : images.uncomplete;
  };

  return (
    <StyledView>
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
    </StyledView>
  );
};

const StyledView = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
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
`;

export default HomeTaskItem;
