import { getDefaultAccount } from "../components/list/helpers";
import { configureStore, enhancer, middlewares, store } from "../configureStore";
import reducers, { RootState } from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import epics from "../epics";
import { createEpicMiddleware } from "redux-observable";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";


describe("configureStore", () => {
  it("should handle configureStore", () => {
    let config = configureStore();

    let configureStoreC = configureStoreExpected();

    expect(config).not.toBeNull();
  });

//   it("should be properly configured", () => {
//     const epicMiddlewareExpected = createEpicMiddleware<Action, Action, RootState>();

//     expect(epicMiddleware).toEqual(epicMiddlewareExpected);
//   // configure middlewares
//  const middlewaresExpected = [
//     epicMiddleware,
//   ];
//   expect(middlewares).toEqual(middlewaresExpected);

//   // compose enhancers
//  const enhancerExpected = composeEnhancers(
//     applyMiddleware(...middlewares)
//   );
//   expect(enhancer).toEqual(enhancerExpected);
//   // create store

//   });
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
