import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./Aboutpoint";
import data from "../../views/AboutPage/data";
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
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={data[1]} checked={checked} />
      <ImageCard place={data[0]} checked={checked} />
    </div>
  );
}
