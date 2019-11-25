import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import configureStore from './store';
import App from "./app";

import "./globalStyles.scss";

const store = configureStore()

const mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  mountNode
);
