import clsx from "clsx";
import React, { useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewSharpIcon from "@material-ui/icons/OpenInNewSharp";

import { LightTooltip } from "./Feedback/Tooltips";

export default function PortfolioItem(props) {
  const { item, index, tab } = props;
  const classes = useStyles();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Box
      p={3}
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={clsx({
        [classes.root]: true,
        [classes.activeTab]: tab === index,
      })}
    >
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Link href={item.url} target="_blank">
            <div className={classes.imgContainer}>
              <img
                alt={item.title}
                src={item.screenshot}
                onLoad={() => setImgLoaded(true)}
                className={clsx({
                  [classes.screenshot]: true,
                  [classes.imgLoaded]: imgLoaded,
                })}
              />
              {!imgLoaded && <CircularProgress className={classes.loader} />}
            </div>
          </Link>
        </Grid>
        <Grid item sm={12} md={6} className={classes.content}>
          <Typography
            noWrap
            variant="h3"
            gutterBottom
            align="center"
            component="h3"
          >
            {item.title}
            <IconButton
              href={item.url}
              target="_blank"
              component={Link}
              disabled={!item.url ? true : false}
            >
              <OpenInNewSharpIcon />
            </IconButton>
            <br />
            <Button
              rel="noopener"
              target="_blank"
              component={Link}
              underline="none"
              color="secondary"
              href={item.github}
              variant="outlined"
              startIcon={<GitHubIcon />}
              disabled={!item.github ? true : false}
            >
              {item.github
                ? "Check out the repo"
                : "Sorry this is a private repo"}
            </Button>
          </Typography>
          <div>{item.description()}</div>
          <div className={classes.stackWrapper}>
            {item.stack.map((x, i) => (
              <LightTooltip key={i} title={x.name}>
                <img src={x.logo} alt={x.name} className={classes.svg} />
              </LightTooltip>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "none",
    maxWidth: "100%",
    overflowY: "scroll",
    height: "calc(100vh - 25px - 72px - 48px)",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    [theme.breakpoints.up("md")]: {
      overflowY: "hidden",
      backgroundColor: "transparent",
    },
  },
  activeTab: {
    display: "flex",
  },
  imgContainer: {
    height: "auto",
    textAlign: "center",
    position: "relative",
  },
  loader: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  screenshot: {
    opacity: 0,
    height: "auto",
    maxWidth: "100%",
    border: "5px solid white",
    transition: "opacity 0.5s ease",
  },
  imgLoaded: {
    opacity: 1,
  },
  content: {
    maxWidth: "100%",
  },
  stackWrapper: {
    width: "100%",
    paddingTop: 50,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
  svg: {
    padding: 5,
    height: "5em",
    marginBottom: 5,
    [theme.breakpoints.up("md")]: {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.25)",
      },
    },
  },
}));
