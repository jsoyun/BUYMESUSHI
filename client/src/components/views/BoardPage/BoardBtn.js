import React, { useState } from "react";
import Button from "@mui/material/Button";

import axios from "axios";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const RightMenu = (props) => {
  const user = useSelector((state) => state.user);
  console.log(user.userData);

  if (user.userData && !user.userData.isAuth) {
    return (
      <div>
        <Button sx={{ ml: 10, mr: 1 }} href="/login" color="inherit">
          로그인하러가기
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/write" className="button is-primary">
          <strong>글쓰기</strong>
        </Link>
      </div>
    );
  }
};

export default withRouter(RightMenu);
