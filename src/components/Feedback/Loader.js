import React from "react";
import { connect } from "react-redux";

import { Backdrop, CircularProgress } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

function Loader(props) {
  const classes = useStyles();
  const { loader } = props;
  return (
    <Backdrop className={classes.backdrop} open={loader}>
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

function mapStateToProps(state) {
  return {
    loader: state.loader,
  };
}

export default connect(mapStateToProps)(Loader);
