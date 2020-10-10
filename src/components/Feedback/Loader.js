import React from "react";

import { Backdrop, CircularProgress } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

export default function Loader(props) {
  const classes = useStyles();
  const { open } = props;
  return (
    <Backdrop
      open={open}
      className={classes.backdrop}
      data-testid="loader-backdrop"
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: "#fff",
    zIndex: theme.zIndex.drawer + 1,
  },
}));
