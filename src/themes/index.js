import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#DCE0F0",
    },
    primary: {
      main: "#66297E",
      light: "#9656ae",
      dark: "#380051",
    },
    secondary: {
      main: "#C70040",
      light: "#ff4f6a",
      dark: "#8f001a",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
          color: "#9656ae",
        },
      },
    },
    MuiLink: {
      underlineHover: {
        "&:hover": {
          color: "#9656ae",
        },
      },
    },
  },
});
