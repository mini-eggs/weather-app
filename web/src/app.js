import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import Thunk from "redux-thunk";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import { Router, Scene } from "react-native-router-flux";
import Home from "./scenes/home";

const Reducers = combineReducers([]);
const middlewares = compose(applyMiddleware(Thunk), offline(offlineConfig));
const store = createStore(Reducers, middlewares);
const RouterConnect = connect()(Router);

export default function() {
  return (
    <Provider store={store}>
      <RouterConnect>
        <Scene key="root">
          <Scene hideNavBar key="home" component={Home} />
        </Scene>
      </RouterConnect>
    </Provider>
  );
}
