import { combineEpics } from "redux-observable";

import getAccountsListEpic from "./AccountEpic";
import dictionaryEpic from "./DictionaryEpic";

const epics = combineEpics(
  ...getAccountsListEpic,
  ...dictionaryEpic
);

export default epics;
