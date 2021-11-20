import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthBoardPost from "./Sections/AuthBoardPost";
import AuthBoardFeedsCard from "./Sections/AuthBoardFeedsCard";

import "./AuthBoard.css";
import AuthBoardComments from "./Sections/AuthBoardComments";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "100vw",
    height: "100%",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/img/authBoard/bg5.jpg"
    })`,
    backgroundRepeat: "repeat",
    // backgroundSize: "cover",
  },
}));

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
