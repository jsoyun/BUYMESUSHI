import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

import "./NavBar.css";
import { createTheme, Link, useScrollTrigger } from "@mui/material";
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

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

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
        <Box sx={{ flexGrow: 5 }}>
            <ElevationScroll {...props}>
                <AppBar position="fixed" style={{ background: "#000000" }}>
                    <Toolbar>
                        <div>
                            <Link href="/" sx={{ flexGrow: 3, ml: 15, mr: 2 }}>
                                <img
                                    className="navbar-logo"
                                    src="/img/usEarth.png"
                                />
                            </Link>
                        </div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 2, mr: 25 }}
                        >
                            <h2 className={classes.appbarTitle}>
                                us
                                <span className={classes.colorText}>Earth</span>
                            </h2>
                        </Typography>
                        <MiddleMenu />
                        <RightMenu />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Box>
    );
};

export default withRouter(NavBar);
