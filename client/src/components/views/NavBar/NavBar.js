import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import "./NavBar.css";
// import Stack from "@mui/material/Stack";
import { createTheme, Link, ThemeProvider } from "@mui/material";
import axios from "axios";
import { withRouter } from "react-router";
import RightMenu from "./Sections/RightMenu";
import MiddleMenu from "./Sections/MiddleMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  appBarTransparent: {
    backgroundColor: "rgba(67, 129, 168, 0.5)",
  },
  appBarSolid: {
    backgroundColor: "rgba(67, 129, 168)",
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

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
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarsolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={classes.root}>
      {/* <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}> */}
      <AppBar
        position="fixed"
        className={classes[navRef.current]}
        style={{ background: "#000000" }}
      >
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
      {/* </ThemeProvider>
      </Stack> */}
    </Box>
  );
};

export default withRouter(NavBar);
