import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./layouts/App";
import stores from './stores';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
