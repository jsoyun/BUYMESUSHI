import React, { useState } from "react";
import Button from "@mui/material/Button";

import axios from "axios";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

const RightMenu = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const user = useSelector((state) => state.user);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div>
        <Button sx={{ ml: 10, mr: 1 }} href="/login" color="inherit">
          Login
        </Button>
        <Button sx={{ mr: 30 }} href="/register" color="inherit">
          Register
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button sx={{ mr: 30 }} color="inherit" onClick={onClickHandler}>
          Logout
        </Button>
        <Button sx={{ ml: 10, mr: 1 }} color="inherit" href="/MyPage">
          마이페이지
          <i className="fas fa-shopping-cart"></i>
          <span className="cartlogo_badge">{getCartCount()}</span>
        </Button>
      </div>
    );
  }
};

export default withRouter(RightMenu);
