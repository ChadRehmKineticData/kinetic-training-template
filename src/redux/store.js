import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reducers from "./reducers";

export const configureStore = history => {
  const store = createStore(
    connectRouter(history)(
      combineReducers({
        ...reducers,
        router: connectRouter(history)
      })
    ),
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
};
