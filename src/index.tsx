import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { TaskProvider } from "./shared/Context/TaskContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//! This is an object the format of our choice we can declare any keys we want.
//! Those keys can then be stripped out of the theme and used with styled components
//! As long as we pass this object (which doesn't actually have to be called theme)
//! To the ThemeProvider below as the theme prop
const theme = {
  colors: {
    primary: "orange",
    secondary: "blue",
    accent: "purple",
  },
  fontSize: {
    heading: "50px",
    subHeading: "100px",
  },
};

root.render(
  //! The ThemeProvider from @emotion/react needs to wrap any elements / components
  //! That want access to the theme we have created. The theme prop needs a theme object
  <TaskProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </TaskProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
