import { SnackbarProvider } from "notistack";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { CssBaseline } from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/core/styles";

import packageJSON from "../package.json";
import Main from "./components/Main";
import { theme } from "./themes";

console.log(`jakebottrall.com v ${packageJSON.version}`);

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <CssBaseline />
          <Main />
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}
