import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

import "./NavBar.css";
import { createTheme, Link } from "@mui/material";
import axios from "axios";
import { withRouter } from "react-router";
import RightMenu from "./Sections/RightMenu";
import MiddleMenu from "./Sections/MiddleMenu";

const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#000000" }}>
        <Toolbar>
          <Link href="/" sx={{ ml: 15, mr: 2 }}>
            <img className="navbar-logo" src="img/usEarth.png" />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 25 }}>
            <h2 className={classes.appbarTitle}>
              us<span className={classes.colorText}>Earth</span>
            </h2>
          </Typography>
          <MiddleMenu />
          <RightMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withRouter(NavBar);
