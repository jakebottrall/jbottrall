import { SnackbarProvider } from "notistack";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { CssBaseline } from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/core/styles";

import Loader from "./components/Feedback/Loader";
import Notifier from "./components/Feedback/Notifier";
import Main from "./components/Main";
import store from "./store";
import { theme } from "./themes";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <CssBaseline />
            <Loader />
            <Notifier />
            <Main />
          </SnackbarProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
