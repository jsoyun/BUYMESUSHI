import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutCard from "../AboutPage/AboutCard";
import places from "./places";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
}
