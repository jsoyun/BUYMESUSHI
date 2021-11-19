import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AboutFirst from "./AboutFirst";
import Aboutme from "./Aboutme";
import AboutCard from "./AboutCard";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/about/bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AboutFirst />
            <Aboutme />
            <AboutCard />
        </div>
    );
}
