import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./theme/GlobalStyles";
import {ThemeProvider} from 'styled-components';
import Theme from './theme/theme';

const app = (
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

const root = document.getElementById("root");

ReactDOM.render(app, root);