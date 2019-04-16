import { combineReducers } from "redux";

import { accountReducer, AccountState } from "./AccountReducer";

export type RootState = {
  account: AccountState;
};

const reducers = combineReducers({
  account: accountReducer
});

export default reducers;
