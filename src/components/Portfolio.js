import React, { useState } from "react";
import { connect } from "react-redux";

import { Tab, Tabs, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { data } from "../data/portfolio";
import { setLoader } from "../store/actions/loader";
import useWindowSize from "./Hooks/useWindowSize";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  const [tab, setTab] = useState(0);

  // Get window dimensions and add event listener
  const size = useWindowSize();

  const handleTabs = (e, tab) => {
    e.preventDefault();
    setTab(tab);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.titleContainer}>
        <Typography component="h2" variant="h2">
          Portfolio
        </Typography>
      </div>
      <div className={classes.tabsWrapper}>
        <Tabs
          value={tab}
          variant="scrollable"
          onChange={handleTabs}
          className={classes.tabs}
          indicatorColor="primary"
          orientation={size.width > 960 ? "vertical" : "horizontal"}
        >
          {data.map((x, i) => (
            <Tab
              key={i}
              label={x.title}
              id={`tab-${i}`}
              aria-controls={`tabpanel-${i}`}
            />
          ))}
        </Tabs>
        {data.map((x, i) => (
          <PortfolioItem key={i} item={x} index={i} tab={tab} />
        ))}
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    height: 72,
    width: "100%",
    marginTop: 25,
    display: "flex",
    justifyContent: "center",
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

export default connect(null, {
  setLoader,
})(Portfolio);
