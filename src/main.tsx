import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-react-table/styles.css"; //import MRT styles
import { Notifications } from "@mantine/notifications";

import classes from "./index.module.scss";
import { BrowserRouter } from "react-router-dom";
import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
  rem,
} from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#ffeaec",
  "#fdd4d6",
  "#f4a7ac",
  "#ec777e",
  "#e64f57",
  "#e3353f",
  "#e22732",
  "#c91a25",
  "#b31220",
  "#9e0419",
];

const theme = createTheme({
  activeClassName: classes.active,
  colors: {
    myColor,
  },
  white: "#f2f2f2 ",
  fontFamily: "Quicksand, sans-serif",
  headings: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  },
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
    l: " 0 -4px   6px -1px rgba(0,   0,   0,   0.1)",
  },
  autoContrast: true,
  luminanceThreshold: 1,
  defaultRadius: "md",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <BrowserRouter>
      <Notifications />
      <App />
    </BrowserRouter>
  </MantineProvider>
);
