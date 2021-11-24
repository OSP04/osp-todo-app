import React, { useState } from "react";

import styled from "styled-components/native";

import { db } from "../db";
import { images } from "../images";
import { theme } from "../theme";
import CommentItem from "../components/CommentItem";
import TopBar from "../components/TopBar";

const Comments = ({ navigation }) => {
  const [user, setUser] = useState(db.users[0]); // 임의로 지정한 사용자 (추후 로그인 정보랑 비교)

  return (
    <Wrapper>
      <TopBar
        types={[images.back, null]}
        screens={["Home", null]}
        title="Comments"
        navigation={navigation}
      />
      {user.comments.map((item) => (
        <CommentItem comment={item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 5%;
  background-color: ${theme.background};
  flex: 1;
`;

export default Comments;
