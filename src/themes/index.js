import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#DCE0F0",
    },
    primary: {
      main: "#66297E",
    },
    secondary: {
      main: "#C70040",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
