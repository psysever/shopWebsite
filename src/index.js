import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";

let alertiv = true;

function reducer2(state = alertiv, action) {
  if (action.type === "alertclose") {
    state = false;
    return state;
  } else {
    return state;
  }
  return state;
}

let iv = [{ id: 0, name: "white and black", quan: 1 }];

function reducer(state = iv, action) {
  if (action.type === "PDUpdate") {
    let found = state.findIndex(a => {
      return a.id === action.data.id;
    });
    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(action.data);
      return copy;
    }
  } else if (action.type === "QuanUp") {
    let copy = [...state];
    copy[action.data].quan++;
    return copy;
  } else if (action.type === "QuanDown") {
    let copy = [...state];
    copy[action.data].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
