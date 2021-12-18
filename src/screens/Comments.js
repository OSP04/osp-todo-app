import React, { useState } from "react";
import { Keyboard } from "react-native";

import styled from "styled-components/native";

import { db } from "../db";
import { theme } from "../theme";
import CommentItem from "../components/comment/CommentItem";
import CommentInput from "../components/comment/CommentInput";

const Comments = () => {
  const [user, setUser] = useState(db.users[0]); // 임의로 지정한 사용자 (추후 로그인 정보랑 비교)
  const [comments, setComments] = useState(user.comments);
  const [newComment, setNewComment] = useState("");

  const onSubmitEditing = () => {
    Keyboard.dismiss();
    if (newComment) {
      setNewComment("");
      const newCommentObj = {
        id: new Date().toString(),
        text: newComment,
        created: Date.now(),
        owner: user,
        recipient: user,
      };
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      const currentUser = user;
      currentUser.comments = updatedComments;
      setUser(currentUser);
    }
  };

  return (
    <Wrapper>
      <StyledScroll>
        {comments.map((item) => (
          <CommentItem key={item.id} comment={item} />
        ))}
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
