import React from "react";
import { connect } from "react-redux";

import { Tab, Tabs, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { data } from "../data/portfolio";
import { setLoader } from "../store/actions/loader";
import PortfolioItem from "./PortfolioItem";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      imgLoaded: 0,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    const { setLoader } = this.props;
    setLoader(true);
    window.addEventListener("resize", this.updateWidth, true);
  }

  componentDidUpdate() {
    const { imgLoaded } = this.state;
    const { setLoader } = this.props;
    if (imgLoaded < data.length) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  handleTabs = (e, value) => {
    e.preventDefault();
    this.setState({ value });
  };

  handleImgLoad = () => {
    this.setState({ imgLoaded: this.state.imgLoaded + 1 });
  };

  render() {
    const { classes } = this.props;
    const { width, value, imgLoaded } = this.state;

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
            className={classes.tabs}
            indicatorColor="primary"
            onChange={this.handleTabs}
            orientation={width > 960 ? "vertical" : "horizontal"}
          >
            {data.map((x, i) => (
              <Tab key={i} label={x.title} {...a11yProps(i)} />
            ))}
          </Tabs>
          {data.map((x, i) => (
            <PortfolioItem
              key={i}
              item={x}
              index={i}
              value={value}
              imgLoaded={imgLoaded}
              handleImgLoad={this.handleImgLoad}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
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

function StyledWrapper(props) {
  const classes = useStyles();

  return <Portfolio {...props} classes={classes} />;
}

export default connect(null, {
  setLoader,
})(StyledWrapper);
