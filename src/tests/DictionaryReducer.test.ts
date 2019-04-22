import { dictionaryReducer } from "../reducers/\DictionaryReducer";
import * as actions from "../actions";

describe("DictionaryReducer", () => {
  it("should return the initial state", () => {
    // pass wrong action
    expect(dictionaryReducer(undefined, { type: "GET_ACCOUNTS_LIST", payload: null})).toEqual(
      {
        loaded: false,
        branches: [],
        banks: [],
      }
    );
  });

  it("should handle getBranchesSuccessAction", () => {
    expect(dictionaryReducer(undefined, {
        type: actions.GET_BRANCHES_SUCCESS,
        payload: ["aaa"]
      })
    ).toEqual({
      loaded: false,
      branches: ["aaa"],
      banks: [],
    });

    expect(dictionaryReducer({
      loaded: false,
      branches: ["aaa"],
      banks: [],
    }, {
        type: actions.GET_BRANCHES_SUCCESS,
        payload: ["bbb"]
      })
    ).toEqual({
        loaded: false,
        branches: ["bbb"],
        banks: [],
      }
    );

  });

  it("should handle getBranchesFailAction", () => {
    expect(dictionaryReducer(undefined, {
        type: actions.GET_BRANCHES_FAIL,
        payload: {
          message: "error!",
          name: "", stack: ""}
      })
    ).toEqual({
      loaded: false,
      branches: [],
      banks: [],
    });

  });

  it("should handle getBanksSuccessAction", () => {
    expect(dictionaryReducer(undefined, {
        type: actions.GET_BANKS_SUCCESS,
        payload: ["bank1"]
      })
    ).toEqual({
      loaded: false,
      branches: [],
      banks: ["bank1"],
    });

    expect(dictionaryReducer({
      loaded: false,
      banks: ["bank2"],
      branches: [],
    }, {
        type: actions.GET_BANKS_SUCCESS,
        payload: ["bank0", "bank1"]
      })
    ).toEqual({
        loaded: false,
        branches: [],
        banks: ["bank0", "bank1"],
      }
    );

  });

  it("should handle getBanksFailAction", () => {
    expect(dictionaryReducer(undefined, {
        type: actions.GET_BANKS_FAIL,
        payload: {
          message: "error!",
          name: "", stack: ""}
      })
    ).toEqual({
      loaded: false,
      branches: [],
      banks: [],
    });

  });

});