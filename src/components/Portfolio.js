import React from "react";

import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

export default function Landing(props) {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Typography
        variant="h1"
        align="center"
        component="h1"
        className={classes.title}
      >
        Portfolio
      </Typography>
    </main>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    zIndex: 100,
    width: "100vw",
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
}));
