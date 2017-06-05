import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import Home from "./scenes/home";

const Reducers = combineReducers([]);
const middlewares = compose(applyMiddleware(Thunk), offline(offlineConfig));
const store = createStore(Reducers, middlewares);

export default function() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

/*import { Scene, Router } from "react-native-router-flux";

export default function() {
  <Router>
    <Scene key="root">
      <Scene hideNavBar key="home" component={Home} />
    </Scene>
  </Router>;
}*/
