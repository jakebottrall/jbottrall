import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { makeStyles } from "@material-ui/core/styles";

import { setLoader } from "../store/actions/loader";
import BackButton from "./BackButton";
import Background from "./Background";
import Contact from "./Contact";
import Landing from "./Landing";
import Portfolio from "./Portfolio";

const routes = [
  { path: "/", Component: Landing },
  { path: "/portfolio", Component: Portfolio },
  { path: "/contact", Component: Contact },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intialLoad: false, bgLoaded: false, boatLoaded: false };
  }

  componentDidUpdate() {
    const { setLoader } = this.props;
    const { initialLoad, bgLoaded, boatLoaded } = this.state;

    if (!initialLoad && bgLoaded && boatLoaded) {
      this.setState({ initialLoad: true });
      setLoader(false);
    }
  }

  setBGLoaded = (bgLoaded) => {
    this.setState({ bgLoaded });
  };

  setBoatLoaded = (boatLoaded) => {
    this.setState({ boatLoaded });
  };

  render() {
    const { classes } = this.props;
    const { bgLoaded, boatLoaded } = this.state;
    return (
      <div className={classes.root}>
        <Background
          bgLoaded={bgLoaded}
          boatLoaded={boatLoaded}
          setBGLoaded={this.setBGLoaded}
          setBoatLoaded={this.setBoatLoaded}
        />
        {bgLoaded && boatLoaded && (
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={this.props.location.key}
              timeout={{ enter: 500, exit: 500 }}
              classNames="slide"
            >
              <div className={classes.wrapper}>
                <BackButton {...this.props} />
                <Switch location={this.props.location}>
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

function StyledWrapper(props) {
  const classes = useStyles();

  return <Main {...props} classes={classes} />;
}

export default connect(null, {
  setLoader,
})(withRouter(StyledWrapper));
