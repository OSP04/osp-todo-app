import React, { useState } from "react";

import styled from "styled-components/native";

import { db } from "../db";
import { images } from "../images";
import { theme } from "../theme";
import CommentItem from "../components/CommentItem";
import TopBar from "../components/TopBar";
import CommentInput from "../components/CommentInput";

const Comments = ({ navigation }) => {
  const [user, setUser] = useState(db.users[0]); // 임의로 지정한 사용자 (추후 로그인 정보랑 비교)
  const [comments, setComments] = useState(user.comments);
  const [newComment, setNewComment] = useState("");

  const onSubmitEditing = () => {
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
      <TopBar
        types={[images.back, null]}
        screens={["Home", null]}
        title="Comments"
        navigation={navigation}
      />
      <StyledScroll>
        {user.comments.map((item) => (
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
