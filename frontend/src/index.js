import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainContext from "./context/MainContext";
import { ThemeProvider } from "@emotion/react";
import {createTheme} from '../src/Theme/theme'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainContext>
          <App />
        </MainContext>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
