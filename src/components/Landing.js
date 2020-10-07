import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Container, Link, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import WebSharpIcon from "@material-ui/icons/WebSharp";

import NavItem from "./NavItem";

const navItems = [
  {
    delay: "200ms",
    component: Link,
    type: "external",
    title: "Follow me on twitter",
    href: "https://twitter.com/jakebottrall",
    Icon: () => {
      return <TwitterIcon fontSize="large" />;
    },
  },
  {
    delay: "300ms",
    component: Link,
    type: "external",
    title: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/jake-bottrall-77ab31169/",
    Icon: () => {
      return <LinkedInIcon fontSize="large" />;
    },
  },
  {
    delay: "400ms",
    component: Link,
    type: "external",
    title: "Check out my projects on GitHub",
    href: "https://github.com/jakebottrall",
    Icon: () => {
      return <GitHubIcon fontSize="large" />;
    },
  },
  {
    delay: "500ms",
    to: "/portfolio",
    type: "internal",
    component: RouterLink,
    title: "My Portfolio",
    Icon: () => {
      return <WebSharpIcon fontSize="large" />;
    },
  },
  {
    delay: "600ms",
    to: "/contact",
    type: "internal",
    component: RouterLink,
    title: "Get in touch",
    Icon: () => {
      return <EmailSharpIcon fontSize="large" />;
    },
  },
];

export default function Landing() {
  const classes = useStyles();
  const bullet = <span className={classes.bullet}>•</span>;
  return (
    <main className={classes.main}>
      <Container maxWidth="sm">
        <Typography
          variant="h1"
          align="center"
          component="h1"
          className={classes.title}
        >
          Jake Bottrall
        </Typography>
        <Typography
          component="p"
          align="center"
          variant="subtitle1"
          className={classes.subtitle}
        >
          Web Dev {bullet} Tech Enthusiast {bullet} Decent Bloke
        </Typography>
        <nav className={classes.nav}>
          {navItems.map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </nav>
      </Container>
    </main>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    zIndex: 100,
    width: "100vw",
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 900,
    fontSize: "4.35em",
  },
  subtitle: {
    fontSize: "1.35em",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
