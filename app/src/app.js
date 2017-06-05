import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import { HashRouter } from "react-router-dom";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createHashHistory";
import { Route, Switch } from "react-router";

import Reducers from "./reducers/";
import HomeScene from "./scenes/home";
import TestScene from "./scenes/test";

const history = createHistory();
const routerMiddlewareCreated = routerMiddleware(history);
const reducers = combineReducers({ ...Reducers, route: routerReducer });
const appliedMiddlewards = applyMiddleware(routerMiddlewareCreated, Thunk);
const composedMiddlewards = compose(appliedMiddlewards);
// const composedMiddlewards = compose(appliedMiddlewards, offline(offlineConfig));
const storeParams = [reducers, composedMiddlewards];
const store = createStore(...storeParams);

export default function() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={HomeScene} />
          <Route path="/Home" exact={true} component={HomeScene} />
          <Route path="/Test" exact={true} component={TestScene} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}
