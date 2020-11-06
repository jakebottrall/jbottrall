import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { makeStyles } from "@material-ui/core/styles";

import useBackgroundStatus from "../hooks/useBackgroundStatus";
import BackButton from "./BackButton";
import Background from "./Background";
import Contact from "./Contact";
import Landing from "./Landing";
import Portfolio from "./Portfolio";
import Loader from "./feedback/Loader";

const routes = [
  { path: "/", Component: Landing },
  { path: "/portfolio", Component: Portfolio },
  { path: "/contact", Component: Contact },
];

// exported individually to allow for testing
export function Main(props) {
  // check if background assets have loaded
  const backgroundStatus = useBackgroundStatus();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Background />

      <Loader open={!backgroundStatus} />

      {backgroundStatus && (
        <TransitionGroup
          className="transition-group"
          data-testid="transition-group"
        >
          <CSSTransition
            classNames="slide"
            key={props.location.key}
            timeout={{ enter: 500, exit: 500 }}
          >
            <div className={classes.wrapper} data-testid="component-wrapper">
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

export default withRouter(Main);
