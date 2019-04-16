import { combineEpics } from "redux-observable";

import getAccountsListEpic from "./AccountEpic";

const epics = combineEpics(
  ...getAccountsListEpic
);

export default epics;
