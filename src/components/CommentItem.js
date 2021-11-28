import React from "react";

import styled from "styled-components/native";

import { theme } from "../theme";

const CommentItem = ({ comment }) => {
  // Constant to miliseconds
  const MINUTE = 60000;
  const HOUR = 3600000;
  const DAY = 86400000;
  const WEEK = 604800000.002;
  const MONTH = 2629745999.989;
  const YEAR = 31556952006.783;

  const getTime = (created) => {
    const difference = Date.now() - created;

    if (difference >= YEAR) {
      const year = Math.floor(difference / YEAR);
      return year + ` year${year !== 1 ? "s" : ""} ago`;
    } else if (difference >= MONTH) {
      const month = Math.floor(difference / MONTH);
      return month + ` month${month !== 1 ? "s" : ""} ago`;
    } else if (difference >= WEEK) {
      const week = Math.floor(difference / WEEK);
      return week + ` week${week !== 1 ? "s" : ""} ago`;
    } else if (difference >= DAY) {
      const day = Math.floor(difference / DAY);
      return day + ` day${day !== 1 ? "s" : ""} ago`;
    } else if (difference >= HOUR) {
      const hour = Math.floor(difference / HOUR);
      return hour + ` hour${hour !== 1 ? "s" : ""} ago`;
    } else if (difference >= MINUTE) {
      const minute = Math.floor(difference / MINUTE);
      return minute + ` min${minute !== 1 ? "s" : ""} ago`;
    } else if (difference < MINUTE) return "Just now";
  };

  return (
    <StyledView>
      <ProfileImage source={{ uri: comment.owner.avatar }} />
      <Data>
        <Title>
          <Name>
            {comment.owner.first_name} {comment.owner.last_name}
          </Name>
          <Time>{getTime(comment.created)}</Time>
        </Title>
        <StyledText>{comment.text}</StyledText>
      </Data>
    </StyledView>
  );
};

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  padding-vertical: 5%;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 3%;
`;

const Data = styled.View`
  flex: 1;
`;

const Title = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3%;
`;

const Name = styled.Text`
  color: ${theme.secondary};
`;

const Time = styled.Text`
  color: ${theme.secondary};
`;

const StyledText = styled.Text``;

export default CommentItem;
