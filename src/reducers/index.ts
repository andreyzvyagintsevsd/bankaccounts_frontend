import { combineReducers } from "redux";

import { accountReducer, AccountState } from "./AccountReducer";
import { dictionaryReducer, DictionaryState } from "./DictionaryReducer";

export type RootState = {
  account: AccountState;
  dictionary: DictionaryState;
};

const reducers = combineReducers({
  account: accountReducer,
  dictionary: dictionaryReducer
});

export default reducers;
