import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/theme";

import { Provider } from "react-redux";
import store from "./store/store";

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

const root = document.getElementById("root");

ReactDOM.render(app, root);
