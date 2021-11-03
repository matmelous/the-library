import { DefaultTheme } from "styled-components";
import { Breakpoint, Theme, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    formats?: {
      borderRadius?: string;
    };
  }
}

export const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          padding: "1em",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
        },
      },
    },
  },
  formats: {
    borderRadius: "42px",
  },

  palette: {
    text: {
      primary: "#242735",
    },
    background: {
      default: "#242735",
    },
    common: {
      black: "#333",
      white: "#ffffff",
    },
    primary: {
      main: "#046CFC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
});
