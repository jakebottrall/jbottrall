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
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
