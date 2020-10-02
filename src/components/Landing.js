import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Container,
  IconButton,
  Link,
  Tooltip,
  Typography,
  Zoom,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import WebSharpIcon from "@material-ui/icons/WebSharp";

export default function Landing(props) {
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
          <Tooltip TransitionComponent={Zoom} title="Follow me on twitter">
            <IconButton
              rel="noopener"
              target="_blank"
              component={Link}
              href="https://twitter.com/jakebottrall"
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Connect on LinkedIn">
            <IconButton
              rel="noopener"
              target="_blank"
              component={Link}
              href="https://www.linkedin.com/in/jake-bottrall-77ab31169/"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip
            TransitionComponent={Zoom}
            title="Check out my projects on GitHub"
          >
            <IconButton
              rel="noopener"
              target="_blank"
              component={Link}
              href="https://github.com/jakebottrall"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="My Portfolio">
            <IconButton>
              <Link component={RouterLink} to="/portfolio">
                <WebSharpIcon fontSize="large" />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Get in touch">
            <IconButton>
              <Link component={RouterLink} to="/contact">
                <EmailSharpIcon fontSize="large" />
              </Link>
            </IconButton>
          </Tooltip>
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
}));
