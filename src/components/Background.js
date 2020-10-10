import clsx from "clsx";
import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import BG from "../assets/background.png";
import Boat from "../assets/boat.png";
import useBackgroundStatus from "./Hooks/useBackgroundStatus";

export default function Home() {
  const classes = useStyles();

  const backgroundStatus = useBackgroundStatus();
  const [slideBackground, setSlideBackground] = useState(false);
  const [rollBackground, setRollBackground] = useState(false);
  const [slideBoat, setSlideBoat] = useState(false);

  // if both background assets have loaded initiate animations
  if (backgroundStatus) {
    // Slide the background up once
    setTimeout(() => {
      setSlideBackground(true);
    }, 1);

    // slide the boat left once
    setTimeout(() => {
      setSlideBoat(true);
    }, 1000);

    // roll the background infinitely
    setTimeout(() => {
      setRollBackground(true);
    }, 1000);
  }
  return (
    <Fragment>
      <div
        id="bg"
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
    </Fragment>
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
    [theme.breakpoints.up("lg")]: {
      backgroundSize: "1500px auto",
    },
  },
  slideBackground: {
    top: 0,
  },
  rollBackground: {
    animation: "$bg 20s linear infinite",
  },
  "@keyframes bg": {
    "0%": {
      transform: "translate3d(0,0,0)",
    },
    "100%": {
      transform: "translate3d(1500px,0,0)",
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
    [theme.breakpoints.up("lg")]: {
      height: 100,
      bottom: "calc(-100vh + 125px)",
    },
  },
  slideBoat: {
    right: "calc(-100vw + 150px)",
    [theme.breakpoints.up("lg")]: {
      right: "calc(-100vw + 325px)",
    },
  },
}));
