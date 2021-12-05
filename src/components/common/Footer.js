import React, { useState } from "react";
import styled from "styled-components/native";

import { images } from "../../images";
import { theme } from "../../theme";
import { getData, storeData } from "../../db";
import IconButton from "./IconButton";

const Footer = ({
  navigation,
  type,
  screens,
  isSelecting,
  setIsSelecting,
  setTasks,
}) => {
  const [all, setAll] = useState(false);

  return (
    <StyledView>
      {!isSelecting ? (
        <IconButton
          type={type}
          onPressOut={() => screens[0] && navigation.navigate(screens[0])}
        />
      ) : (
        <AllButton
          all={all}
          onPress={() => setAll((current) => !current)}
          isSelecting={isSelecting}
        >
          <AllText all={all} isSelecting={isSelecting}>
            All
          </AllText>
        </AllButton>
      )}

      <RightButtons>
        {isSelecting && (
          <IconButton
            type={images.remove}
            onPressOut={() => {
              console.log("Delete tasks");
            }}
          />
        )}
        <SelectButton
          isSelecting={isSelecting}
          onPress={async () => {
            setIsSelecting((current) => !current);
            setAll(false);
            const tasks = await getData("tasks");
            tasks.map((item) => (item.selected = false));
            setTasks(tasks);
          }}
        >
          <SelectText isSelecting={isSelecting}>
            {!isSelecting ? "Select" : "Cancel"}
          </SelectText>
        </SelectButton>
      </RightButtons>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  padding-top: 0;
  background-color: ${theme.background};
`;

const RightButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Button = styled.Pressable`
  border: 1px solid ${theme.primary};
  border-radius: 12px;
  width: 60px;
  padding-vertical: 5px;
  align-items: center;
`;

const AllButton = styled(Button)`
  ${(props) => props.all && `background-color: ${theme.primary}`};
`;

const SelectButton = styled(AllButton)`
  margin-left: 15px;
  border: ${(props) => (props.isSelecting ? theme.light : theme.text)};
`;

const AllText = styled.Text`
  color: ${(props) => (props.all ? "white" : theme.text)};
`;

const SelectText = styled.Text`
  color: ${(props) => (props.isSelecting ? theme.light : theme.text)};
`;

export default Footer;
