
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";
import reducers, { RootState } from "./reducers";
import epics from "./epics";

type Action = ActionType<typeof actions>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

  // configure middlewares
 export const middlewares = [
    epicMiddleware,
  ];
  // compose enhancers
 export const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

export function configureStore(initialState?: RootState) {

  // create store
  const store = createStore(
    reducers,
    initialState,
    enhancer
  );

  epicMiddleware.run(epics);

  return store;
}
