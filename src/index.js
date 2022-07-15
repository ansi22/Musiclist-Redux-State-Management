import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";

import App from "./components/App";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// use of  redux
// we create following reducers:
// 1. song list reducers
// 2. Selected song reducer
// following actions would be created
// 1. select songs
