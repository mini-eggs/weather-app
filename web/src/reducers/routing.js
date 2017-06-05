const initial = {
  path: "Home",
  history: []
};

const PUSH_ROUTE = "PUSH_ROUTE";

export function pushRoute(route) {
  return {
    type: PUSH_ROUTE,
    payload: route
  };
}

export default function(state = initial, { type, payload, routeName }) {
  switch (type) {
    case PUSH_ROUTE: {
      const history = state.history;
      history.push(state.path);
      return Object.assign({}, state, { path: payload, history: history });
    }
    default: {
      return state;
    }
  }
}
