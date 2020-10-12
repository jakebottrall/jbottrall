import React from "react";
import { Link } from "react-router-dom";

import { IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function BackButton({ location }) {
  const classes = useStyles();

  // display back button only if the current location is not the landing page
  if (location.pathname === "/") return null;

  return (
    <IconButton
      className={classes.root}
      component={Link}
      to="/"
      data-testid="back-button"
    >
      <ArrowBackIcon fontSize="large" />
    </IconButton>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    left: 0,
    zIndex: 10000,
    position: "absolute",
  },
}));
