import React from "react";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewSharpIcon from "@material-ui/icons/OpenInNewSharp";

export default function PortfolioItem(props) {
  const { item, index, value } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      <Box p={3} className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Link href={item.url} target="_blank">
              <img
                className={classes.screenshot}
                src={item.screenshot}
                alt={item.title}
              />
            </Link>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography align="center" component="h3" variant="h3" gutterBottom>
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
                color="secondary"
                href={item.github}
                variant="outlined"
                underline="none"
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
                <Tooltip key={i} title={x.name}>
                  <img className={classes.svg} src={x.logo} alt={x.name} />
                </Tooltip>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100%",
    overflowY: "scroll",
    height: "calc(100vh - 25px - 72px - 48px)",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    [theme.breakpoints.up("md")]: {
      overflowY: "hidden",
      backgroundColor: "transparent",
    },
  },
  screenshot: {
    maxWidth: "100%",
    height: "auto",
    border: "15px solid white",
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
    marginBottom: 5,
    borderRadius: 15,
    height: "5em",
    [theme.breakpoints.up("md")]: {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
    },
  },
}));
