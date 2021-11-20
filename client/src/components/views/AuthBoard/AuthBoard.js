import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthBoardPost from "./Sections/AuthBoardPost";
import AuthBoardFeedsCard from "./Sections/AuthBoardFeedsCard";

import "./AuthBoard.css";
import AuthBoardComments from "./Sections/AuthBoardComments";

const AuthBoard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="authBoard-container">
      {/* <h1>지키미인증 페이지</h1> */}
      <React.Fragment>
        <AuthBoardPost />
        <AuthBoardFeedsCard />
      </React.Fragment>
    </div>
  );
};

export default withRouter(AuthBoard);
