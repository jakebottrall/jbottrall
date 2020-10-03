import React from "react";

import { Tab, Tabs, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { data } from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function Portfolio() {
  const classes = useStyles();
  const [width, setWidth] = React.useState(window.innerWidth);
  const [value, setValue] = React.useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateWidth, true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={classes.titleContainer}>
        <Typography component="h2" variant="h2">
          Portfolio
        </Typography>
      </div>
      <div className={classes.tabsWrapper}>
        <Tabs
          value={value}
          variant="scrollable"
          orientation={width > 960 ? "vertical" : "horizontal"}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="primary"
        >
          {data.map((x, i) => (
            <Tab key={i} label={x.title} {...a11yProps(i)} />
          ))}
        </Tabs>
        {data.map((x, i) => (
          <PortfolioItem item={x} key={i} value={value} index={i} />
        ))}
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 25,
    height: 72,
  },
  tabsWrapper: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      paddingTop: 65,
      flexDirection: "row",
    },
  },
  tabs: {
    minWidth: 200,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
