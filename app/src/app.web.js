import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import { HashRouter } from "react-router-dom";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createHashHistory";

import Reducers from "./reducers/";
import HomeScene from "./scenes/home";

const history = createHistory();
const routerMiddlewareCreated = routerMiddleware(history);
const reducers = combineReducers({ ...Reducers, route: routerReducer });
const appliedMiddlewards = applyMiddleware(routerMiddlewareCreated, Thunk);
const composedMiddlewards = compose(appliedMiddlewards, offline(offlineConfig));
const storeParams = [reducers, composedMiddlewards];
const store = createStore(...storeParams);

export default function() {
  return (
    <Provider store={store}>
      <HomeScene />
    </Provider>
  );
}
