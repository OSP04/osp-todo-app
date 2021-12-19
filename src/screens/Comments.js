import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";

import { theme } from "../theme";
import CommentItem from "../components/comment/CommentItem";
import CommentInput from "../components/comment/CommentInput";
import useGetData from "../hooks/useGetData";
import { storeData } from "../db";

const Comments = () => {
  const { comments, setComments, users, setUsers, getComments } = useGetData();
  const [newComment, setNewComment] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      getComments();
      return () => {};
    }, [])
  );

  const onSubmitEditing = () => {
    Keyboard.dismiss();
    if (newComment) {
      setNewComment("");
      const newCommentObj = {
        id: new Date().toString(),
        text: newComment,
        created: Date.now(),
        owner: users[0],
        recipient: users[0],
      };
      // Update comments
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      storeData("comments", updatedComments);

      // Update users
      const currentUser = users[0];
      currentUser.comments = updatedComments;
      const index = users.findIndex((item) => item.id === currentUser.id);
      users.splice(index, 0, currentUser);
      setUsers(users);
      storeData("users", users);
    }
  };

  return (
    <Wrapper>
      <StyledScroll>
        {comments &&
          comments.map((item) => <CommentItem key={item.id} comment={item} />)}
      </StyledScroll>
      <CommentInput
        newComment={newComment}
        onChangeText={setNewComment}
        onSubmitEditing={onSubmitEditing}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: ${theme.background};
  flex: 1;
  position: relative;
`;

const StyledScroll = styled.ScrollView`
  padding-horizontal: 5%;
`;

export default Comments;
