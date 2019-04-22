import { getDefaultAccount } from "../components/list/helpers";
import epics from "../epics";
import { combineEpics } from "redux-observable";
import { getAccountsListEpic } from "../epics/AccountEpic";

import * as accountEpic from "../epics/AccountEpic";
import dictionaryEpic from "../epics/DictionaryEpic";

describe("helpers", () => {
  it("should handle getDefaultAccount", () => {
    expect(getDefaultAccount()).toEqual({
      id: 0,
      accountHolderName: "",
      employeeName: "",
      bankName: "",
      branchName: "",
      accountType: "",
      accountNumber: "",
      employeeNumber: "",
      lastUpdate: ""
    });
  });

  it("epics index", () => {
  const epicsExpected = combineEpics(
    ...getAccountsListEpic,
    ...dictionaryEpic
  );
    expect(epics).toEqual(epicsExpected);
  });
});