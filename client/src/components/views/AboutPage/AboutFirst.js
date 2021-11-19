import React, { useEffect, useState } from "react";

import { Carousel } from "react-scroll-slider";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#3b5998",
    fontSize: "4.5rem",
    textShadow: "2px 2px #fff",
  },
  colorText: {
    color: "#008099",
    textShadow: "2px 2px #fff",
  },
  goDown: {
    color: "#3b5998",
    fontSize: "5rem",
  },
}));
export default function About() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Carousel>
      <div className={classes.root} id="header">
        <CssBaseline />
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.container}>
            <h1 className={classes.title}>
              Welcome to <br />
              us<span className={classes.colorText}>Earth</span>
            </h1>
            <Scroll to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>
    </Carousel>
  );
}
