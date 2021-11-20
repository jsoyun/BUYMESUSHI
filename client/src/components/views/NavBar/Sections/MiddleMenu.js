import React, { useState } from "react";
import Button from "@mui/material/Button";

import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Navi = styled.div`
  display: flex;
  margin-top: 10px;
`;
// 
// :hover{
//   backgroundColor: #3b5998;
// }
const NavButton = styled(Button)({
  borderRadius: "8px",
  '&:hover': {
    backgroundColor: '#3b5998',
  },
});

const RightMenu = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <Navi>
      <NavButton sx={{ mr: 1 }} href="/about" color="inherit">
        소개
      </NavButton>
      <NavButton sx={{ mr: 1 }} href="/authBoard" color="inherit">
        지키미인증
      </NavButton>
      <NavButton sx={{ mr: 1 }} href="/product" color="inherit">
        포인트사용
      </NavButton>
      <NavButton sx={{ mr: 1 }} href="/play" color="inherit">
        미니게임
      </NavButton>
      <NavButton sx={{ mr: 1 }} href="/board" color="inherit">
        게시판
      </NavButton>
    </Navi>
  );
};

export default withRouter(RightMenu);
