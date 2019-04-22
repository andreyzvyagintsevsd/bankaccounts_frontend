import { getDefaultAccount } from "../components/list/helpers";
import { configureStore } from "../configureStore";
import reducers, { RootState } from "../reducers";
import { createStore, compose } from "redux";
import epics from "../epics";
import { createEpicMiddleware } from "redux-observable";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";


describe("helpers", () => {
  it("should handle getDefaultAccount", () => {
    let config = configureStore();

    let configureStore = configureStoreExpected();

    expect(config).toEqual(configureStore);
  });
});




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

export function configureStoreExpected(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    epicMiddleware,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  const store = createStore(
    reducers,
    initialState,
    enhancer
  );

  epicMiddleware.run(epics);

  return store;
}
