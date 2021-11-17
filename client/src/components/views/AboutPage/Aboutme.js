import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./Aboutpoint";
import datas from "../../views/AboutPage/data";
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
      <ImageCard data={datas[1]} checked={checked} />
      <ImageCard data={datas[0]} checked={checked} />
    </div>
  );
}
