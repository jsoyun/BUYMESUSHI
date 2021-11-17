import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutCards from "../AboutPage/AboutCards";
import places from "./places";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "80vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function Aboutme() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <>
      <div className={classes.root} id="place-to-visit">
        <AboutCards place={places[0]} checked={checked} />
        <AboutCards place={places[1]} checked={checked} />
      </div>
      <br />
      <div className={classes.root} id="place-to-visit">
        <AboutCards place={places[2]} checked={checked} />
      </div>
      <div className={classes.root} id="place-to-visit">
        <AboutCards place={places[3]} checked={checked} />
      </div>
    </>
  );
}
