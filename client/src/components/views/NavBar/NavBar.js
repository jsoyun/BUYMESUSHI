import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import "./NavBar.css";
// import Stack from "@mui/material/Stack";
import { createTheme, Link, Stack, ThemeProvider } from "@mui/material";
import axios from "axios";
import { withRouter } from "react-router";
import RightMenu from "./Sections/RightMenu";
import MiddleMenu from "./Sections/MiddleMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  icon: {
    color: "#fff",
    fontSize: "1.1rem",
  },
  colorText: {
    color: "#3b5998",
  },
  appbarTitle: {
    flexGrow: "1",
    fontSize: "23px",
  },
}));

const NavBar = (props) => {
  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        // style={{ background: "#000000" }}
        style={{
          boxShadow: "none",
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <Link href="/" sx={{ ml: 3, mr: 2 }}>
            <img className="navbar-logo" src="img/usEarth.png" />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 25 }}>
            <h2>
              us<span color="#3b5998">Earth</span>
            </h2>
          </Typography>
          <MiddleMenu />
          <RightMenu />
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default withRouter(NavBar);
