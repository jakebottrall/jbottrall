import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { makeStyles } from "@material-ui/core/styles";

import { setLoader } from "../store/actions/loader";
import BackButton from "./BackButton";
import Background from "./Background";
import Contact from "./Contact";
import useBackgroundStatus from "./Hooks/useBackgroundStatus";
import Landing from "./Landing";
import Portfolio from "./Portfolio";

const routes = [
  { path: "/", Component: Landing },
  { path: "/portfolio", Component: Portfolio },
  { path: "/contact", Component: Contact },
];

function Main(props) {
  const { setLoader } = props;

  // check if background assets have loaded
  const backgroundStatus = useBackgroundStatus();

  // set redux loader based on background assets
  useEffect(() => {
    if (!backgroundStatus) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [backgroundStatus, setLoader]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Background />
      {/* Wait for background assets to load before displaying pages */}
      {backgroundStatus && (
        <TransitionGroup className="transition-group">
          <CSSTransition
            classNames="slide"
            key={props.location.key}
            timeout={{ enter: 500, exit: 500 }}
          >
            <div className={classes.wrapper}>
              <BackButton {...props} />
              <Switch location={props.location}>
                {routes.map(({ path, Component }) => (
                  <Route
                    exact
                    key={path}
                    path={path}
                    render={(props) => <Component {...props} />}
                  />
                ))}
                <Route path="/*" component={Landing} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "absolute",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    animation: "$wrapper 1s linear",
  },
  "@keyframes wrapper": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default connect(null, {
  setLoader,
})(withRouter(Main));
