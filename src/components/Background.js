import clsx from "clsx";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BG from "../img/background.png";
import Boat from "../img/boat.png";

export default function Home(props) {
  const classes = useStyles();

  const [slideBackground, setSlideBackground] = React.useState(false);
  const [rollBackground, setRollBackground] = React.useState(false);
  const [slideBoat, setSlideBoat] = React.useState(false);

  setTimeout(() => {
    setSlideBackground(true);
  }, 1);

  setTimeout(() => {
    setSlideBoat(true);
  }, 1000);

  setTimeout(() => {
    setRollBackground(true);
  }, 1000);

  return (
    <React.Fragment>
      <div
        className={clsx({
          [classes.bg]: true,
          [classes.slideBackground]: slideBackground,
          [classes.rollBackground]: rollBackground,
        })}
      />
      <div className={classes.boatWrapper}>
        <img
          src={Boat}
          alt="boat"
          className={clsx({
            [classes.boat]: true,
            [classes.slideBoat]: slideBoat,
          })}
        />
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    opacity: 1,
    left: -1500,
    width: 4500,
    top: "100%",
    zIndex: -100,
    height: "100%",
    position: "fixed",
    overflow: "hidden",
    backgroundRepeat: "repeat-x",
    backfaceVisibility: "hidden",
    backgroundSize: "500px auto",
    transition: "top 1s ease-out",
    transform: "translate3d(0,0,0)",
    background: `#DCE0F0 url(${BG}) bottom left`,
    [theme.breakpoints.up("md")]: {
      backgroundSize: "1000px auto",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundSize: "1500px auto",
    },
  },
  slideBackground: {
    top: 0,
  },
  rollBackground: {
    animation: "$bg 60s linear infinite",
  },
  "@keyframes bg": {
    "0%": {
      transform: "translate3d(0,0,0)",
    },
    "100%": {
      transform: "translate3d(500px,0,0)",
    },
    [theme.breakpoints.up("md")]: {
      "0%": {
        transform: "translate3d(0,0,0)",
      },
      "100%": {
        transform: "translate3d(1000px,0,0)",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "0%": {
        transform: "translate3d(0,0,0)",
      },
      "100%": {
        transform: "translate3d(1500px,0,0)",
      },
    },
  },
  boatWrapper: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    overflow: "hidden",
  },
  boat: {
    zIndex: 50,
    height: 50,
    right: "-100vw",
    overflow: "hidden",
    position: "relative",
    bottom: "calc(-100vh + 50px)",
    transition: "right 3s ease-out",
    [theme.breakpoints.up("md")]: {
      height: 75,
      bottom: "calc(-100vh + 100px)",
    },
    [theme.breakpoints.up("lg")]: {
      height: 100,
      bottom: "calc(-100vh + 125px)",
    },
  },
  slideBoat: {
    right: "calc(-100vw + 150px)",
    [theme.breakpoints.up("md")]: {
      right: "calc(-100vw + 200px)",
    },
    [theme.breakpoints.up("lg")]: {
      right: "calc(-100vw + 325px)",
    },
  },
}));
