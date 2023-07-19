import React from "react";
import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3430E4",
    },
    secondary: {
      main: "#3430E4",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Arial", "Helvetica", "sans-serif"].join(","),
    h1: {
      fontSize: "48px",
      fontWeight: "bold",
    },
    h2: {
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
    },
  },
});
