import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./layout/App";
import { StoreProvider } from "easy-peasy";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
