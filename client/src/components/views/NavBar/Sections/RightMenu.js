import React, { useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

const NavButton = styled(Button)({
    borderRadius: "5px",
    '&:hover': {
        backgroundColor: '#3b5998',
    },
});

const BtnBox = styled.div`
    display: flex;
    @media only screen and (max-width: 954px) {
        display: block;
    }
`;

const ButtonBox = styled.div`
    display: flex;
    margin-top: 10px;
`;

const RightMenu = (props) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };

    const user = useSelector((state) => state.user);
    console.log(cartItems);
    const onClickHandler = () => {
        axios.get("/api/users/logout").then((response) => {
            if (response.data.success) {
                localStorage.removeItem("cart");
                props.history.push("/login");
            } else {
                alert("로그아웃 하는데 실패 했습니다.");
            }
        });
    };

    if (user.userData && !user.userData.isAuth) {
        return (
            <BtnBox>
                <NavButton sx={{ ml: 10, mr: 1 }} href="/login" color="inherit">
                    Login
                </NavButton>
                <NavButton sx={{ mr: 7 }} href="/register" color="inherit">
                    Register
                </NavButton>
            </BtnBox>
        );
    } else {
        return (
            <ButtonBox>
                <NavButton
                    sx={{ ml: 10, mr: 1 }}
                    color="inherit"
                    onClick={onClickHandler}
                >
                    Logout
                </NavButton>
                <NavButton sx={{ ml: 1, mr: 1 }} color="inherit" href="/mypage">
                    마이페이지
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cartlogo_badge">{getCartCount()}</span>
                </NavButton>
            </ButtonBox>
        );
    }
};

export default withRouter(RightMenu);
